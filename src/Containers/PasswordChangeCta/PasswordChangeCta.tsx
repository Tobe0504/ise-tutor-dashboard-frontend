import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import classes from '../HelpAndSupportRightCta/HelpAndSupportRightCta.module.css'

const PasswordChangeCta = () => {
  const navigate = useNavigate()
  return (
    <div className={classes.container2}>
      <h4>Change default password</h4>
      <p>Keep your account safe, create a new password.</p>

      <Button
        type="black"
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
