import CourseVideo from '../CourseVideo/CourseVideo'
import CourseInfoLeftBar from '../CreatingCourseModulePageContainer/CourseInfo/CourseInfoLeftBar'
import classes from '../CreatingCourseModulePageContainer/CreatingCourseModulePageContainer.module.css'
import CurricullumHeader from '../CurricullumHeader/CurricullumHeader'

const AddVideoContent = () => {
  return (
    <section className={classes.container}>
      <CurricullumHeader />
      <div className={classes.body}>
        <CourseInfoLeftBar />
        <CourseVideo />
      </div>
    </section>
  )
}

export default AddVideoContent
