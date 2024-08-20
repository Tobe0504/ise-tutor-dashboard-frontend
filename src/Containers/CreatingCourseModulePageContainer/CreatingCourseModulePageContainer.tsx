import classes from './CreatingCourseModulePageContainer.module.css'
// import CourseReading from '../CourseReading/CourseReading'
import CourseInfoLeftBar from './CourseInfo/CourseInfoLeftBar'
import AddModuleDetails from './AddModulesDetails/AddModuleDetails'
// import AddEngagingModule from './AddEngagingModule/AddEngagingModule'
// import AddNewWeekModule from './AddNewWeekModule/AddNewWeekModule'
// import AddWeekModule from './AddWeekModule/AddWeekModule'
// import SelectLessonType from './SelectLessonType/SelectLessonType'
// import CoursePresentation from '../CoursePresentation/CoursePresentation'
// import CourseVideo from '../CourseVideo/CourseVideo'
// import CourseModuleAssessment from '../CourseModuleAssessment/CourseModuleAssessment'
// import CourseQuiz from '../CourseQuiz/CourseQuiz'
// import CourseCustomize from '../CourseCustomize/CourseCustomize'
import CurricullumHeader from '../CurricullumHeader/CurricullumHeader'

const CreatingCourseModulePageContainer = () => {
  return (
    <div className={classes.container}>
      <CurricullumHeader />
      <div className={classes.body}>
        <CourseInfoLeftBar />
        <AddModuleDetails />
        {/* {currentStep === 1 && <AddModuleDetails />} */}
        {/* {currentStep === 2 && <AddNewWeekModule />}
        {currentStep === 3 && <AddEngagingModule />}
        {currentStep === 4 && <AddWeekModule />}
        {currentStep === 5 && <SelectLessonType />}
        {currentStep === 6 && <CourseVideo />}
        {currentStep === 7 && <CourseCustomize />}
        {currentStep === 8 && <CourseReading />}
        {currentStep === 9 && <CoursePresentation />}
        {currentStep === 10 && <CourseQuiz />}
        {currentStep === 11 && <CourseModuleAssessment />}
        {currentStep === 12 && <h1>Final Exam</h1>} */}
      </div>
    </div>
  )
}

export default CreatingCourseModulePageContainer
