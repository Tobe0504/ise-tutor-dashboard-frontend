import classes from './StudentData.module.css'
import Checkbox from '../../Components/Checkbox/Checkbox'
import email from '../../Assets/Images/emailIcon.svg'
import { SetStateAction, useContext, useState, Dispatch } from 'react'
import AcceptedModal from '../../Components/Modals/AcceptedModal/AcceptedModal'
import ConfirmationModal from './ConfirmationModal'
import SendMessageModal from './SendMessageModal'
import { AppContext } from '../../Context/AppContext'
import HelloUser from '../../Components/HelloUser/HelloUser'
import StudentDataTable from '../StudentDataTable/StudentDataTable'
import { studentRequestDataType, studentsType } from '../../Utilities/types'

type StudentDataType = {
  students: studentRequestDataType
  setStudents?: Dispatch<SetStateAction<studentRequestDataType>>
  pageNumber: number
  setPageNumber: Dispatch<SetStateAction<number>>
  isValidating: boolean
}

const StudentData = ({
  students,
  setStudents,
  pageNumber,
  setPageNumber,
  isValidating,
}: StudentDataType) => {
  // Context
  const { searchValue, setSearchValue } = useContext(AppContext)

  // State
  const [displaySendMessageModal, setDisplaySendMessageModal] = useState(false)
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false)

  return (
    <section className={classes.container}>
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
                setDisplaySendMessageModal(false)
                setDisplayConfirmationModal(true)
              }}
              activeStudents={students?.data?.filter((data) => data?.isActive)}
            />
          }
        />
      )}
      {displayConfirmationModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayConfirmationModal(false)
          }}
          body={
            <ConfirmationModal
              onClick={() => {
                setDisplayConfirmationModal(false)
              }}
            />
          }
        />
      )}
      <HelloUser
        header="Students"
        paragraph="Review student details, enrollments, grades, and likes here."
        notIncludePay
        notIncludeBg
      />
      <div className={classes.studentSeachInput}>
        <div className={classes.inputSection}>
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchValue as string}
            onChange={(e) => {
              setSearchValue(e.target.value)
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
      </div>
      <div className={classes.header}>
        <div>
          <Checkbox
            isChecked={
              students?.data?.length > 0 &&
              students?.data?.every((student) => student.isActive)
            }
            onChange={(isChecked) => {
              if (setStudents) {
                setStudents((prevState) => {
                  const updatedState = { ...prevState }
                  if (updatedState?.data?.every((data) => data?.isActive)) {
                    const newStudents = updatedState?.data?.map((data) => {
                      return { ...data, isActive: false }
                    })

                    return { ...updatedState, data: newStudents }
                  } else {
                    const newStudents = updatedState?.data?.map((data) => {
                      return { ...data, isActive: true }
                    })

                    return { ...updatedState, data: newStudents }
                  }
                })
              }
            }}
          />
          <span>Select</span>
        </div>

        <div
          onClick={() => {
            setDisplaySendMessageModal(true)
          }}
        >
          <img src={email} alt="Send email to student" />
          <span>Email</span>
        </div>
        <div>
          <p>
            1-{students?.data?.length} of {students?.total} students
          </p>
        </div>
      </div>

      <StudentDataTable
        students={students as studentRequestDataType}
        setStudents={
          setStudents as Dispatch<SetStateAction<studentRequestDataType>>
        }
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        isValidating={isValidating}
      />
    </section>
  )
}

export default StudentData
