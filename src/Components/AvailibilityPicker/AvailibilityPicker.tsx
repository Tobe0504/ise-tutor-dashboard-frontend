import { Dispatch, SetStateAction } from 'react'
import { availabilityType } from '../../Utilities/types'
import Checkbox from '../Checkbox/Checkbox'
import Input from '../Input/Input'
import classes from './AvailibilityPicker.module.css'

type AvailibilityPickerType = {
  availability: availabilityType
  setAvailability: Dispatch<SetStateAction<availabilityType>>
  isEditable?: boolean
}

const AvailibilityPicker = ({
  availability,
  setAvailability,
  isEditable,
}: AvailibilityPickerType) => {
  return (
    <div className={classes.body}>
      {availability.map((availability, availabilityIndex) => {
        return (
          <div key={availabilityIndex} className={classes.availableDay}>
            <Checkbox
              isChecked={availability?.isActive as boolean}
              onChange={(e) => {
                setAvailability((prevState) => {
                  const updatedState = [...prevState]
                  updatedState[availabilityIndex].isActive = e
                  return updatedState
                })
              }}
              disabled={!availability.availableTimes.length || !isEditable}
            />
            <h4>{availability.day?.toUpperCase()}</h4>
            <div className={classes.availableSection}>
              {availability?.availableTimes?.length > 0 ? (
                availability?.availableTimes?.map(
                  (availableTime, availableTimeIndex) => {
                    return (
                      <div key={availableTimeIndex} className={classes.days}>
                        <Input
                          type="time"
                          value={availableTime?.startTime}
                          onChange={(e) => {
                            setAvailability((prevState) => {
                              const updatedState = [...prevState]
                              updatedState[availabilityIndex].availableTimes[
                                availableTimeIndex
                              ].startTime = e.target.value
                              return updatedState
                            })
                          }}
                          readOnly={!isEditable}
                        />
                        <span>-</span>
                        <Input
                          type="time"
                          value={availableTime?.endTime}
                          onChange={(e) => {
                            setAvailability((prevState) => {
                              const updatedState = [...prevState]
                              updatedState[availabilityIndex].availableTimes[
                                availableTimeIndex
                              ].endTime = e.target.value
                              return updatedState
                            })
                          }}
                          readOnly={!isEditable}
                        />
                        {isEditable && (
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
                        )}
                      </div>
                    )
                  }
                )
              ) : (
                <p>Unavailable</p>
              )}
            </div>

            {isEditable && (
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
                      (availableTimes[availableTimes.length - 1].startTime !==
                        '00:00' &&
                        availableTimes[availableTimes.length - 1].endTime !==
                          '00:00')
                    ) {
                      updatedState[availabilityIndex].availableTimes.push({
                        startTime: '00:00',
                        endTime: '00:00',
                      })
                    }

                    return updatedState
                  })
                }}
              >
                <path
                  d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z"
                  fill="#2E2E2E"
                />
              </svg>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default AvailibilityPicker
