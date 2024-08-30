import { createContext, useContext, useState } from 'react'
import { requestHandler2 } from '../HelperFunctions/requestHandler'
import { backend_url } from '../Utilities/global'
import { availabilityType, createMeetingDataType } from '../Utilities/types'
import { AppContext } from './AppContext'
import { requestType } from './AuthUserContext'

type ScheduleContextProviderProps = {
  children: React.ReactNode
}

type ScheduleContextValues = {
  createMeeting: (data: createMeetingDataType) => void
  requestState: requestType
  createAvailability: (data: availabilityType, filter: string) => void
}

export const ScheduleContext = createContext({} as ScheduleContextValues)

const ScheduleContextProvider = ({
  children,
}: ScheduleContextProviderProps) => {
  // Context
  const { setNotifications } = useContext(AppContext)

  // States
  const [requestState, setRequestState] = useState<requestType>({
    isLoading: false,
    data: null,
    error: null,
  })

  // Requests
  const createMeeting = (data: any) => {
    requestHandler2({
      url: `${backend_url}/api/ise/v1/booking-session/live-session`,
      method: 'POST',
      data,
      state: requestState,
      setState: setRequestState,
      setNotifications,
      setNotificationsFailure: true,
      setNotificationsSuccess: true,
      successMessage: 'Live session created successfully',
      requestCleanup: true,
    })
  }

  const createAvailability = (data: any, filter: string) => {
    requestHandler2({
      url: `${backend_url}/api/ise/v1/tutors/set-availability?filter=${filter}`,
      method: 'POST',
      data,
      state: requestState,
      setState: setRequestState,
      setNotifications,
      setNotificationsFailure: true,
      setNotificationsSuccess: true,
      successMessage: 'Schedule created successfully',
      requestCleanup: true,
    })
  }

  return (
    <ScheduleContext.Provider
      value={{ createMeeting, requestState, createAvailability }}
    >
      {children}
    </ScheduleContext.Provider>
  )
}

export default ScheduleContextProvider
