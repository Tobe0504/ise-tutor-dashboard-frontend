import CourseModuleAssessment from '../CourseModuleAssessment/CourseModuleAssessment'
import CourseInfoLeftBar from '../CreatingCourseModulePageContainer/CourseInfo/CourseInfoLeftBar'
import classes from '../CreatingCourseModulePageContainer/CreatingCourseModulePageContainer.module.css'
import CurricullumHeader from '../CurricullumHeader/CurricullumHeader'

const AddModuleAssessment = () => {
  return (
    <section className={classes.container}>
      <CurricullumHeader />
      <div className={classes.body}>
        <CourseInfoLeftBar />
        <CourseModuleAssessment />
      </div>
    </section>
  )
}

export default AddModuleAssessment
