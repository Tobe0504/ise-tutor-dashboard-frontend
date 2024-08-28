import Button from '../../Components/Button/Button'
import Checkbox from '../../Components/Checkbox/Checkbox'
import Input from '../../Components/Input/Input'
import TextArea from '../../Components/TextArea/TextArea'
import classes from './CreateAMeeting.module.css'

const CreateAMeeting = () => {
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
        />

        <Input
          label="Set meeting time"
          isRequired
          placeholder="Type your message here..."
          tip="Event time zone is automatically set to WAT (GMT+1:00) "
          type="datetime-local"
        />

        <TextArea
          label="Add meeting description"
          placeholder="Type your message here..."
        />

        <div className={classes.attendance}>
          <h4>Student attendance</h4>
          <p>Choose the cohort who would be attending this meeting</p>
          <div>
            <Checkbox isChecked={true} onChange={() => {}} />
            <label>Test Cohort</label>
          </div>
        </div>
      </div>

      <div className={classes.buttonSection}>
        <Button type="secondary">Cancel</Button>
        <Button>Create meeting</Button>
      </div>
    </div>
  )
}

export default CreateAMeeting
