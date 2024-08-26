import React from 'react'
import { useParams } from 'react-router-dom'
import CourseInfoLeftBar from '../../Containers/CreatingCourseModulePageContainer/CourseInfo/CourseInfoLeftBar'
import CurricullumHeader from '../../Containers/CurricullumHeader/CurricullumHeader'
import { useCurriculum } from '../../Hooks/useCurricullum'
import { useCourseById } from '../../Hooks/useTutorCourses'
import Layout from '../Layout/Layout'
import Loader from '../Loader/Loader'
import classes from './CourseCreationLayout.module.css'

type CourseCreationLayoutType = {
  children: React.ReactNode
}

const CourseCreationLayout = ({ children }: CourseCreationLayoutType) => {
  // Router
  const { courseId } = useParams()
  // Requests
  const { isLoading, data } = useCurriculum(courseId as string)
  const { isLoading: courseIsLoading, data: courseData } = useCourseById(
    courseId as string
  )

  const curriculum = data?.data
  const course = courseData?.data

  return (
    <Layout closeSideNav>
      {isLoading || courseIsLoading ? (
        <Loader />
      ) : (
        <div className={classes.container}>
          <CurricullumHeader />
          <div className={classes.body}>
            <CourseInfoLeftBar curriculum={curriculum} courseData={course} />
            {children}
          </div>
        </div>
      )}
    </Layout>
  )
}

export default CourseCreationLayout
