import moment from 'moment'
import { useContext, useEffect, useState } from 'react'
import Button from '../../Components/Button/Button'
import Checkbox from '../../Components/Checkbox/Checkbox'
import Input from '../../Components/Input/Input'
import Loader from '../../Components/Loader/Loader'
import { ScheduleContext } from '../../Context/ScheduleContext'
import { inputChangeHandler } from '../../HelperFunctions/inputChangeHandler'
import { useTutorCohort } from '../../Hooks/useTutorCourses'
import classes from './CreateAMeeting.module.css'

type CreateAMeetingType = {
  onClick: () => void
}

const CreateAMeeting = ({ onClick }: CreateAMeetingType) => {
  // Context
  const { createMeeting, requestState } = useContext(ScheduleContext)

  // State
  const [createMeetingData, setCreateMeetingData] = useState({
    date: '',
    startTime: '',
    endTime: '',
    sessionSubject: '',
  })
  const [dateAndTime, setDateAndTime] = useState('')

  // Request
  const { isLoading, data } = useTutorCohort()

  // Utils
  const cohortData = data?.data

  // Effects
  useEffect(() => {
    if (dateAndTime) {
      const startTime = moment(new Date(dateAndTime).getTime()).format('HH:mm')
      const date = moment(new Date(dateAndTime)).format('yyyy-MM-DD')

      setCreateMeetingData((prevState) => {
        return { ...prevState, startTime, date }
      })
    }
  }, [dateAndTime])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>Create a meeting</h2>
        <p>Create a new meeting for a general live class session</p>
      </div>

      <div className={classes.body}>
        <Input
          label="Add meeting title"
          isRequired
          placeholder="Type your message here..."
          name="sessionSubject"
          value={createMeetingData.sessionSubject}
          onChange={(e) => inputChangeHandler(e, setCreateMeetingData)}
        />

        <Input
          label="Set meeting time"
          isRequired
          placeholder="Type your message here..."
          tip="Event time zone is automatically set to WAT (GMT+1:00) "
          type="datetime-local"
          value={dateAndTime}
          onChange={(e) => inputChangeHandler(e, setDateAndTime, true)}
        />

        <Input
          label="Set meeting end time"
          isRequired
          placeholder="Type your message here..."
          tip="Event time zone is automatically set to WAT (GMT+1:00) "
          type="time"
          name="endTime"
          value={createMeetingData.endTime}
          onChange={(e) => inputChangeHandler(e, setCreateMeetingData)}
        />

        <div className={classes.attendance}>
          <h4>Student attendance</h4>
          <p>Choose the cohort who would be attending this meeting</p>
          {cohortData?.map((data: any, index: number) => {
            return (
              <div key={index}>
                <Checkbox isChecked={true} disabled={true} />
                <label>{data?.name}</label>
              </div>
            )
          })}
        </div>
      </div>

      <div className={classes.buttonSection}>
        <Button type="secondary" onClick={onClick}>
          Cancel
        </Button>
        <Button
          loading={requestState?.isLoading}
          onClick={() => {
            createMeeting(createMeetingData)
          }}
          disabled={
            !createMeetingData.date ||
            !createMeetingData.endTime ||
            !createMeetingData.sessionSubject ||
            !createMeetingData.startTime
          }
        >
          Create meeting
        </Button>
      </div>
    </div>
  )
}

export default CreateAMeeting
