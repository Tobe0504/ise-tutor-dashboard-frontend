import { createContext } from 'react'
import { studentsData } from '../Utilities/students'

type StudentsContextValues = {}

type StudentsContextProviderProps = {
  children: React.ReactNode
}

export const StudentsContext = createContext({} as StudentsContextValues)

const StudentsContextProvider = ({
  children,
}: StudentsContextProviderProps) => {
  // States

  return (
    <StudentsContext.Provider value={{}}>{children}</StudentsContext.Provider>
  )
}

export default StudentsContextProvider
