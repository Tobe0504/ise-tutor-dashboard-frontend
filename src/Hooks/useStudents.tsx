import { backend_url } from '../Utilities/global'
import useGetHook from './useGetHook'

export const useStudents = (pageNumber: string) => {
  return useGetHook(
    `${backend_url}/api/ise/v1/tutors/enrolled-students?page=${pageNumber}`,
    { revalidateOnFocus: false }
  )
}
