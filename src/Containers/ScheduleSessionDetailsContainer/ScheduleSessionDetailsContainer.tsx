import Button from '../../Components/Button/Button'
import classes from './ScheduleSessionDetailsContainer.module.css'

const ScheduleSessionDetailsContainer = () => {
  // Utils
  const utils = [
    {
      title: 'Session name',
      value: 'iṣẹ́ School tutor booking session',
    },
    {
      title: 'Session duration',
      value: '45 mins',
    },
    {
      title: 'Buffer duration',
      value: '15 mins',
    },
    {
      title: 'Description/Instruction',
      value: 'This is the description or instruction written by the tutor',
    },
    {
      title: 'Date range',
      value: 'Oct 8, 2023- Oct 12, 2023',
    },
  ]

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h4>Session details</h4>
        <Button type="secondary">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.2008 3.29917L15.9079 2.59207V2.59207L15.2008 3.29917ZM4.875 16.2766V17.2766C5.14022 17.2766 5.39457 17.1713 5.58211 16.9837L4.875 16.2766ZM2.25 16.2766H1.25C1.25 16.8289 1.69772 17.2766 2.25 17.2766V16.2766ZM2.25 13.5983L1.54289 12.8912C1.35536 13.0787 1.25 13.3331 1.25 13.5983H2.25ZM13.2562 4.00628C13.5979 3.66457 14.152 3.66457 14.4937 4.00628L15.9079 2.59207C14.7851 1.46931 12.9648 1.46931 11.842 2.59207L13.2562 4.00628ZM14.4937 4.00628C14.8354 4.34799 14.8354 4.90201 14.4937 5.24372L15.9079 6.65793C17.0306 5.53517 17.0306 3.71483 15.9079 2.59207L14.4937 4.00628ZM14.4937 5.24372L4.16789 15.5695L5.58211 16.9837L15.9079 6.65793L14.4937 5.24372ZM4.875 15.2766H2.25V17.2766H4.875V15.2766ZM11.842 2.59207L1.54289 12.8912L2.95711 14.3054L13.2562 4.00628L11.842 2.59207ZM1.25 13.5983V16.2766H3.25V13.5983H1.25ZM10.717 5.13128L13.3687 7.78293L14.7829 6.36872L12.1312 3.71707L10.717 5.13128Z"
              fill="#664EFE"
            />
          </svg>
          <span>Edit details</span>
        </Button>
      </div>

      <div className={classes.body}>
        {utils.map((data, key) => {
          return (
            <div key={key}>
              <h6>{data.title}</h6>
              <p>{data.value}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ScheduleSessionDetailsContainer
