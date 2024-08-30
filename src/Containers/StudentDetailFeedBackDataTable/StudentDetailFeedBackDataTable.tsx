import classes from './StudentDetailFeedBackDataTable.module.css'
import { useState } from 'react'
import AcceptedModal from '../../Components/Modals/AcceptedModal/AcceptedModal'
import StudentPeroidicFeedbackContainer from '../StudentPeroidicFeedbackContainer/StudentPeroidicFeedbackContainer'
import moment from 'moment'

type StudentDetailFeedBackDataTableType = {
  studentFeedback: any
}

const feedback = [
  {
    title: 'Periodic survey feedback 1',
    dateCreated: '19th Oct. 2023',
    dateCompleted: '11 Nov, 2023',
  },
  {
    title: 'Periodic survey feedback 1',
    dateCreated: '19th Oct. 2023',
    dateCompleted: '11 Nov, 2023',
  },
]

const StudentDetailFeedBackDataTable = ({
  studentFeedback,
}: StudentDetailFeedBackDataTableType) => {
  const [displayModal, setDisplayModal] = useState(false)

  if (!studentFeedback) {
    return <p className={classes.noGrades}>No feedback available</p>
  }

  return (
    <div className={classes.container}>
      {displayModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayModal(false)
          }}
          body={
            <StudentPeroidicFeedbackContainer
              onClick={() => {
                setDisplayModal(false)
              }}
              studentFeedback={studentFeedback}
            />
          }
        />
      )}
      {/* <p>1-10 of 10 results</p> */}
      <div className={classes.tableHeader}>
        <span>Title</span>
        <span>File type</span>
        <span>Date uploaded</span>
        <span>Action</span>
      </div>
      <div className={classes.tableBodyContainer}>
        <div className={classes.tableBody}>
          <span>{studentFeedback?.survey_title}</span>
          <span>
            {moment(studentFeedback?.dateCreated)?.format('DD MMMM, YYYY')}
          </span>
          <span>
            {moment(studentFeedback?.completion_date)?.format('DD MMMM, YYYY')}
          </span>
          <span onClick={() => setDisplayModal(true)}>View</span>
        </div>
      </div>
      {/* <div className={classes.pageButtons}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 19L8 12L15 5"
              stroke="#d8d8d8"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <button>1</button>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 5L16 12L9 19"
              stroke="#d8d8d8"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div> */}
    </div>
  )
}

export default StudentDetailFeedBackDataTable
