import React, { useContext, useState } from 'react'
import classes from './TutorProfileProfileCertifications.module.css'
import ProfileSectionContainer from '../../Components/ProfileSectionContainer/ProfileSectionContainer'
import Input from '../../Components/Input/Input'
import TagInput from '../../Components/TagInput/TagInput'
import { AuthUserContext } from '../../Context/AuthUserContext'
import { capitalize } from '../../HelperFunctions/capitalize'
import Button from '../../Components/Button/Button'

const TutorProfileProfileCertifications = () => {
  // Context
  const {
    updateCertificationHandler,
    updateCertificationsHandlerObject,
    certificationsUpdate,
    setCertificationsUpdate,
  } = useContext(AuthUserContext)

  //   States
  const [certificationState, setCertificationState] = useState('')

  return (
    <ProfileSectionContainer
      header="Certifications"
      paragraph="Tell us about your educational certifications"
    >
      <div className={classes.container}>
        <Input
          label="Certifications"
          placeholder="Enter certification name"
          isRequired
          value={certificationState}
          onChange={(e) => {
            setCertificationState(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && certificationState.trim().length > 0) {
              const smallerArray = certificationsUpdate.certifications.map(
                (data) => {
                  return data.toLowerCase()
                }
              )
              if (!smallerArray.includes(certificationState.toLowerCase())) {
                setCertificationsUpdate({
                  certifications: [
                    ...certificationsUpdate.certifications,
                    capitalize(certificationState) as string,
                  ],
                })
                setCertificationState('')
              }
            }
          }}
        />
        <div className={classes.tag}>
          {certificationsUpdate.certifications.map((data, i) => {
            return (
              <React.Fragment key={i}>
                <TagInput
                  label={data}
                  onClick={() => {
                    const certCopy = certificationsUpdate.certifications.filter(
                      (data, index) => {
                        return i !== index
                      }
                    )
                    setCertificationsUpdate(() => {
                      return { certifications: certCopy }
                    })
                  }}
                />
              </React.Fragment>
            )
          })}
        </div>

        <div className={classes.buttonSection}>
          <Button
            onClick={updateCertificationHandler}
            loading={updateCertificationsHandlerObject.isLoading}
          >
            Save
          </Button>
        </div>
      </div>
    </ProfileSectionContainer>
  )
}

export default TutorProfileProfileCertifications
