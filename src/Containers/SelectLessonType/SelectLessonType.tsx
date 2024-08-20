import CourseInfoLeftBar from '../CreatingCourseModulePageContainer/CourseInfo/CourseInfoLeftBar'
import classes from '../CreatingCourseModulePageContainer/CreatingCourseModulePageContainer.module.css'
import SelectLessonTypeContainer from '../CreatingCourseModulePageContainer/SelectLessonType/SelectLessonType'
import CurricullumHeader from '../CurricullumHeader/CurricullumHeader'

const SelectLessonType = () => {
  return (
    <section className={classes.container}>
      <CurricullumHeader />
      <div className={classes.body}>
        <CourseInfoLeftBar />
        <SelectLessonTypeContainer />
      </div>
    </section>
  )
}

export default SelectLessonType
