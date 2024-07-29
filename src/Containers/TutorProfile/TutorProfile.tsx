import { useContext, useEffect, useState } from 'react'
import SectionsNav4 from '../../Components/SectionsNav4/SectionsNav4'
import TutorProfileProfile from '../TutorProfileProfile/TutorProfileProfile'
import ProfileAccountSettings from '../ProfileAccountSettings/ProfileAccountSettings'
import classes from './TutorProfile.module.css'
import { AuthUserContext } from '../../Context/AuthUserContext'
import Loader from '../../Components/Loader/Loader'

const TutorProfile = () => {
  // Context
  const { getUser, getUserRequestObject } = useContext(AuthUserContext)

  // States
  const [navItems, setNavItems] = useState<any[]>([
    {
      title: 'Profile',
      isActive: true,
      activeComponent: <TutorProfileProfile />,
      route: 'profile',
    },
    {
      title: 'Account setting',
      isActive: false,
      activeComponent: <ProfileAccountSettings />,
      route: 'account-setting',
    },
  ])

  //   Utils
  const activeComponent = navItems.find((data) => data.isActive)

  return (
    <section className={classes.container}>
      <div className={classes.sectionsNavSection}>
        <SectionsNav4 navItems={navItems} setNavItems={setNavItems} isRouting />
      </div>
      <div className={classes.body}>
        {getUserRequestObject?.isLoading ? (
          <Loader />
        ) : (
          activeComponent.activeComponent
        )}
      </div>
    </section>
  )
}

export default TutorProfile
