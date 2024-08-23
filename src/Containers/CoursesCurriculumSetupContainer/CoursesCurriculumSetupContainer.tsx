import classes from './CoursesCurriculumSetupContainer.module.css'
import CreateYourCurriculumContainer from '../CreateYourCurriculumContainer/CreateYourCurriculumContainer'
import CourseDetailsContainer from '../CourseDetailsContainer/CourseDetailsContainer'
import CourseCurriculumFeedbackInformationBanner from '../CourseCurriculumFeedbackInformationBanner/CourseCurriculumFeedbackInformationBanner'
import { useCourseById } from '../../Hooks/useTutorCourses'
import { useParams } from 'react-router-dom'
import Loader from '../../Components/Loader/Loader'
import ErrorContainer from '../../Components/ErrorContainer/ErrorContainer'
import { mutate } from 'swr'
import { backend_url } from '../../Utilities/global'
import { useCurriculum } from '../../Hooks/useCurricullum'

const CoursesCurriculumSetupContainer = () => {
  // Router
  const { courseId } = useParams()

  // Requests
  const { data, isLoading, error } = useCourseById(courseId as string)
  const { data: curricullum, isLoading: curricullumIsLoading } = useCurriculum(
    courseId as string
  )

  const courseData = data?.data
  const curricullumData = curricullum?.data

  if (isLoading || curricullumIsLoading) {
    return <Loader />
  }

  if (!error) {
    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <h2>Course setup</h2>
        </div>

        {/* <CourseCurriculumFeedbackInformationBanner /> */}

        <div className={classes.subContainer}>
          <CreateYourCurriculumContainer curricullum={curricullumData} />
          <CourseDetailsContainer courseData={courseData} />
        </div>
      </div>
    )
  } else {
    return (
      <ErrorContainer
        fallback={() => {
          mutate(`${backend_url}/api/ise/v1/courses/${courseId}`)
        }}
      />
    )
  }
}

export default CoursesCurriculumSetupContainer
