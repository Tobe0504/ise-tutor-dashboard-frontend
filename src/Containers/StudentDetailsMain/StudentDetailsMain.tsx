import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../Components/Loader/Loader'
import { useStudentsById } from '../../Hooks/useStudents'
import StudentDetailBreadcrumbs from '../StudentDetailBreadcrumbs/StudentDetailBreadcrumbs'
import StudentDetailsModules from '../StudentDetailsModules/StudentDetailsModules'

const StudentDetailsMain = () => {
  // Router
  const { studentId } = useParams()

  // Requests
  const { isLoading, data } = useStudentsById(studentId as string)

  const student = data?.data

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <StudentDetailBreadcrumbs student={student} />
      <StudentDetailsModules student={student} />
    </>
  )
}

export default StudentDetailsMain
