import { useContext, useEffect, useState } from 'react'
import Input from '../../Components/Input/Input'
import ProfileSectionContainer from '../../Components/ProfileSectionContainer/ProfileSectionContainer'
import classes from './TutorProfileProfileAbout.module.css'
import noProfileImage from '../../Assets/Images/noProfileImage.svg'
import DropdownWithSearch from '../../Components/DropdownWithSearch/DropdownWithSearch'
import { AuthUserContext } from '../../Context/AuthUserContext'
import { changeHandler } from '../../Utilities/inputChangeHandler'
import Button from '../../Components/Button/Button'

const TutorProfileProfileAbout = () => {
  // Context
  const {
    contacttInfoUpdate,
    setContacttInfoUpdate,
    updateAboutHandlerObject,
    updateContactHandler,
    countriesRequestObject,
    fetchCountries,
    contactInfoUpdateFormData,
  } = useContext(AuthUserContext)

  // States
  const [userImage, setUserImage] = useState<{
    frontendFile: null | string
    file: null | string
  }>({
    file: null,
    frontendFile: null,
  })
  const [fullname, setFullname] = useState('')
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

    // eslint-disable-next-line
  }, [gender, country])

  useEffect(() => {
    if (fullname) {
      const first = fullname.split(' ')[0]
      const last = fullname.split(' ')[1]

      setContacttInfoUpdate((prevState) => {
        return { ...prevState, firstname: first, lastname: last }
      })
    }

    // eslint-disable-next-line
  }, [fullname])

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
          phone: `${countryCode} ${phoneNumber}`,
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

  return (
    <div className={classes.container}>
      <ProfileSectionContainer
        header="Contact Information"
        paragraph="Tell us about yourself so we can know you better"
      >
        <div className={classes.userDetails}>
          <Input
            isRequired
            label="Full name"
            placeholder="Amirah Temitope"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value)
            }}
          />

          <div className={classes.profilePhoto}>
            <div>
              <img
                src={
                  !userImage.frontendFile
                    ? noProfileImage
                    : (userImage?.frontendFile as string)
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
              isRequired
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
            selected={gender}
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
            selected={country}
            setSelected={setCountry}
            isLoading={countriesRequestObject?.isLoading}
          />

          <DropdownWithSearch
            label="Preferred language"
            options={['English']}
            title="Select"
            selected={language}
            setSelected={setLanguage}
          />
        </div>
        <div className={classes.buttonLower}>
          <Button type="secondary" disabled>
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={updateContactHandler}
            loading={updateAboutHandlerObject?.isLoading}
          >
            Save changes
          </Button>
        </div>
      </ProfileSectionContainer>
    </div>
  )
}

export default TutorProfileProfileAbout
