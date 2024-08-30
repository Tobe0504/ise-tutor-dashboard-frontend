import { capitalize } from '../../HelperFunctions/capitalize'
import classes from './StudentDetailGradeDataTable.module.css'

type StudentDetailGradeDataTableType = {
  studentGrade: any
}

const StudentDetailGradeDataTable = ({
  studentGrade,
}: StudentDetailGradeDataTableType) => {
  const getStatusClass = (studentGradeStatus: string) => {
    switch (studentGradeStatus) {
      case 'pass':
        return classes.pass
      case 'fail':
        return classes.fail

      default:
        return ''
    }
  }

  return (
    <section className={classes.container}>
      <div className={classes.body}>
        <p>
          1-{studentGrade?.grades?.length} of {studentGrade?.grades?.length}{' '}
          results
        </p>
        <div>
          <div className={classes.tableHeader}>
            <span>Item</span>
            <span>Type</span>
            <span>Passing grade</span>
            <span>Student grade</span>
            <span>Weight grade</span>
          </div>

          <div className={classes.bodyContent}>
            {studentGrade?.grades?.length > 0 ? (
              studentGrade?.grades?.map((data: any, i: number) => {
                const statusClassName = getStatusClass(
                  data?.student_grade > data?.passing_grade ? 'pass' : 'fail'
                )
                return (
                  <div key={i} className={classes.tableBody}>
                    <span>{data?.title}</span>
                    <span>{capitalize(data?.type)}</span>
                    <span>{data.passing_grade}%</span>
                    <span>
                      <span>
                        {data?.student_grade}
                        {data?.student_grade !== 'not graded' && '%'}
                      </span>
                      <span className={statusClassName}>
                        {data?.student_grade > data?.passing_grade
                          ? 'Pass'
                          : 'Fail'}
                      </span>
                    </span>
                    <span>{'Unavailable'}</span>
                  </div>
                )
              })
            ) : (
              <p className={classes.noGrades}>No grades available</p>
            )}
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
    </section>
  )
}

export default StudentDetailGradeDataTable
