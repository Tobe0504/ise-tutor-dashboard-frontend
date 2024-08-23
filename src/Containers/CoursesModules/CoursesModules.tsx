import { useEffect, useState } from 'react'
import EmptyTabComponent from '../../Components/EmptyTabComponent/EmptyTabComponent'
import classes from './CoursesModules.module.css'
import noModules from '../../Assets/Images/noModules.svg'
import CoursesPageContainer from '../CoursesPageContainer/CoursesPageContainer'
import useTutorCourses from '../../Hooks/useTutorCourses'
import Loader from '../../Components/Loader/Loader'
import useEnrolledStudents from '../../Hooks/useEnrolledStudents'
import { useSearchParams } from 'react-router-dom'
import { useCurriculum } from '../../Hooks/useCurricullum'

const CoursesModules = () => {
  // Riuter
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCourseId = searchParams.get('activeCourse')

  // Requests
  const { data, isLoading } = useTutorCourses()
  const { data: enrolledStudentsData, isLoading: enrolledStudentsIsLoading } =
    useEnrolledStudents()
  const { isLoading: curricullumIsLoading, data: curricullum } = useCurriculum(
    activeCourseId as string
  )

  const enrolledStudents = enrolledStudentsData?.data
  const curricullumData = curricullum?.data

  // States
  const [tutorCoursesState, setTutorCoursesState] = useState<any[]>([])

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

        setSearchParams((prevState) => {
          return { ...prevState, activeCourse: data?.data[0]?.course?.id }
        })
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

  if (isLoading || enrolledStudentsIsLoading || curricullumIsLoading) {
    return <Loader />
  }

  return (
    <div className={classes.container}>
      {data?.data?.length > 0 ? (
        <CoursesPageContainer
          courses={tutorCoursesState}
          enrolledStudents={enrolledStudents}
          tooggleActiveCourse={tooggleActiveCourse}
          curricullumData={curricullumData}
        />
      ) : (
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
      )}
    </div>
  )
}

export default CoursesModules
