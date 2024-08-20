import { useContext, useState } from 'react'
import Button from '../../Components/Button/Button'
import GetStartedVideoContainer from '../GetStartedVideoContainer/GetStartedVideoContainer'
import classes from './CreateYourCurriculumContainer.module.css'
import { AppContext } from '../../Context/AppContext'
import CourseLessonsContainer from '../CourseLessonsContainer/CourseLessonsContainer'
import { useNavigate, useParams } from 'react-router-dom'

const CreateYourCurriculumContainer = () => {
  const { showGetStarted } = useContext(AppContext)

  const [showCourseLessons, setShowCourseLessons] = useState(false)

  //   Router
  const { courseId } = useParams()
  const navigate = useNavigate()

  const handleCreateOutlineClick = () => {
    navigate(`/courses/${courseId}/create-curricullum`)
  }

  return (
    <div className={classes.container}>
      <div className={classes.subHeader}>
        <div>
          <div>
            <svg
              width="26"
              height="18"
              viewBox="0 0 26 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6.33333H25M1 11.6667H25M13 6.33333V17M3.66667 17H22.3333C23.8061 17 25 15.8061 25 14.3333V3.66667C25 2.19391 23.8061 1 22.3333 1H3.66667C2.19391 1 1 2.19391 1 3.66667V14.3333C1 15.8061 2.19391 17 3.66667 17Z"
                stroke="#664EFE"
                stroke-width="2"
              />
            </svg>
          </div>
          <h3>Create your curriculum</h3>
        </div>
      </div>

      {/* If there are already modules */}
      <div className={classes.subContainer}>
        <h4>Curriculum outline</h4>
        {!showCourseLessons && (
          <>
            <p>
              Create an outline by structuring your content into weeks and
              lessons. Then, add a wide array of content to your lessons.
            </p>
            <Button onClick={handleCreateOutlineClick}>
              <span>Create outline</span>
              <svg
                width="20"
                height="10"
                viewBox="0 0 20 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 1L19 5M19 5L15 9M19 5L1 5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </>
        )}
        {showCourseLessons && <CourseLessonsContainer />}
      </div>

      <div className={classes.getStartedVideo}>
        {showGetStarted.dashboard && (
          <GetStartedVideoContainer
            title="Quick Start Guide"
            paragraph="Welcome to the course creation journey! This Quick Start Guide will walk you through the essential steps to kickstart your course outline. Let' s make your curriculum shine!"
            videoHeight="280px"
          />
        )}
      </div>
    </div>
  )
}

export default CreateYourCurriculumContainer
