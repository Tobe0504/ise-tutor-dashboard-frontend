import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import classes from './StudentMain.module.css'
import StudentMainEmtptyTab from './StudentMainEmtptyTab'
import StudentData from '../StudentData/StudentData'
import { useStudents } from '../../Hooks/useStudents'
import Loader from '../../Components/Loader/Loader'
import { studentRequestDataType, studentsType } from '../../Utilities/types'

const StudentMain = () => {
  // States
  const [pageNumber, setPageNumber] = useState(1)
  const [students, setStudents] = useState<studentRequestDataType | null>(null)

  // Requests
  const { isLoading, data, isValidating } = useStudents(String(pageNumber))

  // Utils

  // Effects
  useEffect(() => {
    if (data?.data?.data) {
      setStudents({
        ...data?.data,
        data: [...data?.data?.data]?.map((data: studentsType) => {
          return { ...data, isActive: false }
        }),
      })
    }

    // eslint-disable-next-line
  }, [data?.data?.data])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        {(students?.total as number) > 0 ? (
          <StudentData
            students={students as studentRequestDataType}
            setStudents={
              setStudents as Dispatch<SetStateAction<studentRequestDataType>>
            }
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            isValidating={isValidating}
          />
        ) : (
          <StudentMainEmtptyTab />
        )}
      </div>
    </div>
  )
}

export default StudentMain
