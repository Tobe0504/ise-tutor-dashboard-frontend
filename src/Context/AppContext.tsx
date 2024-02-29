import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { sideNavItems } from '../Utilities/sideNavItems'
import { studentsData, studentsDatType } from '../Utilities/students'

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
  students: studentsDatType
  setStudents: Dispatch<SetStateAction<studentsDatType>>
  currentStep: number
  setCurrentStep: Dispatch<SetStateAction<number>>
  setCurrentStepAndSave: (step: number) => void
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  notifications: notificationsType
  setNotifications: Dispatch<SetStateAction<notificationsType>>
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
  const [students, setStudents] = useState<studentsDatType>(
    studentsData as studentsDatType
  )
  const [searchValue, setSearchValue] = useState<string>('')
  const [notifications, setNotifications] = useState<notificationsType>(null)

  const searchHandler = () => {
    if (searchValue?.length > 0) {
      const studentCopy = studentsData.filter((data) => {
        return (
          data?.studentName.toLowerCase().includes(searchValue.toLowerCase()) ||
          data?.emailAddress.toLowerCase().includes(searchValue.toLowerCase())
        )
      })

      setStudents(studentCopy as studentsDatType)
    }
  }

  //   Effects
  useEffect(() => {
    setScreenWidthState(screenWidth)
  }, [screenWidth])

  useEffect(() => {
    searchHandler()

    // eslint-disable-next-line
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
        currentStep,
        setCurrentStep,
        setCurrentStepAndSave,
        searchValue,
        setSearchValue,
        notifications,
        setNotifications,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
