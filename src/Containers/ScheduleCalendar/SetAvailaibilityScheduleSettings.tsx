import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import AvailibilityPicker from '../../Components/AvailibilityPicker/AvailibilityPicker'
import Button from '../../Components/Button/Button'
import { activeToggler } from '../../HelperFunctions/activeTogglers'
import { availabilityType } from '../../Utilities/types'
import classes from './SetAvailaibilityScheduleSettings.module.css'

type SetAvailaibilityScheduleSettingsType = {
  onClick: () => void
  availability: availabilityType
  setAvailability: Dispatch<SetStateAction<availabilityType>>
  formatOptions: { title: string; isActive: boolean }[]
  setFormatOptions: Dispatch<
    SetStateAction<{ title: string; isActive: boolean }[]>
  >
}

const SetAvailaibilityScheduleSettings = ({
  onClick,
  availability,
  setAvailability,
  formatOptions,
  setFormatOptions,
}: SetAvailaibilityScheduleSettingsType) => {
  // States

  //   Router
  const [, setSearchParams] = useSearchParams()

  //   Effects
  useEffect(() => {
    const activeFormatter = formatOptions.find((data) => data.isActive)

    if (activeFormatter?.title === 'Use weekly working hours') {
      setAvailability((prevState: availabilityType) => {
        const updatedState = [...prevState]
        const alteredState = updatedState?.map((data, i) => {
          if (data.day.toLowerCase() === 'sat') {
            return { ...data, isActive: false, availableTimes: [] }
          }
          if (data.day.toLowerCase() === 'sun') {
            return {
              ...data,
              isActive: true,
              availableTimes: [
                {
                  startTime: '07:00',
                  endTime: '14:00',
                },
                {
                  startTime: '15:00',
                  endTime: '20:00',
                },
              ],
            }
          }
          return {
            ...data,
            isActive: true,
            availableTimes: [
              {
                startTime: '09:00',
                endTime: '17:00',
              },
            ],
          }
        })

        return alteredState
      })
    }
  }, [formatOptions])

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h4>Scheduling settings</h4>
        <p>
          Set your available date and time you can be scheduled for a session{' '}
        </p>
      </div>

      <div className={classes.availabilituyFormatter}>
        {formatOptions.map((data, i) => {
          return (
            <p
              key={i}
              className={
                data.isActive
                  ? classes.activeFormatter
                  : classes.inActiveformatter
              }
              onClick={() => {
                activeToggler(i, formatOptions, setFormatOptions)
              }}
            >
              {data.title}
            </p>
          )
        })}
      </div>

      <div className={classes.availabilityPicker}>
        <AvailibilityPicker
          availability={availability}
          setAvailability={setAvailability}
          isEditable
        />
      </div>

      <p>Event timezone is automatically set to WAT (GMT+1:00) </p>

      <div className={classes.buttonSection}>
        <Button type="null">Cancel schedule</Button>
        <Button type="secondary" onClick={onClick}>
          Back
        </Button>
        <Button
          onClick={() => {
            setSearchParams((prevState) => {
              return { ...prevState, step: '3' }
            })
          }}
        >
          Save and continue
        </Button>
      </div>
    </div>
  )
}

export default SetAvailaibilityScheduleSettings
