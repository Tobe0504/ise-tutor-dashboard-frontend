import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import ProgressBar from '../../Components/ProgressBar/ProgressBar'
import classes from './ProfileProgressRightCta.module.css'

const ProfileProgressRightCta = () => {
  const navigate = useNavigate()
  return (
    <div className={classes.container}>
      <h4>Complete your profile</h4>
      <p>
        Elevate your tutoring journey. Complete your profile on your dashboard
        today.
      </p>
      <ProgressBar
        percentage={49}
        color="#fff"
        secondaryColor="#FFD029"
        primaryColor="#FFFAEB"
      />
      <Button
        type="tertiary"
        onClick={() => {
          navigate('/tutor-complete-profile')
        }}
      >
        Complete profile
      </Button>
    </div>
  )
}

export default ProfileProgressRightCta
