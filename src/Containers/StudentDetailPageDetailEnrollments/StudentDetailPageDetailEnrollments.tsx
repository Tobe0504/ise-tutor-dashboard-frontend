import { useState } from 'react'
import classes from './StudentDetailPageDetailEnrollments.module.css'
import ProgressBar from '../../Components/ProgressBar/ProgressBar'

const StudentDetailPageDetailEnrollments = () => {
  // Utils
  const [enrollments] = useState([
    {
      name: 'Customer Success Management',
      percent: 75,
      status: 'Enrolled',
      statusColor: 'success',
    },
    {
      name: 'Talent Acquisition',
      percent: 15,
      status: 'Withdrawn',
      statusColor: 'fail',
    },
  ])

  const getStatusClass = (statusColor: string) => {
    switch (statusColor) {
      case 'success':
        return classes.success
      case 'fail':
        return classes.fail

      default:
        return ''
    }
  }

  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <div>
          <h4>Enrollments</h4>
          <p>
            See your students' progress and enrollment status for the courses
            you are teaching.
          </p>
        </div>
      </div>

      <div className={classes.body}>
        <div className={classes.tableHeader}>
          <span>Course name</span>
          <span>Progress</span>
          <span>Status</span>
        </div>
        {enrollments.map((data, i) => {
          const statusClassName = getStatusClass(data.statusColor)
          return (
            <div key={Math.random()} className={classes.tableBody}>
              <div>
                <span className={classes.user}>
                  <span>{data.name}</span>
                </span>
              </div>
              <div className={classes.progressSection}>
                <div className={classes.performanceProgressBar}>
                  <ProgressBar percentage={data.percent} color="#000" />
                </div>
              </div>
              <div className={statusClassName}>{data.status}</div>
            </div>
          )
        })}
        <div className={classes.divider} />
      </div>
    </section>
  )
}

export default StudentDetailPageDetailEnrollments
