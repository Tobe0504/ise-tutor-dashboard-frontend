import {
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
}

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

   const [students, setStudents] = useState<studentsDatType>(studentsData)

   //   Effects
   useEffect(() => {
      setScreenWidthState(screenWidth)
   }, [screenWidth])

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
         }}
      >
         {children}
      </AppContext.Provider>
   )
}

export default AppContextProvider
