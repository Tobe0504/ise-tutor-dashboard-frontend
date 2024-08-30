import React from 'react'
import { backend_url } from '../Utilities/global'
import useGetHook from './useGetHook'

const useTutorCourses = () => {
  return useGetHook(`${backend_url}/api/ise/v1/tutors/my-courses`)
}

export const useCourseById = (id: string) => {
  return useGetHook(`${backend_url}/api/ise/v1/courses/${id}`, {
    revalidateOnFocus: false,
  })
}

export const useTutorCohort = () => {
  return useGetHook(`${backend_url}/api/ise/v1/tutors/my-courses`, {
    revalidateOnFocus: false,
  })
}

export default useTutorCourses
