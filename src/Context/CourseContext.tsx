import { createContext } from 'react'

type CourseContextValuesTypes = {}

type CourseContextProviderTypes = {
  children: React.ReactNode
}

export const CourseContext = createContext({} as CourseContextValuesTypes)

const CourseContextProvider = ({ children }: CourseContextProviderTypes) => {
  return <CourseContext.Provider value={{}}>{children}</CourseContext.Provider>
}

export default CourseContextProvider
