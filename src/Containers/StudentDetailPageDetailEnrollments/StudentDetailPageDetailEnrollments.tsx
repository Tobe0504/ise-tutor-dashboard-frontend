import classes from './StudentDetailPageDetailEnrollments.module.css'
import ProgressBar from '../../Components/ProgressBar/ProgressBar'
import { capitalize } from '../../HelperFunctions/capitalize'

type StudentDetailPageDetailEnrollmentsType = {
  student: any
}

const StudentDetailPageDetailEnrollments = ({
  student,
}: StudentDetailPageDetailEnrollmentsType) => {
  // Utils

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
        {student?.enrollments?.map((data: any, i: number) => {
          const statusClassName = getStatusClass(
            data.course_progress > 40 ? 'success' : 'fail'
          )
          const progressBarProps =
            data.course_progress < 50
              ? { primaryColor: '#fffaeb', secondaryColor: '#ffd029' }
              : {}

          return (
            <div key={Math.random()} className={classes.tableBody}>
              <div>
                <span className={classes.user}>
                  <span>{data.name}</span>
                </span>
              </div>
              <div className={classes.progressSection}>
                <div className={classes.performanceProgressBar}>
                  <ProgressBar
                    percentage={data?.course_progress}
                    color="#000"
                    {...progressBarProps}
                  />
                </div>
              </div>
              <div className={statusClassName}>{capitalize(data?.status)}</div>
            </div>
          )
        })}
        <div className={classes.divider} />
      </div>
    </section>
  )
}

export default StudentDetailPageDetailEnrollments
