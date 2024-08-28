import { useState } from 'react'
import AvailibilityPicker from '../../Components/AvailibilityPicker/AvailibilityPicker'
import Checkbox from '../../Components/Checkbox/Checkbox'
import Input from '../../Components/Input/Input'
import { availabilityType } from '../../Utilities/types'
import classes from './ScheduleYourAvailability.module.css'

const ScheduleYourAvailability = () => {
  // States
  const [availability, setAvailability] = useState<availabilityType>([
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
  ])

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h4>Your availability</h4>
      </div>

      <AvailibilityPicker
        availability={availability}
        setAvailability={setAvailability}
      />
    </div>
  )
}

export default ScheduleYourAvailability
