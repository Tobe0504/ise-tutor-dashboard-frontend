import { Dispatch, SetStateAction } from 'react'
import { availabilityType } from '../../Utilities/types'
import Checkbox from '../Checkbox/Checkbox'
import Input from '../Input/Input'
import classes from './AvailibilityPicker.module.css'

type AvailibilityPickerType = {
  availability: availabilityType
  setAvailability: Dispatch<SetStateAction<availabilityType>>
}

const AvailibilityPicker = ({
  availability,
  setAvailability,
}: AvailibilityPickerType) => {
  return (
    <div className={classes.body}>
      {availability.map((availability, availabilityIndex) => {
        return (
          <div key={availabilityIndex} className={classes.availableDay}>
            <Checkbox
              isChecked={availability.isActive}
              onChange={(e) => {
                setAvailability((prevState) => {
                  const updatedState = [...prevState]
                  updatedState[availabilityIndex].isActive = e
                  return updatedState
                })
              }}
            />
            <h4>{availability.day}</h4>
            <div className={classes.availableSection}>
              {availability?.availableTimes?.length > 0 ? (
                availability?.availableTimes?.map(
                  (availableTime, availableTimeIndex) => {
                    return (
                      <div key={availableTimeIndex} className={classes.days}>
                        <Input
                          type="time"
                          value={availableTime?.startingTime}
                          onChange={(e) => {
                            setAvailability((prevState) => {
                              const updatedState = [...prevState]
                              updatedState[availabilityIndex].availableTimes[
                                availableTimeIndex
                              ].startingTime = e.target.value
                              return updatedState
                            })
                          }}
                        />
                        <span>-</span>
                        <Input
                          type="time"
                          value={availableTime?.endingTime}
                          onChange={(e) => {
                            setAvailability((prevState) => {
                              const updatedState = [...prevState]
                              updatedState[availabilityIndex].availableTimes[
                                availableTimeIndex
                              ].endingTime = e.target.value
                              return updatedState
                            })
                          }}
                        />
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => {
                            setAvailability((prevState) => {
                              const updatedState = [...prevState]
                              const filteredTimes = updatedState[
                                availabilityIndex
                              ].availableTimes?.filter((_, index) => {
                                return index !== availableTimeIndex
                              })
                              console.log(availableTimeIndex)
                              updatedState[availabilityIndex].availableTimes =
                                filteredTimes
                              return updatedState
                            })
                          }}
                        >
                          <path
                            d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                            fill="#2E2E2E"
                          />
                        </svg>
                      </div>
                    )
                  }
                )
              ) : (
                <p>Unavailable</p>
              )}
            </div>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                setAvailability((prevState) => {
                  const updatedState = [...prevState]
                  const availableTimes =
                    updatedState[availabilityIndex].availableTimes

                  if (
                    availableTimes.length === 0 ||
                    (availableTimes[availableTimes.length - 1].startingTime !==
                      '00:00' &&
                      availableTimes[availableTimes.length - 1].endingTime !==
                        '00:00')
                  ) {
                    updatedState[availabilityIndex].availableTimes.push({
                      startingTime: '00:00',
                      endingTime: '00:00',
                    })
                  }

                  console.log(updatedState)

                  return updatedState
                })
              }}
            >
              <path
                d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z"
                fill="#2E2E2E"
              />
            </svg>
          </div>
        )
      })}
    </div>
  )
}

export default AvailibilityPicker
