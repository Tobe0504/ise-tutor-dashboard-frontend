import AddNewWeekModule from '../CreatingCourseModulePageContainer/AddNewWeekModule/AddNewWeekModule'
import CourseInfoLeftBar from '../CreatingCourseModulePageContainer/CourseInfo/CourseInfoLeftBar'
import classes from '../CreatingCourseModulePageContainer/CreatingCourseModulePageContainer.module.css'
import CurricullumHeader from '../CurricullumHeader/CurricullumHeader'

const CreatingCourseModuleWeekPageContainer = () => {
  return (
    <section className={classes.container}>
      <CurricullumHeader />
      <div className={classes.body}>
        <CourseInfoLeftBar />
        <AddNewWeekModule />
      </div>
    </section>
  )
}

export default CreatingCourseModuleWeekPageContainer
