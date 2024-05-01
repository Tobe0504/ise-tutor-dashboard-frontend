import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import Error from '../../Components/Error/Error'
import Input from '../../Components/Input/Input'
import AcceptedModal from '../../Components/Modals/AcceptedModal/AcceptedModal'
import ProfileSectionContainer from '../../Components/ProfileSectionContainer/ProfileSectionContainer'
import { AuthUserContext } from '../../Context/AuthUserContext'
import { changeHandler } from '../../Utilities/inputChangeHandler'
import classes from '../ProfileAccountManageAccounts/ProfileAccountManageAccounts.module.css'
import ChangeEmailComformedModalBody from './ChangeEmailComformedModalBody'
import ChangeEmailModalWarning from './ChangeEmailModalWarning'

const ProfileAccountManageEmail = () => {
  // COntext
  const {
    updateEmailHandler,
    emailUpdateRequestObject,
    emailUpdate,
    setEmailUpdate,
    getUserRequestObject,
  } = useContext(AuthUserContext)
  // States
  const [displayInput, setDisplayInput] = useState(false)
  const [displayWarningModal, setDisplayWarningModal] = useState(false)
  const [displayEmailChangeConfirmModal, setDisplayEmailChangeConfirmModal] =
    useState(false)
  const [emailState, setEmailState] = useState({ email: '' })

  // Effects
  useEffect(() => {
    if (emailUpdateRequestObject.data) {
      setDisplayWarningModal(false)
      setDisplayEmailChangeConfirmModal(true)
    }
  }, [emailUpdateRequestObject.data])

  return (
    <ProfileSectionContainer
      header="Manage email"
      paragraph="Update to an active email. We'll send you updates here."
    >
      <div className={classes.container}>
        {displayWarningModal && (
          <AcceptedModal
            onClick={() => {
              setDisplayWarningModal(false)
            }}
            body={
              <ChangeEmailModalWarning
                onClick={() => {
                  setDisplayWarningModal(false)
                }}
                onClick2={() => {
                  updateEmailHandler()
                }}
                oldEmail="test@email.com"
                newEmail={emailUpdate.email}
              />
            }
          />
        )}
        {displayEmailChangeConfirmModal && (
          <AcceptedModal
            onClick={() => {
              setDisplayEmailChangeConfirmModal(false)
            }}
            body={
              <ChangeEmailComformedModalBody
                onClick={() => {
                  setDisplayEmailChangeConfirmModal(false)
                }}
              />
            }
          />
        )}
        <div className="error">
          <Error type="error">
            You can only change your email once in six months
          </Error>
        </div>
        <Input
          type="email"
          label="Account email"
          placeholder="oyegokeamirah@gmail.com"
          value={getUserRequestObject?.data?.email}
          readOnly
        />

        {!displayInput && (
          <Button
            type="null"
            onClick={() => {
              setDisplayInput(true)
            }}
          >
            Change email
          </Button>
        )}

        {displayInput && (
          <>
            <Input
              type="email"
              label="Enter new account email"
              placeholder="name@gmail.com"
              value={emailUpdate.email}
              onChange={(e) => {
                changeHandler(e, setEmailUpdate)
              }}
              name="email"
            />

            <p className={classes.infoTip}>
              <Link to="">Forgot Password?</Link>
            </p>
            <Input
              type="email"
              label="Confirm new account email"
              placeholder="name@gmail.com"
              value={emailState.email}
              onChange={(e) => {
                changeHandler(e, setEmailState)
              }}
              name="email"
            />

            <div className={classes.buttonSection}>
              <Button
                type="secondary"
                onClick={() => {
                  setDisplayInput(false)
                }}
              >
                Cancel update
              </Button>
              <Button
                onClick={() => {
                  setDisplayWarningModal(true)
                }}
                disabled={emailState.email !== emailUpdate.email}
              >
                Continue updates
              </Button>
            </div>
          </>
        )}
      </div>
    </ProfileSectionContainer>
  )
}

export default ProfileAccountManageEmail
