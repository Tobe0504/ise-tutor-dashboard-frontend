// import ScheduleSessionDetailsContainer from '../ScheduleSessionDetailsContainer/ScheduleSessionDetailsContainer'
import ScheduleYourAvailability from '../ScheduleYourAvailability/ScheduleYourAvailability'
import classes from './ScheduleSessionDetails.module.css'

type ScheduleSessionDetailsType = {
  tutorAvailability: any
}

const ScheduleSessionDetails = ({
  tutorAvailability,
}: ScheduleSessionDetailsType) => {
  return (
    <section className={classes.container}>
      {/* <ScheduleSessionDetailsContainer /> */}
      <ScheduleYourAvailability tutorAvailability={tutorAvailability} />
    </section>
  )
}

export default ScheduleSessionDetails
