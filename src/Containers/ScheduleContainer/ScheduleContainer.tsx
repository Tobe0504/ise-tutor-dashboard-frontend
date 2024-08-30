import classes from './ScheduleContainer.module.css'
import ScheduleCard from '../../Components/ScheduleCard/ScheduleCard'
import noOvervue from '../../Assets/Images/noOvervue.svg'
import EmptyTabComponent from '../../Components/EmptyTabComponent/EmptyTabComponent'

type LiveClassSessionsProps = {
  height?: string
  padding?: string
  schedule?: any
}

const ScheduleContainer = ({
  height,
  padding,
  schedule,
}: LiveClassSessionsProps) => {
  return (
    <div className={classes.container} style={{ height, padding }}>
      <ul>
        {schedule?.length > 0 ? (
          schedule?.map((data: any, index: number) => {
            return (
              <ScheduleCard
                key={index}
                index={index}
                time={data?.time}
                title={data?.title}
                link={data?.link}
              />
            )
          })
        ) : (
          <EmptyTabComponent
            image={noOvervue as string}
            firstParagraph="You have no schedule at the moment."
            secondParagraph=""
            route="/schedule"
            buttontext="Schedule Appointment"
            showButton={false}
          />
        )}
      </ul>
    </div>
  )
}

export default ScheduleContainer
