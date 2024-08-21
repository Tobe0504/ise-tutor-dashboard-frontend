import classes from './CourseQuiz.module.css'
import AddQuestionAndAnswerComponent from './AddQuestionAndAnswerComponent'

const CourseQuiz = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.sectionsNavSection}>
          <AddQuestionAndAnswerComponent />
        </div>
      </div>
    </div>
  )
}

export default CourseQuiz
