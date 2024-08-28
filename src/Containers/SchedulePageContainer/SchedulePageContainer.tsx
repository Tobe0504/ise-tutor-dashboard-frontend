import ScheduleCalendar from '../ScheduleCalendar/ScheduleCalendar'
import ScheduleSessionDetails from '../ScheduleSessionDetails/ScheduleSessionDetails'
import SchedulesSessionModules2 from '../SchedulesSessionModules2/SchedulesSessionModules2'
import classes from './SchedulePageContainer.module.css'

const SchedulePageContainer = () => {
  return (
    <div className={classes.outerContainer}>
      <section className={classes.container}>
        <SchedulesSessionModules2 />
        <ScheduleCalendar />
      </section>

      <section>
        <ScheduleSessionDetails />
      </section>
    </div>
  )
}

export default SchedulePageContainer
