import { useState } from 'react'
import EmptyTabComponent from '../../Components/EmptyTabComponent/EmptyTabComponent'
import classes from './CoursesModules.module.css'
import noModules from '../../Assets/Images/noModules.svg'
import CoursesPageContainer from '../CoursesPageContainer/CoursesPageContainer'

const CoursesModules = () => {
  // States
  const [courseItem] = useState<any[]>([
    {
      title: 'Live class Sessions',
      activeComponent: <CoursesPageContainer />,
      activeNullStateComponent: (
        <EmptyTabComponent
          image={noModules}
          imageHeight={300}
          header="No assigned course "
          firstParagraph=" We're actively working on matching you with the perfect course based on your expertise."
          secondParagraph=" You'll receive an email notification once you’re assigned a course."
          route="/"
          buttontext="Create a lesson"
          showButton={false}
        />
      ),
    },
  ])

  const activeComponent = courseItem[0].activeComponent
  const activeNullStateComponent = courseItem[0].activeNullStateComponent

  return (
    <div className={classes.container}>
      <div>{activeComponent ? activeComponent : activeNullStateComponent}</div>
    </div>
  )
}

export default CoursesModules
