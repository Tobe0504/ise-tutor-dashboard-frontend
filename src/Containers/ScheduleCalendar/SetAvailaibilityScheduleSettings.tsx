import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import AvailibilityPicker from '../../Components/AvailibilityPicker/AvailibilityPicker'
import Button from '../../Components/Button/Button'
import { activeToggler } from '../../HelperFunctions/activeTogglers'
import { availabilityType } from '../../Utilities/types'
import classes from './SetAvailaibilityScheduleSettings.module.css'

type SetAvailaibilityScheduleSettingsType = {
  onClick: () => void
}

const defaultAvailability = [
  {
    day: 'SUN',
    isActive: false,
    availableTimes: [],
  },
  {
    day: 'MON',
    isActive: false,
    availableTimes: [],
  },
  {
    day: 'TUE',
    isActive: false,
    availableTimes: [],
  },

  {
    day: 'WED',
    isActive: false,
    availableTimes: [],
  },

  {
    day: 'THU',
    isActive: false,
    availableTimes: [],
  },
  {
    day: 'FRI',
    isActive: false,
    availableTimes: [],
  },
  {
    day: 'SAT',
    isActive: false,
    availableTimes: [],
  },
]

const SetAvailaibilityScheduleSettings = ({
  onClick,
}: SetAvailaibilityScheduleSettingsType) => {
  // States
  const [availability, setAvailability] =
    useState<availabilityType>(defaultAvailability)

  const [formatOptions, setFormatOptions] = useState([
    {
      title: 'Use weekly working hours',
      isActive: false,
    },
    {
      title: 'Use custom hours',
      isActive: true,
    },
  ])

  //   Router
  const [searchParams, setSearchParams] = useSearchParams()

  //   Effects
  useEffect(() => {
    const activeFormatter = formatOptions.find((data) => data.isActive)

    if (activeFormatter?.title === 'Use weekly working hours') {
      setAvailability((prevState) => {
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
                  startingTime: '07:00',
                  endingTime: '14:00',
                },
                {
                  startingTime: '15:00',
                  endingTime: '20:00',
                },
              ],
            }
          }
          return {
            ...data,
            isActive: true,
            availableTimes: [
              {
                startingTime: '09:00',
                endingTime: '17:00',
              },
            ],
          }
        })

        return alteredState
      })
    } else {
      setAvailability(defaultAvailability)
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
