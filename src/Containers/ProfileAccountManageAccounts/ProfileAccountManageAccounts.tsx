import { useContext, useState } from 'react'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import ProfileSectionContainer from '../../Components/ProfileSectionContainer/ProfileSectionContainer'
import { AuthUserContext } from '../../Context/AuthUserContext'
import { changeHandler } from '../../Utilities/inputChangeHandler'
import classes from './ProfileAccountManageAccounts.module.css'

const ProfileAccountManageAccounts = () => {
  // Context
  const {
    passwordUpdate,
    setPasswordUpdate,
    passwordUpdateRequestObject,
    updatePasswordHandler,
  } = useContext(AuthUserContext)

  // States
  const [displayInput, setDiplayInput] = useState(false)

  return (
    <div className={classes.container}>
      <ProfileSectionContainer
        header="Manage password"
        paragraph="Keep your account secure. Update your password here."
      >
        <Input
          label="Current password"
          type="password"
          placeholder="Enter current password"
          value={passwordUpdate.oldPassword}
          onChange={(e) => {
            changeHandler(e, setPasswordUpdate)
          }}
          name="oldPassword"
        />

        {!displayInput && (
          <Button
            type="null"
            onClick={() => {
              setDiplayInput(true)
            }}
          >
            Change password
          </Button>
        )}
        {displayInput && (
          <>
            <Input
              label="New password"
              type="password"
              placeholder="Enter new password "
              tip="Must be at least 8 characters"
              value={passwordUpdate.newPassword}
              onChange={(e) => {
                changeHandler(e, setPasswordUpdate)
              }}
              name="newPassword"
            />
            <Input
              label="Confirm new password"
              type="password"
              placeholder="Enter new password "
              tip="Must match the new password"
              value={passwordUpdate.confirmPassword}
              onChange={(e) => {
                changeHandler(e, setPasswordUpdate)
              }}
              name="confirmPassword"
            />
            <div className={classes.buttonSection}>
              <Button
                type="secondary"
                onClick={() => {
                  setDiplayInput(false)
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={updatePasswordHandler}
                loading={passwordUpdateRequestObject.isLoading}
                disabled={
                  passwordUpdate?.newPassword !==
                  passwordUpdate?.confirmPassword
                }
              >
                Save new password
              </Button>
            </div>
          </>
        )}
      </ProfileSectionContainer>
    </div>
  )
}

export default ProfileAccountManageAccounts
