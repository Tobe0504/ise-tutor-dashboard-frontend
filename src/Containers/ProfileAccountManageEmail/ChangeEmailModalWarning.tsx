import Button from '../../Components/Button/Button'
import Error from '../../Components/Error/Error'
import classes from './ProfileAccountManageEmail.module.css'

type ChangeEmailModalWarningprops = {
  onClick: () => void
  onClick2: () => void
  oldEmail: string
  newEmail: string
}

const ChangeEmailModalWarning = ({
  onClick,
  onClick2,
  oldEmail,
  newEmail,
}: ChangeEmailModalWarningprops) => {
  return (
    <div className={classes.modalContainer}>
      <h4>Change email address</h4>
      <p>
        Are you sure you want to change the email address associated with your
        account?
      </p>

      <Error type="error" notShowIndicator>
        Important: Please note that you can only change your email address once
        every 6 months. Ensure that you have access to the new email address
      </Error>

      <p>Current Email Address: {oldEmail || ''}</p>
      <p>New Email Address: {newEmail || ''}</p>

      <p>By confirming, the following actions will take place:</p>
      <ol>
        <li>You will be logged out of your current session.</li>
        <li>
          You will receive email notifications confirming this change to both
          your old and new email addresses.
        </li>
        <li>To log back in, you must use your new email address.</li>
      </ol>

      <div className={classes.buttonSection}>
        <Button type="secondary" onClick={onClick}>
          Cancel
        </Button>
        <Button onClick={onClick2}>Confirm email change</Button>
      </div>
    </div>
  )
}

export default ChangeEmailModalWarning
