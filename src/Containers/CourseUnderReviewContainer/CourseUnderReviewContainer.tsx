import React, { useContext } from 'react';
import classes from './CourseUnderReviewContainer.module.css';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import HelloUser from '../../Components/HelloUser/HelloUser';
import CourseUnderReviewContainerTab from '../CourseUnderReviewContainerTab/CourseUnderReviewContainerTab';

const CourseUnderReviewContainer = () => {
  // Context
  const { courses } = useContext(AppContext);

  // Router
  const { courseReviewId } = useParams();

  const activeCourseReview = courses.find((data) => {
    return data.id === courseReviewId;
  });

  return (
    <div className={classes.container}>
      <HelloUser
        header={activeCourseReview?.courseTitle}
        paragraph=""
        notIncludePay
        notIncludeBg
      />

      <div className={classes.scrollContainer}>
        <div className={classes.insight}>
          <div>
            <p>Uploaded Modules</p>
            <h2>{activeCourseReview?.uploadedModules}</h2>
          </div>
          <div>
            <p>Approved Modules</p>
            <h2>{activeCourseReview?.approvedModules}</h2>
          </div>
          <div>
            <p>Declined Modules</p>
            <h2>{activeCourseReview?.declinedModules}</h2>
          </div>
        </div>
      </div>

      <CourseUnderReviewContainerTab />
    </div>
  );
};

export default CourseUnderReviewContainer;
