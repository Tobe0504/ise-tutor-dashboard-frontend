import { useContext, useEffect, useState } from 'react'
import Button from '../../Components/Button/Button'
import DropdownWithSearch from '../../Components/DropdownWithSearch/DropdownWithSearch'
import Input from '../../Components/Input/Input'
import ProfileSectionContainer from '../../Components/ProfileSectionContainer/ProfileSectionContainer'
import TextArea from '../../Components/TextArea/TextArea'
import { AuthUserContext } from '../../Context/AuthUserContext'
import { changeHandler } from '../../Utilities/inputChangeHandler'
import classes from './TutorProfileProfileAdditionalDetails.module.css'

const TutorProfileProfileAdditionalDetails = () => {
  // Context
  const {
    aboutInfoUpdate,
    setAboutInfoUpdate,
    updateContactHandlerObject,
    updateAboutInfoHandler,
    getUserRequestObject,
    updateAboutHandlerObject,
  } = useContext(AuthUserContext)

  // States
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  // Utils
  const date = new Date()
  const days = []
  const months = []
  const startingYear = 1960
  let endingYear = Number(date.getFullYear())
  const years = []

  for (let i = 1; i <= 31; i++) {
    if (i < 10) {
      days.push(`0${i}`)
    } else {
      days.push(String(i))
    }
  }

  for (let i = 1; i <= 12; i++) {
    if (i < 10) {
      months.push(`0${i}`)
    } else {
      months.push(String(i))
    }
  }

  for (let i = 0; i <= endingYear - startingYear; i++) {
    years.push(String(i + startingYear))
  }

  // Effects

  // Effect
  useEffect(() => {
    if (getUserRequestObject.data) {
      setAboutInfoUpdate((prevState) => {
        return {
          ...prevState,
          dob: getUserRequestObject?.data?.dob || '',
          bio: getUserRequestObject?.data?.bio || '',
          linkedIn_profile: getUserRequestObject?.data?.linkedIn_profile || '',
          website_link: getUserRequestObject?.data?.website_link || '',
        }
      })

      if (getUserRequestObject?.data?.dob) {
        setYear(getUserRequestObject?.data?.dob?.split('-')[0])
        setMonth(getUserRequestObject?.data?.dob?.split('-')[1])
        setDay(getUserRequestObject?.data?.dob?.split('-')[2])
      }
    }
  }, [getUserRequestObject.data])

  useEffect(() => {
    if (day || year || month) {
      setAboutInfoUpdate((prevState) => {
        return { ...prevState, dob: `${month}-${day}-${year}` }
      })
    }

    // eslint-disable-next-line
  }, [day, month, year])

  return (
    <ProfileSectionContainer
      header="About me"
      paragraph="Share more information with us if you’d like."
    >
      <div className={classes.container}>
        <div className={classes.flex2}>
          <DropdownWithSearch
            label="Birthday"
            title="Day"
            options={days}
            selected={day}
            setSelected={setDay}
          />
          <DropdownWithSearch
            label="Month"
            title="Month"
            options={months}
            selected={month}
            setSelected={setMonth}
          />
          <DropdownWithSearch
            label="Year"
            title="Month"
            options={years}
            selected={year}
            setSelected={setYear}
          />
        </div>
        <p className={classes.infoTip}>
          We’d like to celebrate your birthday with you 🎉
        </p>

        <TextArea
          label="Bio"
          placeholder="Tell us about you"
          name="bio"
          onChange={(e) => {
            changeHandler(e, setAboutInfoUpdate)
          }}
          value={aboutInfoUpdate.bio}
        />
        <p className={classes.infoTip}>500 characters remaining</p>

        <Input
          label="Linkedin profile"
          placeholder="Enter profile link"
          name="linkedIn_profile"
          onChange={(e) => {
            changeHandler(e, setAboutInfoUpdate)
          }}
          value={aboutInfoUpdate.linkedIn_profile}
        />

        <Input
          label="Website link"
          placeholder="Enter website link"
          name="website_link"
          onChange={(e) => {
            changeHandler(e, setAboutInfoUpdate)
          }}
          value={aboutInfoUpdate.website_link}
        />
      </div>

      <div className={classes.buttonSection}>
        <Button
          loading={updateAboutHandlerObject.isLoading}
          onClick={updateAboutInfoHandler}
        >
          Save
        </Button>
      </div>
    </ProfileSectionContainer>
  )
}

export default TutorProfileProfileAdditionalDetails
