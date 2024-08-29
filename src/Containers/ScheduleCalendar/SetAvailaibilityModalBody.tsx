import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import StepLayout from '../../Components/StepLayout/StepLayout'
import SetAvailaibilitySettingUp from './SetAvailaibilitySettingUp'
import classes from './SetAvailaibilityModalBody.module.css'
import SetAvailaibilityScheduleSettings from './SetAvailaibilityScheduleSettings'
import SetAvailibilityPreview from './SetAvailibilityPreview'
import { availabilityType } from '../../Utilities/types'

type SetAvailaibilityModalBodyType = {
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

const SetAvailaibilityModalBody = ({
  onClick,
}: SetAvailaibilityModalBodyType) => {
  // Router
  const [searchParams, setSearchParams] = useSearchParams()
  const step = searchParams.get('step')

  // States
  const [availability, setAvailability] =
    useState<availabilityType>(defaultAvailability)

  //   Effects
  useEffect(() => {
    if (!step) {
      setSearchParams((prevState) => {
        return { ...prevState, step: 1 }
      })
    }
  }, [])
  return (
    <div className={classes.container}>
      <StepLayout steps={[1, 2, 3]}>
        {step === '1' && <SetAvailaibilitySettingUp onClick={onClick} />}
        {step === '2' && (
          <SetAvailaibilityScheduleSettings
            onClick={onClick}
            availability={availability}
            setAvailability={setAvailability}
            defaultAvailability={defaultAvailability}
          />
        )}
        {step === '3' && (
          <SetAvailibilityPreview
            availability={availability?.filter((data) => data?.isActive)}
            onClick={onClick}
          />
        )}
      </StepLayout>
    </div>
  )
}

export default SetAvailaibilityModalBody
