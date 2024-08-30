import Loader from '../../Components/Loader/Loader'
import { useSchedule, useTutorAvailability } from '../../Hooks/useSchedule'
import ScheduleCalendar from '../ScheduleCalendar/ScheduleCalendar'
import ScheduleSessionDetails from '../ScheduleSessionDetails/ScheduleSessionDetails'
import SchedulesSessionModules2 from '../SchedulesSessionModules2/SchedulesSessionModules2'
import classes from './SchedulePageContainer.module.css'

const SchedulePageContainer = () => {
  // Utils
  const date = new Date()
  const year = String(date.getFullYear())
  const month = String(date.getMonth() + 1).padStart(2, '0')

  // Requests
  const { isLoading, data } = useSchedule(year, month)
  const { isLoading: tutorAvailabilityIsLoading, data: availabilityData } =
    useTutorAvailability()

  const schedule = data?.data
  const tutorAvailability = availabilityData?.data

  if (isLoading || tutorAvailabilityIsLoading) {
    return <Loader />
  }

  return (
    <div className={classes.outerContainer}>
      <section className={classes.container}>
        <SchedulesSessionModules2 schedule={schedule} />
        <ScheduleCalendar />
      </section>

      <section>
        <ScheduleSessionDetails tutorAvailability={tutorAvailability} />
      </section>
    </div>
  )
}

export default SchedulePageContainer
