import { backend_url } from '../Utilities/global'
import useGetHook from './useGetHook'

export const useSchedule = (year: string, month: string) => {
  return useGetHook(
    `${backend_url}/api/ise/v1/booking-session?year=${year}&month=${month}`,
    { revalidateOnFocus: false }
  )
}

export const useTutorAvailability = () => {
  return useGetHook(`${backend_url}/api/ise/v1/tutors/get-availability`, {
    revalidateOnFocus: false,
  })
}
