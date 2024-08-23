import { backend_url } from '../Utilities/global'
import useGetHook from './useGetHook'

export const useCurriculum = (id: string) => {
  return useGetHook(`${backend_url}/api/ise/v1/tutors/${id}/curriculum`)
}
