import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import ProgressBar from '../../Components/ProgressBar/ProgressBar'
import { AuthUserContext } from '../../Context/AuthUserContext'
import classes from './ProfileProgressRightCta.module.css'

const ProfileProgressRightCta = () => {
  // COntext
  const { getUserRequestObject } = useContext(AuthUserContext)

  // States
  const [values, setValues] = useState({
    allValue: 0,
    trueValue: 0,
  })

  // Router
  const navigate = useNavigate()

  // Utils
  const getUserOnboardProgressCount = (object: any) => {
    let trueValue = 0
    let allValue = 0

    for (const key in object) {
      if (object?.hasOwnProperty(key)) {
        allValue += 1
      }

      if (object?.hasOwnProperty(key) && object[key]) {
        trueValue += 1
      }
    }

    return { trueValue, allValue }
  }

  // Effects
  useEffect(() => {
    if (getUserRequestObject?.data) {
      setValues({
        trueValue: getUserOnboardProgressCount(getUserRequestObject?.data)
          ?.trueValue,
        allValue: getUserOnboardProgressCount(getUserRequestObject?.data)
          ?.allValue,
      })
    }
  }, [getUserRequestObject?.data])

  return (
    <div className={classes.container}>
      <h4>Complete your profile</h4>
      <p>
        Elevate your tutoring journey. Complete your profile on your dashboard
        today.
      </p>
      <ProgressBar
        percentage={Math.floor((values.trueValue / values.allValue) * 100) || 0}
        color="#fff"
        secondaryColor="#FFD029"
        primaryColor="#FFFAEB"
      />
      <Button
        type="tertiary"
        onClick={() => {
          navigate('/profile-info/profile')
        }}
      >
        Complete profile
      </Button>
    </div>
  )
}

export default ProfileProgressRightCta
