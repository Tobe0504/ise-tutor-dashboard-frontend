import { useState } from 'react'
import SectionsNav4 from '../../Components/SectionsNav4/SectionsNav4'
import classes from './StudentDetailsModules.module.css'
import StudentDetailPageDetail from '../StudentDetailPageDetail/StudentDetailPageDetail'
import StudentDetailQuizDataTable from '../StudentDetailQuizDataTable/StudentDetailQuizDataTable'
import StudentDetailGradeDataTable from '../StudentDetailGradeDataTable/StudentDetailGradeDataTable'
import StudentDetailFeedBackDataTable from '../StudentDetailFeedBackDataTable/StudentDetailFeedBackDataTable'

type StudentDetailsModulesTypes = {
  student: any
  studentGrade: any
  studentFeedback: any
  studentQuiz: any
}

const StudentDetailsModules = ({
  student,
  studentGrade,
  studentFeedback,
  studentQuiz,
}: StudentDetailsModulesTypes) => {
  // States
  const [navItems, setNavItems] = useState<any[]>([
    {
      title: 'Details',
      isActive: true,
    },
    {
      title: 'Quizzes',
      isActive: false,
    },
    {
      title: 'Grade',
      isActive: false,
    },
    {
      title: 'Feedback',
      isActive: false,
    },
  ])

  //   Utils
  const activeComponent = navItems.find((data) => data.isActive)
  return (
    <section className={classes.container}>
      <div className={classes.sectionsNavSection}>
        <SectionsNav4 navItems={navItems} setNavItems={setNavItems} />
      </div>
      <div className={classes.body}>{activeComponent.activeComponent}</div>
      {navItems[0].isActive && <StudentDetailPageDetail student={student} />}
      {navItems[1].isActive && (
        <StudentDetailQuizDataTable studentQuiz={studentQuiz} />
      )}
      {navItems[2].isActive && (
        <StudentDetailGradeDataTable studentGrade={studentGrade} />
      )}
      {navItems[3].isActive && (
        <StudentDetailFeedBackDataTable studentFeedback={studentFeedback} />
      )}
    </section>
  )
}

export default StudentDetailsModules
