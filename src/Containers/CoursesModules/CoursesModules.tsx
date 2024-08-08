import { useEffect, useState } from 'react'
import EmptyTabComponent from '../../Components/EmptyTabComponent/EmptyTabComponent'
import classes from './CoursesModules.module.css'
import noModules from '../../Assets/Images/noModules.svg'
import CoursesPageContainer from '../CoursesPageContainer/CoursesPageContainer'
import useTutorCourses from '../../Hooks/useTutorCourses'
import Loader from '../../Components/Loader/Loader'
import useEnrolledStudents from '../../Hooks/useEnrolledStudents'
import { activeToggler } from '../../HelperFunctions/activeTogglers'
import { useSearchParams } from 'react-router-dom'

const CoursesModules = () => {
  // Requests
  const { data, isLoading } = useTutorCourses()
  const { data: enrolledStudentsData, isLoading: enrolledStudentsIsLoading } =
    useEnrolledStudents()

  const enrolledStudents = enrolledStudentsData?.data

  // States
  const [tutorCoursesState, setTutorCoursesState] = useState<any[]>([])

  // Riuter
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCourseId = searchParams.get('activeCourse')

  // Effects
  useEffect(() => {
    if (data) {
      if (!activeCourseId) {
        setTutorCoursesState(
          data?.data?.map((data: any, i: number) => {
            if (i === 0) {
              return { ...data, isActive: true }
            } else {
              return { ...data, isActive: false }
            }
          })
        )
      } else {
        setTutorCoursesState(
          data?.data?.map((data: any, i: number) => {
            if (String(data?.course?.id) === activeCourseId) {
              return { ...data, isActive: true }
            } else {
              return { ...data, isActive: false }
            }
          })
        )
      }
    }
  }, [data])

  const tooggleActiveCourse = (id: number) => {
    setSearchParams((prevState) => {
      return { ...prevState, activeCourse: id }
    })
  }

  if (isLoading || enrolledStudentsIsLoading) {
    return <Loader />
  }

  return (
    <div className={classes.container}>
      <CoursesPageContainer
        courses={tutorCoursesState}
        enrolledStudents={enrolledStudents}
        tooggleActiveCourse={tooggleActiveCourse}
      />
      <EmptyTabComponent
        image={noModules}
        imageHeight={300}
        header="No assigned course "
        firstParagraph=" We're actively working on matching you with the perfect course based on your expertise."
        secondParagraph=" You'll receive an email notification once you’re assigned a course."
        route="/"
        buttontext="Create a lesson"
        showButton={false}
      />
    </div>
  )
}

export default CoursesModules
