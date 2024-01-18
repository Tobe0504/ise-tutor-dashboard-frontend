import React, { useState } from 'react'
import BarChart from '../../Components/BarChart/BarChart'
import classes from './OverallCourseRating.module.css'
import StarRating from '../../Components/StarRating/StarRating'
import ProgressBar from '../../Components/ProgressBar/ProgressBar'

const OverallCourseRating = () => {

  const [ratings, setRatings] = useState([
    {
      starRating: 5,
      progressPercent: 50,
    },
    {
      starRating: 4,
      progressPercent: 25,
    },
    {
      starRating: 3,
      progressPercent: 75,
    },
    {
      starRating: 2,
      progressPercent: 15,
    },
    {
      starRating: 1,
      progressPercent: 3,
    },
  ]);

  return (
    <div className={classes.container}>
      <div className={classes.listNav}>
        <h4>Overall Course Rating</h4>
        <span>This week</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 9L12 16L5 9" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinecap="round"></path></svg>
      </div>
      <div className={classes.content}>
        {/* <BarChart /> */}
        <div className={classes.contentHeader}>
          <h4>4.6</h4>
          <StarRating totalStars={5} initialRating={3} editable={false} width={25} height={25} />
          <p>Overall course ratings</p>
        </div>

        {ratings.map((data, i) => {
          return (
            <div key={data.starRating} className={classes.contentBody}>
              <StarRating totalStars={5} initialRating={data.starRating} editable={false} width={15} height={15} />
              <ProgressBar percentage={data.progressPercent} color="#fff" />
              <span>{data.progressPercent}%</span>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default OverallCourseRating
