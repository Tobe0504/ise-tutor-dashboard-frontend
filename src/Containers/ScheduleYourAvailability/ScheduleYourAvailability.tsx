import { useEffect, useState } from 'react'
import AvailibilityPicker from '../../Components/AvailibilityPicker/AvailibilityPicker'
import { availabilityType } from '../../Utilities/types'
import { defaultAvailability } from '../ScheduleCalendar/SetAvailaibilityModalBody'
import classes from './ScheduleYourAvailability.module.css'

type ScheduleYourAvailabilityTypes = {
  tutorAvailability: any
}

const ScheduleYourAvailability = ({
  tutorAvailability,
}: ScheduleYourAvailabilityTypes) => {
  // States
  const [availability, setAvailability] =
    useState<availabilityType>(defaultAvailability)

  useEffect(() => {
    if (tutorAvailability) {
      const testAvailability: availabilityType = []

      // for (let i = 0; i < availability?.length; i++) {
      //   for (let j = 0; j < tutorAvailability.length; j++) {
      //     if (
      //       availability[i].day?.toLowerCase() ===
      //       tutorAvailability[j]?.day?.toLowerCase()
      //     ) {
      //       testAvailability.push({
      //         availableTimes: tutorAvailability[j]?.availableSlots,
      //         day: tutorAvailability[j]?.day,
      //         isActive: true,
      //       })
      //     } else {
      //       testAvailability.push({
      //         availableTimes: [],
      //         day: tutorAvailability[j]?.day,
      //         isActive: false,
      //       })
      //     }
      //   }
      // }

      const newAvail: availabilityType = availability.map((avail: any) => {
        const matchingTestAvail: any = tutorAvailability.find(
          (testAvail: any) => {
            return (
              avail?.day.toLowerCase() === testAvail?.day.toLowerCase() &&
              testAvail?.availableSlots?.length > 0
            )
          }
        )

        if (matchingTestAvail) {
          return {
            availableTimes: matchingTestAvail?.availableSlots,
            day: matchingTestAvail?.day,
            isActive: true,
          }
        } else {
          return {
            availableTimes: [],
            day: avail.day,
            isActive: false,
          }
        }
      })

      setAvailability(newAvail)
    }
  }, [tutorAvailability])

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
