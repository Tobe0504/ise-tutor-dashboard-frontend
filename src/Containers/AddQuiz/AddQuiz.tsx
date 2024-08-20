import CourseQuiz from '../CourseQuiz/CourseQuiz'
import CourseInfoLeftBar from '../CreatingCourseModulePageContainer/CourseInfo/CourseInfoLeftBar'
import classes from '../CreatingCourseModulePageContainer/CreatingCourseModulePageContainer.module.css'
import CurricullumHeader from '../CurricullumHeader/CurricullumHeader'

const AddQuiz = () => {
  return (
    <section className={classes.container}>
      <CurricullumHeader />
      <div className={classes.body}>
        <CourseInfoLeftBar />
        <CourseQuiz />
      </div>
    </section>
  )
}

export default AddQuiz
