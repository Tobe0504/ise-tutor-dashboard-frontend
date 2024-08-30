import moment from 'moment'
import classes from './StudentDetailQuizDataTable.module.css'

type StudentDetailQuizDataTableType = {
  studentQuiz: any
}

const StudentDetailQuizDataTable = ({
  studentQuiz,
}: StudentDetailQuizDataTableType) => {
  // Utils
  const quiz = [
    {
      title: 'Quiz 1- Test knowldge',
      completedDate: '12 Oct, 2023',
      passingGrade: 80,
      studentGrade: 100,
      studentGradeStatus: 'pass',
      noOfRetry: 2,
    },
    {
      title: 'Quiz 1- Test knowldge',
      completedDate: '12 Oct, 2023',
      passingGrade: 80,
      studentGrade: 100,
      studentGradeStatus: 'pass',
      noOfRetry: 2,
    },
    {
      title: 'Quiz 2.0- Test knowldge',
      completedDate: '10 Nov, 2023',
      passingGrade: 80,
      studentGrade: 20,
      studentGradeStatus: 'fail',
      noOfRetry: 'Nil',
    },
    {
      title: 'Quiz 2.0- Test knowldge',
      completedDate: '10 Nov, 2023',
      passingGrade: 80,
      studentGrade: 20,
      studentGradeStatus: 'fail',
      noOfRetry: 'Nil',
    },
    {
      title: 'Quiz 2.0- Test knowldge',
      completedDate: '10 Nov, 2023',
      passingGrade: 80,
      studentGrade: 20,
      studentGradeStatus: 'fail',
      noOfRetry: 'Nil',
    },
    {
      title: 'Quiz 2.0- Test knowldge',
      completedDate: '10 Nov, 2023',
      passingGrade: 80,
      studentGrade: 20,
      studentGradeStatus: 'fail',
      noOfRetry: 'Nil',
    },
    {
      title: 'Quiz 2.0- Test knowldge',
      completedDate: '10 Nov, 2023',
      passingGrade: 80,
      studentGrade: 20,
      studentGradeStatus: 'fail',
      noOfRetry: 'Nil',
    },
    {
      title: 'Quiz 2.0- Test knowldge',
      completedDate: '10 Nov, 2023',
      passingGrade: 80,
      studentGrade: 20,
      studentGradeStatus: 'fail',
      noOfRetry: 'Nil',
    },
    {
      title: 'Quiz 2.0- Test knowldge',
      completedDate: '10 Nov, 2023',
      passingGrade: 80,
      studentGrade: 20,
      studentGradeStatus: 'fail',
      noOfRetry: 'Nil',
    },
    {
      title: 'Quiz 2.0- Test knowldge',
      completedDate: '10 Nov, 2023',
      passingGrade: 80,
      studentGrade: 20,
      studentGradeStatus: 'fail',
      noOfRetry: 'Nil',
    },
    {
      title: 'Quiz 2.0- Test knowldge',
      completedDate: '10 Nov, 2023',
      passingGrade: 80,
      studentGrade: 20,
      studentGradeStatus: 'fail',
      noOfRetry: 'Nil',
    },
  ]

  console.log(studentQuiz, 'Quiz')

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
          1-{studentQuiz?.length} of {studentQuiz?.length} results
        </p>
        <div>
          <div className={classes.tableHeader}>
            <span>Quiz title</span>
            <span>Completion date</span>
            <span>Passing grade</span>
            <span>Student grade</span>
            <span># of retry(s)</span>
          </div>

          <div className={classes.bodyContent}>
            {studentQuiz?.length > 0 ? (
              studentQuiz?.map((data: any, i: number) => {
                const statusClassName = getStatusClass(
                  data?.score > data?.passing_grade ? 'pass' : 'fail'
                )
                return (
                  <div key={i} className={classes.tableBody}>
                    <span>{data?.title}</span>
                    <span>
                      {moment(data.completion_date).format('Do MMMM, YYYY')}
                    </span>
                    <span>{data.passing_grade}%</span>
                    <span>
                      <span>{data.score}%</span>
                      <span className={statusClassName}>
                        {data?.score > data?.passing_grade ? 'Pass' : 'Fail'}
                      </span>
                    </span>
                    <span>{data?.tries}</span>
                  </div>
                )
              })
            ) : (
              <p className={classes.noGrades}>No grades availabnle</p>
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

export default StudentDetailQuizDataTable
