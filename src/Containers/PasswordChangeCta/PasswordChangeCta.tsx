import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import ProgressBar from '../../Components/ProgressBar/ProgressBar'
import classes from '../HelpAndSupportRightCta/HelpAndSupportRightCta.module.css'

const PasswordChangeCta = () => {
  const navigate = useNavigate()
  return (
    <div className={classes.container}>
      <h4>Change your default password</h4>
      <p>
        Change your default password to use your customized passwprd you can
        remember anytime
      </p>

      <Button
        type="tertiary"
        onClick={() => {
          navigate('/profile-info/account-setting')
        }}
      >
        Change password
      </Button>
    </div>
  )
}

export default PasswordChangeCta
