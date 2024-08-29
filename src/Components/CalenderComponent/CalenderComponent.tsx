import React, { useEffect, useState } from 'react'
import { availabilityType } from '../../Utilities/types'
import classes from './CalendarComponent.module.css'

type CalendarComponentType = {
  tasks?: availabilityType
}

const CalendarComponent = ({ tasks }: CalendarComponentType) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    return new Date(year, month, 1).getDay()
  }

  //   States
  const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth(currentDate))

  const firstDayOfMonth = getFirstDayOfMonth(currentDate)

  //   Effects
  useEffect(() => {
    setDaysInMonth(getDaysInMonth(currentDate))
  }, [firstDayOfMonth])

  const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const daysTest = []

  const days = []
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className={classes.emptyDay} />)
    console.log(weekDays[i % 7])
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(
      <div key={i} className={classes.day} onClick={() => {}}>
        <span>{i}</span>
        <p>3</p>
      </div>
    )
  }

  for (let i = 0; i <= daysInMonth + firstDayOfMonth - 1; i++) {
    if (i < firstDayOfMonth) {
      daysTest.push({
        dayOfWeek: weekDays[i % 7],
        isActive: false,
        dayNumber: null,
        date: null,
        schedules: null,
      })
    } else {
      daysTest.push({
        dayOfWeek: weekDays[i % 7],
        isActive: true,
        dayNumber: i + 1 - firstDayOfMonth,
        date: `${String(i + 1 - firstDayOfMonth).padStart(2, '0')}-${String(
          currentDate.getMonth() + 1
        ).padStart(2, '0')}-${String(currentDate.getFullYear())}`,
      })
    }
  }

  const newDaysOfWeek = daysTest.map((data) => {
    const newDays = tasks?.map((task) => {
      if (task.day.toLowerCase() === data.dayOfWeek.toLowerCase()) {
        return { ...data, schedules: task.availableTimes?.length }
      } else {
        return { ...data, schedules: 0 }
      }
    })
    return newDays
  })

  // console.log(daysTest)

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    )
  }

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    )
  }

  console.log(newDaysOfWeek, 'new days')

  return (
    <div className={classes.calender}>
      <div className={classes.calendarHeader}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={prevMonth}
        >
          <path
            d="M15 19L8 12L15 5"
            stroke="#2E2E2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>
          <h2>{monthNames[currentDate.getMonth()]}</h2>
          <h2>{currentDate.getFullYear()}</h2>
        </div>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={nextMonth}
        >
          <path
            d="M9 5L16 12L9 19"
            stroke="#2E2E2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={classes.calendarGrid}>
        <div className={classes.dayHeader}>Sun</div>
        <div className={classes.dayHeader}>Mon</div>
        <div className={classes.dayHeader}>Tue</div>
        <div className={classes.dayHeader}>Wed</div>
        <div className={classes.dayHeader}>Thu</div>
        <div className={classes.dayHeader}>Fri</div>
        <div className={classes.dayHeader}>Sat</div>
        {/* {days} */}

        {daysTest.map((data, i) => {
          if (!data.isActive) {
            return <div key={`empty-${i}`} className={classes.emptyDay} />
          } else {
            return (
              <div key={i} className={classes.day} onClick={() => {}}>
                <span>{data.dayNumber}</span>
                <p>3</p>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default CalendarComponent
