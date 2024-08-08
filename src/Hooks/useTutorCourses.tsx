import React from 'react'
import { backend_url } from '../Utilities/global'
import useGetHook from './useGetHook'

const useTutorCourses = () => {
  return useGetHook(`${backend_url}/api/ise/v1/tutors/my-courses`)
}

export default useTutorCourses
