import React from 'react'
import BarChart from '../../Components/BarChart/BarChart'
import classes from './StudentEngagement.module.css'
import barchart from '../../Assets/Images/barchart.png'

const StudentEngagement = () => {
  return (
    <div className={classes.container}>
      <div className={classes.listNav}>
        <h4>Student Engagement</h4>
        <span>Weekly</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 9L12 16L5 9" stroke="#2E2E2E" strokeWidth="2" stroke-linecap="round"></path></svg>
      </div>
      <div className={classes.content}>
        {/* <BarChart /> */}
        <img src={barchart} alt="barchart" />
      </div>
    </div>
  )
}

export default StudentEngagement
