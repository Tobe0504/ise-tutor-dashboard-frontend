import { useContext, useState } from 'react'
import HelloUser from '../../Components/HelloUser/HelloUser'
import classes from './AssignmentPageContainer.module.css'
import DropdownWithSearch from '../../Components/DropdownWithSearch/DropdownWithSearch'
import ellipses from '../../Assets/Images/ellipses.svg'
import { AppContext } from '../../Context/AppContext'
import PopoverModal from '../../Components/Modals/PopoverModal/PopoverModal'
import ActionsModal from './ActionsModal/ActionsModal'
import ConfirmationModal from './ConfirmationModal'
import AcceptedModal from '../../Components/Modals/AcceptedModal/AcceptedModal'

const AssignmentPageContainer = () => {
   const { students } = useContext(AppContext)

   // State
   const [displayActionsModal, setDisplayActionsModal] = useState(false)
   const [displayRejectSubmissionModal, setDisplayRejectSubmissionModal] =
      useState(false)
   const [displayConfirmationModal, setDisplayConfirmationModal] =
      useState(false)

   return (
      <div className={classes.container}>
         {displayActionsModal && (
            <PopoverModal
               onClick={() => {
                  setDisplayActionsModal(false)
               }}
               body={
                  <ActionsModal
                     onClick={() => {
                        setDisplayActionsModal(false)
                     }}
                     onClick2={() => {
                        setDisplayActionsModal(false)
                        setDisplayConfirmationModal(true)
                     }}
                     onClick3={() => {
                        setDisplayActionsModal(false)
                        setDisplayRejectSubmissionModal(true)
                     }}
                  />
               }
            />
         )}
         {/* {displayRejectSubmissionModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayRejectSubmissionModal(false)
          }}
          body={
            <ConfirmationModal
              onClick={() => {
                setDisplayRejectSubmissionModal(false)
              }}
            />
          }
        />
      )} */}
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
               isRequired
               label=""
               title="Frontend development course"
               options={[]}
            />
         </div>

         <div className={classes.body}>
            <div>
               <div className={classes.tableHeader}>
                  <span>File name</span>
                  <span>Student Name</span>
                  <span>Status</span>
                  <span>Grade</span>
                  <span>Action</span>
               </div>

               <div className={classes.bodyContent}>
                  {students.slice(0, 3).map((data, index) => (
                     <div key={index} className={classes.tableBody}>
                        <span>{data.fileName}</span>
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
                              data.grade === 'Not graded'
                                 ? classes.notGraded
                                 : ''
                           }
                        >
                           {data.grade}
                        </span>
                        <span
                           onClick={() => {
                              setDisplayActionsModal(true)
                           }}
                        >
                           <img src={ellipses} alt="more options" />
                        </span>
                     </div>
                  ))}
               </div>
               <p className={classes.submission}>
                  <span>{students.slice(0, 3).length}</span> submissions
               </p>
            </div>
         </div>
      </div>
   )
}

export default AssignmentPageContainer
