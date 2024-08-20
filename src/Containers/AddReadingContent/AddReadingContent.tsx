import CourseReading from '../CourseReading/CourseReading'
import CourseInfoLeftBar from '../CreatingCourseModulePageContainer/CourseInfo/CourseInfoLeftBar'
import classes from '../CreatingCourseModulePageContainer/CreatingCourseModulePageContainer.module.css'
import SelectLessonTypeContainer from '../CreatingCourseModulePageContainer/SelectLessonType/SelectLessonType'
import CurricullumHeader from '../CurricullumHeader/CurricullumHeader'

const AddReadingContent = () => {
  return (
    <section className={classes.container}>
      <CurricullumHeader />
      <div className={classes.body}>
        <CourseInfoLeftBar />
        <CourseReading />
      </div>
    </section>
  )
}

export default AddReadingContent
