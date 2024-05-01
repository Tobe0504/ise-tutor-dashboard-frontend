import React, { useContext, useEffect, useState } from 'react'
import Button from '../../Components/Button/Button'
import DropdownWithSearch from '../../Components/DropdownWithSearch/DropdownWithSearch'
import ProfileSectionContainer from '../../Components/ProfileSectionContainer/ProfileSectionContainer'
import TagInput from '../../Components/TagInput/TagInput'
import { AuthUserContext } from '../../Context/AuthUserContext'
import classes from './TutorProfileProfileSkillsAndExperience.module.css'

const TutorProfileProfileSkillsAndExperience = () => {
  // Context
  const { updateSkillsHandler, updateSkillsHandlerObject, setSkillInfoUpdate } =
    useContext(AuthUserContext)

  // States
  const [topSkills, setTopSkills] = useState<null | string[]>([])
  const [topSkillsText, setTopSkillsText] = useState('')
  const [experienceLevel, setExperienceLevel] = useState('')
  const [yearsOfExperience, setYearsOfExperience] = useState('')
  const [techProfeciency, setTechProficiency] = useState('')
  const [selectedProfeciency, setSelectedProfeciency] = useState<string[]>([])

  const filter = (i: number) => {
    const arrayCopy = selectedProfeciency.filter((data, index) => {
      return i !== index
    })

    setSelectedProfeciency(arrayCopy)
  }

  // Effects
  useEffect(() => {
    if (techProfeciency) {
      if (!selectedProfeciency.includes(techProfeciency)) {
        setSelectedProfeciency((prevState: string[]) => {
          return [...prevState, techProfeciency]
        })
      }
    }

    // eslint-disable-next-line
  }, [techProfeciency])

  useEffect(() => {
    if (topSkills) {
      setSkillInfoUpdate((prevState) => {
        return {
          ...prevState,
          specialization: topSkills,
          years_of_experience: yearsOfExperience,
          experience_level: experienceLevel,
          tech_proficiency: selectedProfeciency,
        }
      })
    }

    // eslint-disable-next-line
  }, [topSkills, experienceLevel, yearsOfExperience, selectedProfeciency])

  useEffect(() => {
    if (topSkillsText && !topSkills?.includes(topSkillsText as string)) {
      setTopSkills((prevsState: any) => {
        if (prevsState) {
          return [...prevsState, topSkillsText]
        } else {
          return [topSkillsText]
        }
      })
    }

    // eslint-disable-next-line
  }, [topSkillsText])

  // Utils
  const filtertopSkills = (skill: string) => {
    if ((topSkills as string[])?.length > 0) {
      setTopSkills(
        (topSkills as string[])?.filter((data: string) => {
          return data !== skill
        })
      )
    }
  }

  return (
    <ProfileSectionContainer
      header="Skills and experience"
      paragraph="Tell us more about your work and skillset"
    >
      <div className={classes.container}>
        <DropdownWithSearch
          label="Top skills"
          options={[
            'Communication',
            'Collaboration',
            'Adaptability',
            'Public speaking',
            'Leadership',
            'Time management',
            'Emotional intelligence',
            'Creativity',
            'Problem solving',
            'Critical thinking',
          ]}
          title="Select"
          selected={topSkillsText}
          setSelected={setTopSkillsText}
        />
        <div className={classes.topSkillsContainer}>
          {(topSkills as any[])?.length > 0 &&
            (topSkills as any[])?.map((data: any, i: number) => {
              return (
                <div key={i} className={classes.topSkillsChip}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      filtertopSkills(data)
                    }}
                  >
                    <path
                      d="M6 18L18 6M6 6L18 18"
                      stroke="#2E2E2E"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>{data}</span>
                </div>
              )
            })}
        </div>
        <DropdownWithSearch
          label="Experience level"
          options={['Beginner', 'Intermediate', 'Expert']}
          isRequired
          title="Select"
          selected={experienceLevel}
          setSelected={setExperienceLevel}
        />

        <DropdownWithSearch
          label="Years of experience"
          options={['Less than 1', '1-3', '4-9', '10 and above']}
          isRequired
          title="Select"
          selected={yearsOfExperience}
          setSelected={setYearsOfExperience}
        />

        <DropdownWithSearch
          label="Technical proficiency"
          options={['Python', 'Java', 'Javascript', 'C/C++', 'Microsoft Azure']}
          isRequired
          title="Enter proficiency"
          selected={techProfeciency}
          setSelected={setTechProficiency}
        />

        <div className={classes.tag}>
          {selectedProfeciency.map((data, i) => {
            return (
              <React.Fragment key={i}>
                <TagInput
                  label={data}
                  onClick={() => {
                    filter(i)
                  }}
                />
              </React.Fragment>
            )
          })}
        </div>
      </div>

      <div className={classes.buttonSection}>
        <Button
          onClick={updateSkillsHandler}
          loading={updateSkillsHandlerObject.isLoading}
        >
          Save
        </Button>
      </div>
    </ProfileSectionContainer>
  )
}

export default TutorProfileProfileSkillsAndExperience
