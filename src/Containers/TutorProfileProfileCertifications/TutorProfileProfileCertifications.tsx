import React, { useContext, useEffect, useState } from 'react'
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
    getUserRequestObject,
  } = useContext(AuthUserContext)

  //   States
  const [certificationState, setCertificationState] = useState('')
  const [isDirty, setIsDirty] = useState(false)

  // Effects
  useEffect(() => {
    if (getUserRequestObject?.data) {
      if (getUserRequestObject?.data?.certifications?.length > 0) {
        setCertificationsUpdate({
          certifications: [
            ...JSON.parse(getUserRequestObject?.data?.certifications),
          ],
        })
      } else {
        setCertificationsUpdate({ certifications: [] })
      }
    }

    // eslint-disable-next-line
  }, [getUserRequestObject?.data])

  useEffect(() => {
    if (getUserRequestObject?.data) {
      const dirty =
        JSON.stringify(certificationsUpdate.certifications) !==
        getUserRequestObject?.data?.certifications

      setIsDirty(dirty)
    }

    // eslint-disable-next-line
  }, [certificationsUpdate, getUserRequestObject?.data])

  return (
    <ProfileSectionContainer
      header="Certifications"
      paragraph="Tell us about your educational certifications"
    >
      <div className={classes.container}>
        <Input
          label="Certifications"
          placeholder="Enter certification name and hit enter to save"
          isRequired
          value={certificationState}
          onChange={(e) => {
            setCertificationState(e.target.value)
          }}
          errorMessage="Hit enter to save a certification"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && certificationState.trim().length > 0) {
              const smallerArray = certificationsUpdate.certifications?.map(
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
          {certificationsUpdate.certifications?.map((data, i) => {
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
            disabled={!isDirty}
          >
            Save
          </Button>
        </div>
      </div>
    </ProfileSectionContainer>
  )
}

export default TutorProfileProfileCertifications
