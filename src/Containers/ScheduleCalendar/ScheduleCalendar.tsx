import classes from './ScheduleCalendar.module.css'
import calendarBoard from '../../Assets/Images/ScheduleCalendar.png'
import calender from '../../Assets/Images/calendar.svg'
import Button from '../../Components/Button/Button'

const ScheduleCalendar = () => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <img src={calender} alt="Add new meeting" />
                <h4>Calendar</h4>
                <Button
                    type='primary'
                    onClick={() => { }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4V20M20 12L4 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>New meeting</span>
                </Button>
            </div>
            <div className={classes.body}>
                <img src={calendarBoard} alt='' />
            </div>
        </div>
    )
}

export default ScheduleCalendar