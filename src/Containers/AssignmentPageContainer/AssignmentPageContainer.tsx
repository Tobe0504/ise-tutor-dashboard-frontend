import { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MessageSentModal from './MessageSentModal'
import Toast from '../../Components/Toast/Toast'
import { AppContext } from '../../Context/AppContext'
import ActionsModal from './ActionsModal/ActionsModal'
import ellipses from '../../Assets/Images/ellipses.svg'
import classes from './AssignmentPageContainer.module.css'
import HelloUser from '../../Components/HelloUser/HelloUser'
import SendMessageModal from './SendMessageModal/SendMessageModal'
import GradeSubmissionModal from './GradeSubmissionModal/GradeSubmissionModal'
import AcceptedModal from '../../Components/Modals/AcceptedModal/AcceptedModal'
import RejectSubmissionModal from './RejectSubmissionModal/RejectSubmissionModal'
import AssignmentSummaryModal from './AssignmentSummaryModal/AssignmentSummaryModal'
import ApproveSubmissionModal from './ApproveSubmissionModal/ApproveSubmissionModal'
import DropdownWithSearch from '../../Components/DropdownWithSearch/DropdownWithSearch'

const AssignmentPageContainer = () => {
  // Context
  const { students } = useContext(AppContext)

  // States
  const [courseSelected, setCourseSelected] = useState('')
  const [studentsData, setStudentData] = useState(students)
  const [filterValue, setFilterValue] = useState('')

  const [displayApproveSubmissionModal, setDisplayApproveSubmissionModal] =
    useState(false)
  const [displayGradeSubmissionModal, setDisplayGradeSubmissionModal] =
    useState(false)
  const [displayGradeSubmissionToast, setDisplayGradeSubmissionToast] =
    useState(false)
  const [displayRejectSubmissionModal, setDisplayRejectSubmissionModal] =
    useState(false)
  const [displaySendMessageModal, setDisplaySendMessageModal] = useState(false)
  const [displayAssignmentSummaryModal, setDisplayAssignmentSummaryModal] =
    useState(false)
  const [displayMessageSentModal, setDisplayMessageSentModal] = useState(false)

  // Router
  const navigate = useNavigate()

  // Refs
  const optionsRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const courses = ['All']

  for (let i = 0; i < students.length; i++) {
    if (!(courses as string[]).includes(students[i].course)) {
      courses.push(students[i].course)
    }
  }

  const filterHandler = () => {
    const studentsCopy = students.filter((data) => {
      if (courseSelected === 'All') {
        return (
          data?.studentName.toLowerCase().includes(filterValue.toLowerCase()) ||
          data?.fileName.toLowerCase().includes(filterValue.toLowerCase())
        )
      }
      return (
        data?.course.toLowerCase().includes(courseSelected.toLowerCase()) &&
        (data?.studentName.toLowerCase().includes(filterValue.toLowerCase()) ||
          data?.fileName.toLowerCase().includes(filterValue.toLowerCase()))
      )
    })

    setStudentData(studentsCopy)
  }

  const optionsChangeHandler = (index: number) => {
    const studentsCopy = studentsData.map((data, i) => {
      if (i === index) {
        return { ...data, displayOptions: !data.displayOptions };
      }
      return { ...data, displayOptions: false };
    });

    setStudentData(studentsCopy);
  };

  useEffect(() => {
    filterHandler()

    // eslint-disable-next-line
  }, [courseSelected, filterValue])

  useEffect(() => {
    const removeOptions = (e: any) => {
      if (optionsRef && !optionsRef.current?.contains(e.target)) {
        const studentsCopy = studentsData.map((data) => {
          return { ...data, displayOptions: false }
        })
        setStudentData(studentsCopy)
      } else {
        const studentsCopy = studentsData.map((data) => {
          return { ...data }
        })
        setStudentData(studentsCopy)
      }
    }

    document.addEventListener('mousedown', removeOptions)

    return () => {
      document.removeEventListener('mousedown', removeOptions)
    }
  }, [studentsData])

  return (
    <div className={classes.container} ref={containerRef}>
      {displayApproveSubmissionModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayApproveSubmissionModal(false)
          }}
          body={
            <ApproveSubmissionModal
              title="Notice"
              onClick={() => {
                setDisplayApproveSubmissionModal(false)
              }}
              onClick2={() => {
                setDisplayGradeSubmissionModal(true)
              }}
            />
          }
        />
      )}
      {displayGradeSubmissionModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayGradeSubmissionModal(false)
          }}
          body={
            <GradeSubmissionModal
              onClick={() => {
                setDisplayApproveSubmissionModal(false)
                setDisplayGradeSubmissionModal(false)
              }}
              onClick2={() => {
                setDisplayApproveSubmissionModal(false)
                setDisplayGradeSubmissionModal(false)
                setDisplayGradeSubmissionToast(true)
              }}
            />
          }
        />
      )}
      {displayGradeSubmissionToast && (
        <Toast
          toastTeaxt="Grade successfully recorded!"
          onClick={() => {
            setDisplayGradeSubmissionModal(false)
            setDisplayGradeSubmissionToast(false)
          }}
        />
      )}
      {displayRejectSubmissionModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayRejectSubmissionModal(false)
          }}
          body={
            <RejectSubmissionModal
              onClick={() => {
                setDisplayRejectSubmissionModal(false)
              }}
              onClick2={() => {
                setDisplayMessageSentModal(true)
              }}
            />
          }
        />
      )}
      {displaySendMessageModal && (
        <AcceptedModal
          onClick={() => {
            setDisplaySendMessageModal(false)
          }}
          body={
            <SendMessageModal
              onClick={() => {
                setDisplaySendMessageModal(false)
              }}
              onClick2={() => {
                setDisplayMessageSentModal(true)
              }}
            />
          }
        />
      )}
      {displayAssignmentSummaryModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayAssignmentSummaryModal(false)
          }}
          body={
            <AssignmentSummaryModal
              onClick={() => {
                setDisplayAssignmentSummaryModal(false)
              }}
            />
          }
        />
      )}
      {displayMessageSentModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayMessageSentModal(false)
          }}
          body={
            <MessageSentModal
              onClick={() => {
                setDisplayMessageSentModal(false)
                setDisplayRejectSubmissionModal(false)
                setDisplaySendMessageModal(false)
              }}
            />
          }
        />
      )}

      <HelloUser
        header="Assignments"
        paragraph="Review student assignment, submission details, assignment status, grades, and give feedback here."
        notIncludePay
        notIncludeBg
      />

      <div className={classes.studentSeachInput}>
        <div className={classes.inputSection}>
          <input
            type="text"
            placeholder="Search by file name, student name"
            value={filterValue}
            onChange={(e) => {
              setFilterValue(e.target.value)
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="#2E2E2E"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <DropdownWithSearch
          label=""
          title="Selet a course"
          options={courses}
          selected={courseSelected}
          setSelected={setCourseSelected}
        />
      </div>

      <div className={classes.body}>
        <div className={classes.subBody}>
          <div className={classes.tableHeader}>
            <span>File name</span>
            <span>Student Name</span>
            <span>Status</span>
            <span>Grade</span>
            <span>Action</span>
          </div>

          <div className={classes.bodyContent}>
            {studentsData.map((data, index) => (
              <div key={index} className={classes.tableBody}>
                <span>
                  <Link to="#0">{data.fileName}</Link>
                </span>
                <span>{data.studentName}</span>
                <span
                  className={
                    data.status === 'Pending'
                      ? classes.statusPending
                      : classes.statusApproved
                  }
                >
                  {data.status}
                </span>
                <span
                  className={
                    data.grade === 'Not graded' ? classes.notGraded : ''
                  }
                >
                  {data.grade}
                </span>
                <span
                  onClick={() => {
                    optionsChangeHandler(index)
                  }}
                >
                  <img src={ellipses} alt="more options" />
                  {data.displayOptions && (
                    <div ref={optionsRef}>
                      <ActionsModal
                        onClick={() => {
                          optionsChangeHandler(index);
                          navigate('/student/assignment/assignment-submission');
                        }}
                        onClick2={() => {
                          optionsChangeHandler(index);
                          setDisplayApproveSubmissionModal(true);
                        }}
                        onClick3={() => {
                          optionsChangeHandler(index);
                          setDisplayRejectSubmissionModal(true);
                        }}
                        onClick4={() => {
                          optionsChangeHandler(index);
                          setDisplaySendMessageModal(true);
                        }}
                        onClick5={() => {
                          optionsChangeHandler(index);
                          setDisplayAssignmentSummaryModal(true);
                        }}
                      />
                    </div>
                  )}
                </span>
              </div>
            ))}
          </div>
          <p className={classes.submission}>
            <span>{studentsData.length}</span> submissions
          </p>
        </div>
      </div>
    </div>
  )
}

export default AssignmentPageContainer
