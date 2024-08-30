import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../Components/Loader/Loader'
import {
  useStudentFeedback,
  useStudentGrades,
  useStudentsById,
} from '../../Hooks/useStudents'
import StudentDetailBreadcrumbs from '../StudentDetailBreadcrumbs/StudentDetailBreadcrumbs'
import StudentDetailsModules from '../StudentDetailsModules/StudentDetailsModules'

const StudentDetailsMain = () => {
  // Router
  const { studentId } = useParams()

  // Requests
  const { isLoading, data } = useStudentsById(studentId as string)
  const { isLoading: isLoadingStudentGrade, data: studentGradeData } =
    useStudentGrades(studentId as string)
  const { isLoading: isLoadingStudentFeedback, data: studentFeedbackData } =
    useStudentFeedback(studentId as string)

  const student = data?.data
  const studentGrade = studentGradeData?.data
  const studentFeedback = studentFeedbackData?.data

  if (
    // isLoading || isLoadingStudentGrade ||
    isLoadingStudentFeedback
  ) {
    return <Loader />
  }

  return (
    <>
      <StudentDetailBreadcrumbs student={student} />
      <StudentDetailsModules
        student={student}
        studentGrade={studentGrade}
        studentFeedback={studentFeedback}
      />
    </>
  )
}

export default StudentDetailsMain
