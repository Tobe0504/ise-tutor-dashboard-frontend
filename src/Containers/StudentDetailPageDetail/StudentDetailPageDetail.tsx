import StudentDetailPageDetailStudentProfileAndBadges from '../StudentDetailPageDetailStudentProfileAndBadges/StudentDetailPageDetailStudentProfileAndBadges'
import StudentDetailPageDetailEnrollments from '../StudentDetailPageDetailEnrollments/StudentDetailPageDetailEnrollments'

type StudentDetailPageDetailType = {
  student: any
}

const StudentDetailPageDetail = ({ student }: StudentDetailPageDetailType) => {
  return (
    <>
      <StudentDetailPageDetailStudentProfileAndBadges student={student} />
      {student?.enrollments?.length > 0 && (
        <StudentDetailPageDetailEnrollments student={student} />
      )}
    </>
  )
}

export default StudentDetailPageDetail
