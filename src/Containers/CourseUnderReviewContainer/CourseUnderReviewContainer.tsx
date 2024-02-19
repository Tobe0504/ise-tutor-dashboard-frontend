import React from 'react'
import classes from './CourseUnderReviewContainer.module.css'
import { useParams } from 'react-router-dom';

const CourseUnderReviewContainer = () => {

  const { courseReview } = useParams();

  return (
    <div>
            <h2>Course Review: </h2>
            {/* Other components using courseReview */}
        </div>
  )
}

export default CourseUnderReviewContainer