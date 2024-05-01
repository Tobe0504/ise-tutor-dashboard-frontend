import { useContext } from 'react'
import Input from '../../Components/Input/Input'
import TextArea from '../../Components/TextArea/TextArea'
import { AuthUserContext } from '../../Context/AuthUserContext'
import { inputChangeHandler } from '../../HelperFunctions/inputChangeHandler'
import classes from './ProfileProfileAdditionalDetails.module.css'

const ProfileProfileAdditionalDetails = () => {
  // Context
  const { completeProfile, setCOmpleteProfile } = useContext(AuthUserContext)

  return (
    <div className={classes.container}>
      <div>
        <Input
          label="Linkedin profile"
          placeholder="E.g: https://www.linkedin.com/in/johndoe "
          isRequired
          value={completeProfile.linkedIn_profile}
          name="linkedIn_profile"
          onChange={(e) => {
            inputChangeHandler(e, setCOmpleteProfile)
          }}
        />
        <p className={classes.infoTip}>Copy and paste your Linkedin URL</p>
      </div>

      <TextArea
        label="Bio"
        placeholder="Tell us more about yourself, and your achievements "
        isRequired
        value={completeProfile.bio}
        name="bio"
        onChange={(e) => {
          inputChangeHandler(e, setCOmpleteProfile)
        }}
      />
    </div>
  )
}

export default ProfileProfileAdditionalDetails
