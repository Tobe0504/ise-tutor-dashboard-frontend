import { useSearchParams } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import classes from './SetAvailibilityPreview.module.css'
import CalendarComponent from '../../Components/CalenderComponent/CalenderComponent'
import { availabilityType } from '../../Utilities/types'
import { useContext, useEffect, useState } from 'react'
import { ScheduleContext } from '../../Context/ScheduleContext'

type SetAvailibilityPreviewType = {
  availability: availabilityType
  onClick: () => void
  activeFormatter: { title: string; isActive: boolean }
}

const SetAvailibilityPreview = ({
  availability,
  onClick,
  activeFormatter,
}: SetAvailibilityPreviewType) => {
  //   Router
  const [, setSearchParams] = useSearchParams()

  // States
  const [requestAvailability, setRequestAvailability] =
    useState<availabilityType>(availability)
  // Context
  const { createAvailability, requestState } = useContext(ScheduleContext)

  // Effects
  useEffect(() => {
    if (availability.length > 0) {
      setRequestAvailability((prevState: availabilityType) => {
        let updatedStates = [...prevState]
        const filteredUpdates = updatedStates.map((data) => {
          return { day: data.day, availableTimes: data.availableTimes }
        })
        updatedStates = filteredUpdates
        return updatedStates
      })
    }
  }, [availability])

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h4>Preview your schedule</h4>
        <p>
          Ensure correct details of your availability is properly scheduled{' '}
        </p>
      </div>

      <CalendarComponent tasks={availability} />

      <div className={classes.buttonSection}>
        <Button type="null">Cancel schedule</Button>
        <Button
          type="secondary"
          onClick={() => {
            setSearchParams((prevState) => {
              return { ...prevState, step: '2' }
            })
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            // setSearchParams((prevState: any) => {
            //   return { ...prevState, step: '4' }
            // })
            createAvailability(
              requestAvailability,
              activeFormatter?.title.toLowerCase() === 'useweekly working hours'
                ? 'workHours'
                : 'custom'
            )
          }}
          loading={requestState.isLoading}
        >
          Save and continue
        </Button>
      </div>
    </div>
  )
}

export default SetAvailibilityPreview
