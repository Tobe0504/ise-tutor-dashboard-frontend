import CourseInfoLeftBar from '../CreatingCourseModulePageContainer/CourseInfo/CourseInfoLeftBar'
import classes from '../CreatingCourseModulePageContainer/CreatingCourseModulePageContainer.module.css'
import CurricullumHeader from '../CurricullumHeader/CurricullumHeader'
import AddEngagingModule from '../CreatingCourseModulePageContainer/AddEngagingModule/AddEngagingModule'

const AddEngagingLessonContent = () => {
  return (
    <section className={classes.container}>
      <CurricullumHeader />
      <div className={classes.body}>
        <CourseInfoLeftBar />
        <AddEngagingModule />
      </div>
    </section>
  )
}

export default AddEngagingLessonContent
