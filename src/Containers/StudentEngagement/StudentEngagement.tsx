import React from 'react'
import classes from './StudentEngagement.module.css'
import BarchartAlt from '../../Components/BarchartAlt/BarchartAlt'

const StudentEngagement = () => {
  // Utils
  const data = [
    {
      name: 'Mon',
      amt: 2400,
    },
    {
      name: 'Tue',
      amt: 2210,
    },
    {
      name: 'Wed',
      amt: 2290,
    },
    {
      name: 'Thur',
      amt: 2000,
    },

    {
      name: 'Fri',
      amt: 2500,
    },
    {
      name: 'Sat',
      amt: 2100,
    },
    {
      name: 'Sun',
      amt: 2100,
    },
  ]
  return (
    <div className={classes.container}>
      <div className={classes.listNav}>
        <h4>Student Engagement</h4>
        <span>Weekly</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 9L12 16L5 9"
            stroke="#2E2E2E"
            strokeWidth="2"
            stroke-linecap="round"
          ></path>
        </svg>
      </div>
      <div className={classes.content}>
        <BarchartAlt data={data} />
      </div>
    </div>
  )
}

export default StudentEngagement
