import { backend_url } from '../Utilities/global'
import useGetHook from './useGetHook'

export const useStudents = (pageNumber: string) => {
  return useGetHook(
    `${backend_url}/api/ise/v1/tutors/enrolled-students?page=${pageNumber}`,
    { revalidateOnFocus: false }
  )
}

export const useStudentsById = (id: string) => {
  return useGetHook(`${backend_url}/api/ise/v1/tutors/enrolled-student/${id}`, {
    revalidateOnFocus: false,
  })
}

export const useStudentGrades = (id: string) => {
  return useGetHook(`${backend_url}api/ise/v1/tutors/student_grades/${id}`, {
    revalidateOnFocus: false,
  })
}

export const useStudentFeedback = (id: string) => {
  return useGetHook(`${backend_url}/api/ise/v1/tutors/student_survey/${id}`, {
    revalidateOnFocus: false,
  })
}
