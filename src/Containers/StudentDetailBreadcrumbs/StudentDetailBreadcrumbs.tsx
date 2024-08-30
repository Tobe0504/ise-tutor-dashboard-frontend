import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs'
import breadcrumbsBack from '../../Assets/Images/breadcrumbsBack.svg'
import classes from './StudentDetailBreadcrumbs.module.css'

type StudentDetailBreadcrumbsTypes = {
  student: any
}

const StudentDetailBreadcrumbs = ({
  student,
}: StudentDetailBreadcrumbsTypes) => {
  // Context

  const breadCrumbs = {
    image: breadcrumbsBack,
    array: [
      {
        title: 'Back to students',
        route: '/student',
      },
      {
        title: `${student?.full_name}`,
        route: `/student/${student?.id}`,
      },
    ],
  }

  return (
    <div className={classes.container}>
      <Breadcrumbs {...breadCrumbs} />
    </div>
  )
}

export default StudentDetailBreadcrumbs
