import { useContext, useEffect, useState } from 'react'
import Input from '../../Components/Input/Input'
import ProfileSectionContainer from '../../Components/ProfileSectionContainer/ProfileSectionContainer'
import classes from './TutorProfileProfileAbout.module.css'
import noProfileImage from '../../Assets/Images/noProfileImage.svg'
import DropdownWithSearch from '../../Components/DropdownWithSearch/DropdownWithSearch'
import { AuthUserContext } from '../../Context/AuthUserContext'
import { changeHandler } from '../../Utilities/inputChangeHandler'
import Button from '../../Components/Button/Button'
import { languages } from '../../Utilities/languages'
import { inputChangeHandler } from '../../HelperFunctions/inputChangeHandler'

const TutorProfileProfileAbout = () => {
  // Context
  const {
    contacttInfoUpdate,
    setContacttInfoUpdate,
    updateContactHandler,
    countriesRequestObject,
    fetchCountries,
    contactInfoUpdateFormData,
    getUserRequestObject,
    updateContactHandlerObject,
  } = useContext(AuthUserContext)

  // States
  const [userImage, setUserImage] = useState<{
    frontendFile: null | string
    file: null | string
  }>({
    file: null,
    frontendFile: null,
  })
  const [isDirty, setIsDirty] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [country, setCountry] = useState('')
  const [gender, setGender] = useState('')
  const [language, setLanguage] = useState('')
  const [countryCodeList, setCOuntryCodeList] = useState([])

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

    setUserImage((prevState: any) => {
      return { ...prevState, file: e.target.files[0] }
    })

    setContacttInfoUpdate((prevState) => {
      return { ...prevState, profile_image: e.target.files[0] }
    })
  }

  // Effects
  useEffect(() => {
    fetchCountries()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (getUserRequestObject.data) {
      setContacttInfoUpdate((prevState) => {
        return {
          ...prevState,
          firstname: getUserRequestObject?.data?.first_name || '',
          lastname: getUserRequestObject?.data?.last_name || '',
          profile_image: getUserRequestObject?.data?.profile_image || '',
          gender: getUserRequestObject?.data?.gender || '',
          country: getUserRequestObject?.data?.country || '',
          preferred_language:
            getUserRequestObject?.data?.preferred_language || '',
          email: getUserRequestObject?.data?.email || '',
          phone_number: getUserRequestObject?.data?.phone_number || '',
        }
      })
      if (getUserRequestObject.data?.phone_number) {
        setCountryCode(getUserRequestObject.data?.phone_number?.split(' ')[0])
        setPhoneNumber(getUserRequestObject.data?.phone_number?.split(' ')[1])
      }
    }

    // eslint-disable-next-line
  }, [getUserRequestObject.data])

  useEffect(() => {
    if (countriesRequestObject?.data) {
      const countruyCodesCopy = countriesRequestObject?.data?.map(
        (data: any) => {
          return `${data?.flag}${data?.idd?.root}${data?.idd?.suffixes[0]}`
        }
      )

      setCOuntryCodeList(countruyCodesCopy)
    }

    // eslint-disable-next-line
  }, [countriesRequestObject.data])

  useEffect(() => {
    if (gender) {
      setContacttInfoUpdate((prevState) => {
        return { ...prevState, gender }
      })
    }

    if (country) {
      setContacttInfoUpdate((prevState) => {
        return { ...prevState, country }
      })
    }

    if (language) {
      setContacttInfoUpdate((prevState) => {
        return { ...prevState, preferred_language: language }
      })
    }

    // eslint-disable-next-line
  }, [gender, country, language])

  useEffect(() => {
    if (countriesRequestObject?.data) {
      const countruyCodesCopy = countriesRequestObject?.data?.map(
        (data: any) => {
          return `${data?.flag}${data?.idd?.root}${data?.idd?.suffixes[0]}`
        }
      )

      setCOuntryCodeList(countruyCodesCopy)
    }

    // eslint-disable-next-line
  }, [countriesRequestObject.data])

  useEffect(() => {
    if (countryCode || phoneNumber) {
      setContacttInfoUpdate((prevState) => {
        return {
          ...prevState,
          phone_number: `${countryCode} ${phoneNumber}`,
        }
      })
    }

    // eslint-disable-next-line
  }, [countryCode, phoneNumber])

  useEffect(() => {
    contactInfoUpdateFormData.append(
      'first_name',
      contacttInfoUpdate?.firstname
    )
    contactInfoUpdateFormData.append('last_name', contacttInfoUpdate?.lastname)
    contactInfoUpdateFormData.append(
      'profile_image',
      contacttInfoUpdate?.profile_image
    )
    contactInfoUpdateFormData.append('gender', contacttInfoUpdate?.gender)
    contactInfoUpdateFormData.append('country', contacttInfoUpdate?.country)
    contactInfoUpdateFormData.append(
      'preferred_language',
      contacttInfoUpdate?.preferred_language
    )
    contactInfoUpdateFormData.append(
      'phone_number',
      contacttInfoUpdate?.phone_number
    )

    // eslint-disable-next-line
  }, [contacttInfoUpdate])

  useEffect(() => {
    if (getUserRequestObject.data) {
      const dirty =
        contacttInfoUpdate.firstname !==
          getUserRequestObject?.data?.first_name ||
        contacttInfoUpdate.lastname !== getUserRequestObject?.data?.last_name ||
        contacttInfoUpdate.profile_image !==
          getUserRequestObject?.data?.profile_image ||
        contacttInfoUpdate.gender !== getUserRequestObject?.data?.gender ||
        contacttInfoUpdate.country !== getUserRequestObject?.data?.country ||
        contacttInfoUpdate.preferred_language !==
          getUserRequestObject?.data?.preferred_language ||
        contacttInfoUpdate.email !== getUserRequestObject?.data?.email ||
        contacttInfoUpdate.phone_number !==
          getUserRequestObject?.data?.phone_number

      setIsDirty(dirty)
    }

    // eslint-disable-next-line
  }, [getUserRequestObject.data, contacttInfoUpdate])

  return (
    <div className={classes.container}>
      <ProfileSectionContainer
        header="Contact Information"
        paragraph="Tell us about yourself so we can know you better"
      >
        <div className={classes.userDetails}>
          <Input
            isRequired
            label="Firstame"
            placeholder="Amirah "
            value={contacttInfoUpdate?.firstname}
            onChange={(e) => {
              inputChangeHandler(e, setContacttInfoUpdate)
            }}
            name="firstname"
          />

          <Input
            isRequired
            label="Lastname"
            placeholder="Temitope"
            value={contacttInfoUpdate?.lastname}
            onChange={(e) => {
              inputChangeHandler(e, setContacttInfoUpdate)
            }}
            name="lastname"
          />

          <div className={classes.profilePhoto}>
            <div>
              <img
                src={
                  (userImage?.frontendFile as string) ||
                  getUserRequestObject?.data?.profile_image ||
                  noProfileImage
                }
                alt="Profile"
              />
              <div className={classes.buttonUpper}>
                <input
                  type="file"
                  id="profilePhoto"
                  accept="image/*"
                  onChange={imageHandler}
                />
                <label htmlFor="profilePhoto">Upload photo</label>
                <label
                  onClick={() => {
                    setUserImage({ frontendFile: '', file: '' })
                  }}
                >
                  Remove photo
                </label>
              </div>
            </div>
          </div>

          <p className={classes.profilePhotoTip}>
            Maximum size: 1MB. Supported formats: JPG, GIF, or PNG.
          </p>

          <Input
            isRequired
            label="Email address"
            placeholder="Enter Email address"
            name="email"
            onChange={(e) => {
              changeHandler(e, setContacttInfoUpdate)
            }}
            value={contacttInfoUpdate.email}
          />

          <div className={classes.flex}>
            <DropdownWithSearch
              label="Phone number"
              title="Select"
              options={countryCodeList}
              selected={countryCode}
              setSelected={setCountryCode}
            />
            <Input
              onChange={(e) => {
                setPhoneNumber(e.target.value)
              }}
              value={phoneNumber}
            />
          </div>

          <DropdownWithSearch
            label="Gender"
            options={['Male', 'Female']}
            isRequired
            title="Select"
            selected={gender || contacttInfoUpdate?.gender}
            setSelected={setGender}
          />

          <DropdownWithSearch
            label="Country"
            options={countriesRequestObject?.data
              ?.map((data: any) => {
                return data?.name?.common
              })
              .sort()}
            isRequired
            title="Select"
            selected={country || contacttInfoUpdate?.country}
            setSelected={setCountry}
            isLoading={countriesRequestObject?.isLoading}
          />

          <DropdownWithSearch
            label="Preferred language"
            options={languages.map((data) => {
              return data?.name
            })}
            title="Select"
            selected={language || contacttInfoUpdate?.preferred_language}
            setSelected={setLanguage}
          />
        </div>
        <div className={classes.buttonLower}>
          <Button
            onClick={updateContactHandler}
            loading={updateContactHandlerObject?.isLoading}
            disabled={!isDirty}
          >
            Save changes
          </Button>
        </div>
      </ProfileSectionContainer>
    </div>
  )
}

export default TutorProfileProfileAbout
