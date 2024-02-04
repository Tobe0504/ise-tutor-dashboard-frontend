import React, { useContext } from 'react'
import classes from './StudentDataTable.module.css'
import Checkbox from '../../Components/Checkbox/Checkbox'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'
import { activeTogglerRestAll } from '../../HelperFunctions/activeTogglers'

const StudentDataTable = () => {
   const navigate = useNavigate()
   const { students, setStudents } = useContext(AppContext)

   return (
      <section className={classes.container}>
         <div className={classes.body}>
            <div>
               <div className={classes.tableHeader}>
                  <span>Student name</span>
                  <span>Email address</span>
                  <span>Enrollment date</span>
               </div>

               {students.map((data, i) => {
                  return (
                     <div key={Math.random()} className={classes.tableBody}>
                        <div>
                           <Checkbox
                              isChecked={data.isActive}
                              onChange={() => {
                                 activeTogglerRestAll(i, students, setStudents)
                              }}
                           />
                           <span>{data.studentName}</span>
                        </div>
                        <span>{data.emailAddress}</span>
                        <span>{data.enrolledDate}</span>
                        <span
                           onClick={() => {
                              navigate(
                                 `/student/details/${data.studentName
                                    .replaceAll(' ', '-')
                                    .toLowerCase()}`
                              )
                           }}
                        >
                           View
                        </span>
                     </div>
                  )
               })}
            </div>
         </div>
      </section>
   )
}

export default StudentDataTable
