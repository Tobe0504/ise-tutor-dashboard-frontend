import React from 'react'
import BarChart from '../../Components/BarChart/BarChart'
import classes from './OverallCourseRating.module.css'
import StarRating from '../../Components/StarRating/StarRating'

const OverallCourseRating = () => {
  return (
    <div className={classes.container}>
      <div className={classes.listNav}>
        <h4>Overall Course Rating</h4>
        <span>This week</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 9L12 16L5 9" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </div>
      <div className={classes.content}>
        {/* <BarChart /> */}
        <div className={classes.contentHeader}>
          <h2>4.6</h2>
          <StarRating totalStars={5} initialRating={3} width={50} height={50} />
          <p>Overall course ratings</p>
        </div>
      </div>
    </div>
  )
}

export default OverallCourseRating
