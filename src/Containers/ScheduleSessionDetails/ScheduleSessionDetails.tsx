// import ScheduleSessionDetailsContainer from '../ScheduleSessionDetailsContainer/ScheduleSessionDetailsContainer'
import ScheduleYourAvailability from '../ScheduleYourAvailability/ScheduleYourAvailability'
import classes from './ScheduleSessionDetails.module.css'

const ScheduleSessionDetails = () => {
  return (
    <section className={classes.container}>
      {/* <ScheduleSessionDetailsContainer /> */}
      <ScheduleYourAvailability />
    </section>
  )
}

export default ScheduleSessionDetails
