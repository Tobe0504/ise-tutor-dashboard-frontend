import React, { useContext } from 'react'
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs'
import breadcrumbsBack from '../../Assets/Images/breadcrumbsBack.svg'
import classes from './StudentDetailBreadcrumbs.module.css'
import { AppContext } from '../../Context/AppContext'
import { useParams } from 'react-router-dom'

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
