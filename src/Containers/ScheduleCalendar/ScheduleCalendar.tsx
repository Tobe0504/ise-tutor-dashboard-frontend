import classes from './ScheduleCalendar.module.css'
import calender from '../../Assets/Images/calendar.svg'
import Button from '../../Components/Button/Button'
import { useState } from 'react'
import AcceptedModal from '../../Components/Modals/AcceptedModal/AcceptedModal'
import CreateAMeeting from './CreateAMeeting'
import SuccessModalBody from '../../Components/SuccessModal/SuccessModalBody'
import SetAvailaibilityModalBody from './SetAvailaibilityModalBody'
import { useSearchParams } from 'react-router-dom'
import CalendarComponent from '../../Components/CalenderComponent/CalenderComponent'

const ScheduleCalendar = () => {
  // States
  const [displayNewMeetingModal, setDisplayNewMeetingModal] = useState(false)
  const [
    displayNewMeetingCreateSuccessModal,
    setDisplayNewMeetingCreateSuccessModal,
  ] = useState(false)

  // Router
  const [searchParams, setSearchParams] = useSearchParams()
  const step = searchParams.get('step')

  return (
    <>
      {displayNewMeetingModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayNewMeetingModal(false)
          }}
          body={<CreateAMeeting />}
        />
      )}

      {displayNewMeetingCreateSuccessModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayNewMeetingModal(false)
          }}
          body={
            <SuccessModalBody
              header="Meeting created successfully!"
              caption="Your meeting link has been generated, and your students will receive a notification shortly."
              onClick={() => {
                setDisplayNewMeetingModal(false)
              }}
            />
          }
        />
      )}

      {step && (
        <AcceptedModal
          onClick={() => {
            setSearchParams((prevState: any) => {
              const newsearchParams = prevState.delete('step')
              return newsearchParams
            })
          }}
          body={
            <SetAvailaibilityModalBody
              onClick={() => {
                setSearchParams((prevState: any) => {
                  const newsearchParams = prevState.delete('step')
                  return newsearchParams
                })
              }}
            />
          }
        />
      )}

      <div className={classes.container}>
        <div className={classes.header}>
          <img src={calender} alt="Add new meeting" />
          <h4>Calendar</h4>
          <div className={classes.buttonContainer}>
            <Button
              type="secondary"
              onClick={() => {
                setDisplayNewMeetingModal(true)
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4V20M20 12L4 12"
                  stroke="#664EFE"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>New meeting</span>
            </Button>

            <Button
              type="primary"
              onClick={() => {
                setSearchParams((prevState) => {
                  return { ...prevState, step: 1 }
                })
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4V20M20 12L4 12"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Set availability</span>
            </Button>
          </div>
        </div>
        <div className={classes.body}>
          <CalendarComponent />
        </div>
      </div>
    </>
  )
}

export default ScheduleCalendar
