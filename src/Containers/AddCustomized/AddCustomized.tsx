import CourseCustomize from '../CourseCustomize/CourseCustomize'
import CourseInfoLeftBar from '../CreatingCourseModulePageContainer/CourseInfo/CourseInfoLeftBar'
import classes from '../CreatingCourseModulePageContainer/CreatingCourseModulePageContainer.module.css'
import CurricullumHeader from '../CurricullumHeader/CurricullumHeader'

const AddCustomized = () => {
  return (
    <section className={classes.container}>
      <CurricullumHeader />
      <div className={classes.body}>
        <CourseInfoLeftBar />
        <CourseCustomize />
      </div>
    </section>
  )
}

export default AddCustomized
