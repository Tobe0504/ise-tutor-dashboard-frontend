import CourseCreationLayout from '../../Components/CourseCreationLayout/CourseCreationLayout'
import CourseInfoLeftBar from '../CreatingCourseModulePageContainer/CourseInfo/CourseInfoLeftBar'
import classes from '../CreatingCourseModulePageContainer/CreatingCourseModulePageContainer.module.css'
import SelectLessonTypeContainer from '../CreatingCourseModulePageContainer/SelectLessonType/SelectLessonType'
import CurricullumHeader from '../CurricullumHeader/CurricullumHeader'

const SelectLessonType = () => {
  return (
    <CourseCreationLayout>
      <SelectLessonTypeContainer />
    </CourseCreationLayout>
  )
}

export default SelectLessonType
