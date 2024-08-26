import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { requestHandler2 } from '../HelperFunctions/requestHandler'
import { sideNavItems } from '../Utilities/sideNavItems'
import { studentsData, studentsDataType } from '../Utilities/students'
import { requestType } from './AuthUserContext'
import { coursesDataType, coursesData } from '../Utilities/courses'

type AppContextProviderProps = {
  children: React.ReactNode
}

type AppContextProps = {
  screenWidthState: number
  showGetStarted: {
    rightCta: boolean
    dashboard: boolean
    showModdal: boolean
  }
  setShowGetStarted: Dispatch<
    SetStateAction<{
      rightCta: boolean
      dashboard: boolean
      showModdal: boolean
    }>
  >
  displayRatemodal: boolean
  setDisplayRateModal: Dispatch<SetStateAction<boolean>>
  displaySharemodal: boolean
  setDisplayShareModal: Dispatch<SetStateAction<boolean>>
  navItmesState: any[]
  setNavItemsState: Dispatch<SetStateAction<any>>
  students: studentsDataType
  setStudents: Dispatch<SetStateAction<studentsDataType>>
  courses: coursesDataType
  setCourses: Dispatch<SetStateAction<coursesDataType>>
  currentStep: number
  setCurrentStep: Dispatch<SetStateAction<number>>
  setCurrentStepAndSave: (step: number) => void
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  notifications: notificationsType
  setNotifications: Dispatch<SetStateAction<notificationsType>>
  contactSupportHandler: () => void
  contactSupportHandlerObject: requestType
  contactSupport: {
    subject: string
    description: string
    image: string
  }
  setContactSupport: Dispatch<
    SetStateAction<{
      subject: string
      description: string
      image: string
    }>
  >
}

export type notificationsType =
  | {
      title: string
      severity: 'success' | 'error' | 'mid'
      description?: string
      id: string | number
    }[]
  | null
  | undefined

export const AppContext = createContext({} as AppContextProps)

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  // Utils
  const screenWidth = window.innerWidth

  // States
  const [screenWidthState, setScreenWidthState] = useState<number>(screenWidth)
  const [showGetStarted, setShowGetStarted] = useState<{
    rightCta: boolean
    dashboard: boolean
    showModdal: boolean
  }>({
    rightCta: true,
    dashboard: true,
    showModdal: false,
  })
  const [displayRatemodal, setDisplayRateModal] = useState(false)
  const [displaySharemodal, setDisplayShareModal] = useState(false)
  const [navItmesState, setNavItemsState] = useState(
    sideNavItems.map((data) => {
      return { ...data, isActive: false }
    })
  )

  const [currentStep, setCurrentStep] = useState<number>(1)
  const [students, setStudents] = useState<studentsDataType>(
    studentsData as studentsDataType
  )
  const [searchValue, setSearchValue] = useState<string>('')
  const [notifications, setNotifications] = useState<notificationsType>(null)

  const searchHandler = () => {
    if (searchValue?.length > 0) {
      const filteredStudents = studentsData.filter((data) => {
        return (
          data?.studentName.toLowerCase().includes(searchValue.toLowerCase()) ||
          data?.emailAddress.toLowerCase().includes(searchValue.toLowerCase())
        )
      })

      if (filteredStudents.length > 0) {
        setStudents(filteredStudents as studentsDataType)
      } else {
        setStudents([])
      }
    } else {
      setStudents(studentsData as studentsDataType)
    }
  }

  const [courses, setCourses] = useState<coursesDataType>(coursesData)

  const [contactSupport, setContactSupport] = useState({
    subject: '',
    description: '',
    image: '',
  })
  const contactSupportFormData = new FormData()

  useEffect(() => {
    contactSupportFormData.append('subject', contactSupport?.subject)
    contactSupportFormData.append('description', contactSupport?.description)
    contactSupportFormData.append('image', contactSupport?.image)

    // eslint-disable-next-line
  }, [contactSupport])

  const [contactSupportHandlerObject, setContactSupportHandlerObject] =
    useState<requestType>({
      isLoading: false,
      data: null,
      error: null,
    })

  const contactSupportHandler = () => {
    requestHandler2({
      url: `${process.env.REACT_APP_ISE_BACKEND_URL}/api/ise/v1/issue/tutors`,
      method: 'POST',
      setState: setContactSupportHandlerObject,
      data: contactSupportFormData,
      isMultipart: true,
      setNotifications: setNotifications,
      setNotificationsFailure: true,
      requestCleanup: true,
    })
  }

  //   Effects
  useEffect(() => {
    setScreenWidthState(screenWidth)
  }, [screenWidth])

  useEffect(() => {
    searchHandler()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])

  const setCurrentStepAndSave = (step: number) => {
    setCurrentStep(step)
  }

  return (
    <AppContext.Provider
      value={{
        screenWidthState,
        showGetStarted,
        setShowGetStarted,
        displayRatemodal,
        setDisplayRateModal,
        displaySharemodal,
        setDisplayShareModal,
        navItmesState,
        setNavItemsState,
        students,
        setStudents,
        courses,
        setCourses,
        currentStep,
        setCurrentStep,
        setCurrentStepAndSave,
        searchValue,
        setSearchValue,
        notifications,
        setNotifications,
        contactSupportHandler,
        contactSupport,
        setContactSupport,
        contactSupportHandlerObject,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
