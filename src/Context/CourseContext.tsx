import { stringify } from 'ajv'
import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { capitalize } from '../HelperFunctions/capitalize'
import { requestHandler2 } from '../HelperFunctions/requestHandler'
import { backend_url } from '../Utilities/global'
import { uploadQuizData, uploadVideoData } from '../Utilities/types'
import { AppContext } from './AppContext'
import { requestType } from './AuthUserContext'

type CourseContextValuesTypes = {
  createCurricullim: (id: string, data: { title: string }) => void
  requestState: requestType
  createModule: (
    courseId: string,
    id: string,
    data: { title: string; objective: string[]; description: string }
  ) => void
  createWeek: (
    courseId: string,
    curriculumId: string,
    moduleId: string,
    data: { title: string }
  ) => void
  createLesson: (
    weekId: string,
    data: uploadVideoData | FormData | uploadQuizData,
    type: string
  ) => void
}

type CourseContextProviderTypes = {
  children: React.ReactNode
}

export const CourseContext = createContext({} as CourseContextValuesTypes)

const CourseContextProvider = ({ children }: CourseContextProviderTypes) => {
  // COntext
  const { setNotifications } = useContext(AppContext)

  // States
  const [requestState, setRequestState] = useState<requestType>({
    isLoading: false,
    data: null,
    error: null,
  })

  // Router
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  // Requests
  const createCurricullim = (id: string, data: { title: string }) => {
    requestHandler2({
      url: `${backend_url}/api/ise/v1/curriculum/${id}`,
      method: 'POST',
      data,
      state: requestState,
      setState: setRequestState,
      setNotifications,
      setNotificationsFailure: true,
      setNotificationsSuccess: true,
      successMessage: 'Curricullim created successfully',
      successFunction(res) {
        navigate(`/courses/${id}/${res?.data?.id}/create-module`)
      },
      requestCleanup: true,
    })
  }

  const createModule = (
    courseId: string,
    id: string,
    data: { title: string; objective: string[]; description: string }
  ) => {
    requestHandler2({
      url: `${backend_url}/api/ise/v1/course-modules/${id}`,
      method: 'POST',
      data,
      state: requestState,
      setState: setRequestState,
      setNotifications,
      setNotificationsFailure: true,
      setNotificationsSuccess: true,
      successMessage: 'Module created successfully',
      successFunction(res) {
        navigate(`/courses/${courseId}/${id}/${res?.data?.id}/create-week`)
      },
    })
  }

  const createWeek = (
    courseId: string,
    curriculumId: string,
    moduleId: string,
    data: { title: string }
  ) => {
    requestHandler2({
      url: `${backend_url}/api/ise/v1/course-weeks/${moduleId}`,
      method: 'POST',
      data,
      state: requestState,
      setState: setRequestState,
      setNotifications,
      setNotificationsFailure: true,
      setNotificationsSuccess: true,
      successMessage: 'Course week created successfully',
      successFunction(res) {
        navigate(
          `/courses/${courseId}/${curriculumId}/${moduleId}/${res?.data?.id}/add-engaging-content`
        )
      },
      requestCleanup: true,
    })
  }

  const createLesson = (
    weekId: string,
    data: uploadVideoData | FormData | uploadQuizData,
    type: string
  ) => {
    requestHandler2({
      url: `${backend_url}/api/ise/v1/${type}/${weekId}`,
      method: 'POST',
      data,
      state: requestState,
      setState: setRequestState,
      setNotifications,
      setNotificationsFailure: true,
      setNotificationsSuccess: true,
      successMessage: `${capitalize(type)} added successfully`,
      isMultipart: type === 'quiz' ? false : true,
      requestCleanup: true,
    })
  }

  return (
    <CourseContext.Provider
      value={{
        createCurricullim,
        requestState,
        createModule,
        createWeek,
        createLesson,
      }}
    >
      {children}
    </CourseContext.Provider>
  )
}

export default CourseContextProvider
