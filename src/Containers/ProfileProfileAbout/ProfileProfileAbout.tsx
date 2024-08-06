import { useContext, useEffect, useState } from 'react'
import classes from './ProfileProfileAbout.module.css'
import noProfileImage from '../../Assets/Images/noProfileImage.svg'
import Input from '../../Components/Input/Input'
import DropdownWithSearch from '../../Components/DropdownWithSearch/DropdownWithSearch'
import { AuthUserContext } from '../../Context/AuthUserContext'
import { inputChangeHandler } from '../../HelperFunctions/inputChangeHandler'

const ProfileProfileAbout = () => {
  // States
  const [userImage, setUserImage] = useState<{
    frontendFile: null | string
    file: null | string
  }>({
    file: null,
    frontendFile: null,
  })
  const [selectedGeder, setSelectedGender] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')

  // Context
  const {
    getUserRequestObject,
    completeProfile,
    setCOmpleteProfile,
    countriesRequestObject,
  } = useContext(AuthUserContext)

  // Effect
  useEffect(() => {
    if (getUserRequestObject.data) {
      setCOmpleteProfile((prevState) => {
        return {
          ...prevState,
          first_name: getUserRequestObject?.data?.first_name || '',
          last_name: getUserRequestObject?.data?.last_name || '',
          headline: getUserRequestObject?.data?.headline || '',
          profile_image: getUserRequestObject?.data?.profile_image || '',
          gender: getUserRequestObject?.data?.gender || '',
          country: getUserRequestObject?.data?.country || '',
          bio: '',
          linkedIn_profile: getUserRequestObject?.data?.linkedIn_profile || '',
          twitter_profile: getUserRequestObject?.data?.twitter_profile || '',
        }
      })
    }

    // eslint-disable-next-line
  }, [getUserRequestObject.data])

  useEffect(() => {
    if (selectedGeder) {
      setCOmpleteProfile((prevstate) => {
        return { ...prevstate, gender: selectedGeder }
      })
    }

    if (selectedCountry) {
      setCOmpleteProfile((prevstate) => {
        return { ...prevstate, country: selectedCountry }
      })
    }

    // eslint-disable-next-line
  }, [selectedGeder, selectedCountry])

  // Utils
  const imageHandler = (e: any) => {
    const reader = new FileReader()

    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserImage((prevState: any) => {
          return { ...prevState, frontendFile: reader.result }
        })
      }
    }
    reader.readAsDataURL(e.target.files[0])
    setCOmpleteProfile((prevState) => {
      return { ...prevState, profile_image: e?.target?.files[0] }
    })

    setUserImage((prevState: any) => {
      return { ...prevState, file: e.target.files[0] }
    })
  }

  const removeImage = () => {
    setUserImage((prevState: any) => {
      return { ...prevState, frontendFile: null, file: null }
    })
  }

  return (
    <div className={classes.container}>
      <div className={classes.userDetails}>
        <div>
          <div className={classes.profilePhotoHeader}>
            <h4>Upload your profile picture</h4>
          </div>
          <div className={classes.profilePhoto}>
            <div>
              <img
                src={
                  (userImage?.frontendFile as string) ||
                  completeProfile?.profile_image ||
                  noProfileImage
                }
                alt="Profile"
              />
              <div className={classes.buttonUpper}>
                <input type="file" id="profilePhoto" onChange={imageHandler} />
                <label htmlFor="profilePhoto">Browse</label>
                <label onClick={removeImage}>Remove</label>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.inputName}>
          <Input
            isRequired
            label="Firstname"
            placeholder="Davis"
            value={completeProfile.first_name}
            name="first_name"
            onChange={(e) => {
              inputChangeHandler(e, setCOmpleteProfile)
            }}
          />

          <Input
            isRequired
            label="Lastname"
            placeholder="Davis"
            value={completeProfile.last_name}
            name="last_name"
            onChange={(e) => {
              inputChangeHandler(e, setCOmpleteProfile)
            }}
          />
          <p className={classes.infoTip}>You can always edit this later</p>
        </div>

        <Input
          isRequired
          label="Headline"
          placeholder="e.g Top recruiter at Google"
          value={completeProfile.headline}
          name="headline"
          onChange={(e) => {
            inputChangeHandler(e, setCOmpleteProfile)
          }}
        />

        <DropdownWithSearch
          label="Gender"
          options={['Male', 'Female']}
          isRequired
          title="Select"
          selected={completeProfile?.gender}
          setSelected={setSelectedGender}
        />

        <div>
          <DropdownWithSearch
            label="Country"
            options={countriesRequestObject?.data
              ?.map((data: any) => {
                return data?.name?.common
              })
              .sort()}
            isRequired
            title="Select"
            selected={completeProfile?.country}
            setSelected={setSelectedCountry}
            isLoading={countriesRequestObject?.isLoading}
          />
          <p className={classes.infoTip}>Use your current location</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileProfileAbout
