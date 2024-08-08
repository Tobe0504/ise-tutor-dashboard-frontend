import { backend_url } from '../Utilities/global'
import useGetHook from './useGetHook'

const useEnrolledStudents = () => {
  return useGetHook(`${backend_url}/api/ise/v1/tutors/enrolled-students`)
}

export default useEnrolledStudents
