import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import GetStartedRightCta from '../GetStartedRightCta/GetStartedRightCta'
import CollaborationHubRightCta from '../CollaborationHubRightCta/CollaborationHubRightCta'
import HelpAndSupportRightCta from '../HelpAndSupportRightCta/HelpAndSupportRightCta'
import classes from './RightCtaContainer.module.css'
import ProfileProgressRightCta from '../ProfileProgressRightCta/ProfileProgressRightCta'
import PasswordChangeCta from '../PasswordChangeCta/PasswordChangeCta'
import { AuthUserContext } from '../../Context/AuthUserContext'

const RightCtaContainer = () => {
  // Context
  const { showGetStarted } = useContext(AppContext)
  const { getUserRequestObject } = useContext(AuthUserContext)

  return (
    <section className={classes.container}>
      <ProfileProgressRightCta />
      {getUserRequestObject?.data?.is_default_password && <PasswordChangeCta />}
      {showGetStarted.rightCta && <GetStartedRightCta />}
      <CollaborationHubRightCta />
      <HelpAndSupportRightCta />
    </section>
  )
}

export default RightCtaContainer
