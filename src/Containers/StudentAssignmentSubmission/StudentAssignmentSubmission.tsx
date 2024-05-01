import { useNavigate } from 'react-router-dom'
import ellipses from '../../Assets/Images/ellipses.svg'
import classes from './StudentAssignmentSubmission.module.css'
import { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../../Context/AppContext'
import ActionsModal from '../AssignmentPageContainer/ActionsModal/ActionsModal'
import AcceptedModal from '../../Components/Modals/AcceptedModal/AcceptedModal'
import Toast from '../../Components/Toast/Toast'
import ApproveSubmissionModal from '../AssignmentPageContainer/ApproveSubmissionModal/ApproveSubmissionModal'
import AssignmentSummaryModal from '../AssignmentPageContainer/AssignmentSummaryModal/AssignmentSummaryModal'
import GradeSubmissionModal from '../AssignmentPageContainer/GradeSubmissionModal/GradeSubmissionModal'
import MessageSentModal from '../AssignmentPageContainer/MessageSentModal'
import RejectSubmissionModal from '../AssignmentPageContainer/RejectSubmissionModal/RejectSubmissionModal'
import SendMessageModal from '../StudentData/SendMessageModal'

const StudentAssignmentSubmission = () => {
  // Context
  const { students } = useContext(AppContext)

  // States
  const [displayActionModals, setDisplayActionModals] = useState<boolean[]>([])
  const [selectedStudent, setSelectedStudent] = useState<any>(null)

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
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setDisplayActionModals(Array(students.length).fill(false))
  }, [students])

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setDisplayActionModals(Array(students.length).fill(false))
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleActionModal = (index: number) => {
    setDisplayActionModals((prevState) =>
      prevState.map((value, idx) => (idx === index ? !value : false))
    )
  }

  return (
    <>
      {displayApproveSubmissionModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayApproveSubmissionModal(false)
          }}
          body={
            <ApproveSubmissionModal
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
          toastMessage="Grade successfully recorded!"
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
      <section className={classes.container} ref={containerRef}>
        <div className={classes.header}>
          <div>
            <h4>Student Assignment Submission</h4>
            <p>
              Access assignments submitted by your students, helping you stay
              organized and provide timely feedback.
            </p>
          </div>
          <div>
            <span
              onClick={() => {
                navigate('/student/assignment')
              }}
            >
              View all
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M12.75 6.5L15.75 9.5M15.75 9.5L12.75 12.5M15.75 9.5L2.25 9.5"
                stroke="#664EFE"
                strokeWidth="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className={classes.body}>
          <div>
            <div className={classes.tableHeader}>
              <span>Name</span>
              <span>Submitted File</span>
              <span>Date</span>
              <span>Action</span>
            </div>

            <div className={classes.bodyContent}>
              {students.slice(0, 10).map((data, index) => {
                return (
                  <div key={index} className={classes.tableBody}>
                    <span>{data.studentName}</span>
                    <span>{data.fileName}</span>
                    <span>{data.dateSubmitted}</span>
                    <span>
                      <img
                        onClick={() => {
                          setSelectedStudent(data)
                          toggleActionModal(index)
                        }}
                        src={ellipses}
                        alt="more options"
                      />
                      {displayActionModals[index] && selectedStudent && (
                        <div className={classes.popover}>
                          <ActionsModal
                            onClick={() => {
                              navigate(
                                '/student/assignment/assignment-submission'
                              )
                            }}
                            onClick2={() => {
                              toggleActionModal(index)
                              setDisplayApproveSubmissionModal(true)
                            }}
                            onClick3={() => {
                              toggleActionModal(index)
                              setDisplayRejectSubmissionModal(true)
                            }}
                            onClick4={() => {
                              toggleActionModal(index)
                              setDisplaySendMessageModal(true)
                            }}
                            onClick5={() => {
                              toggleActionModal(index)
                              setDisplayAssignmentSummaryModal(true)
                            }}
                          />
                        </div>
                      )}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StudentAssignmentSubmission
