import { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import StepLayout from '../../Components/StepLayout/StepLayout'
import SetAvailaibilitySettingUp from './SetAvailaibilitySettingUp'
import classes from './SetAvailaibilityModalBody.module.css'
import SetAvailaibilityScheduleSettings from './SetAvailaibilityScheduleSettings'
import SetAvailibilityPreview from './SetAvailibilityPreview'
import { availabilityType } from '../../Utilities/types'
import SuccessModalBody from '../../Components/SuccessModal/SuccessModalBody'
import { ScheduleContext } from '../../Context/ScheduleContext'

type SetAvailaibilityModalBodyType = {
  onClick: () => void
}

export const defaultAvailability = [
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
  // Context
  const { requestState } = useContext(ScheduleContext)

  // Router
  const [searchParams, setSearchParams] = useSearchParams()
  const step = searchParams.get('step')

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

  // Utils
  const activeFormatter = formatOptions.find((data) => data.isActive)

  //   Effects
  useEffect(() => {
    if (!step) {
      setSearchParams((prevState) => {
        return { ...prevState, step: 1 }
      })
    }

    // eslint-disable-next-line
  }, [])

  // Effects
  useEffect(() => {
    if (requestState?.data) {
      setSearchParams((prevState) => {
        return { ...prevState, step: '4' }
      })
    }

    // eslint-disable-next-line
  }, [requestState?.data])

  return (
    <div className={classes.container}>
      <StepLayout steps={[1, 2, 3]} notShowHeader={step === '4'}>
        {step === '1' && <SetAvailaibilitySettingUp onClick={onClick} />}
        {step === '2' && (
          <SetAvailaibilityScheduleSettings
            onClick={onClick}
            availability={availability}
            setAvailability={setAvailability}
            formatOptions={formatOptions}
            setFormatOptions={setFormatOptions}
          />
        )}
        {step === '3' && (
          <SetAvailibilityPreview
            availability={availability?.filter((data) => data?.isActive)}
            onClick={onClick}
            activeFormatter={
              activeFormatter as { title: string; isActive: boolean }
            }
          />
        )}

        {step === '4' && (
          <SuccessModalBody
            onClick={onClick}
            header="Availability schedule published"
            caption="Students can now book sessions during your available times."
          />
        )}
      </StepLayout>
    </div>
  )
}

export default SetAvailaibilityModalBody
