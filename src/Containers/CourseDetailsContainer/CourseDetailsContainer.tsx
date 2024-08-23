import classes from './CourseDetailsContainer.module.css'
import frontendbyfemiadelana from '../../Assets/Images/frontendbyfemiadelana.png'
import { useContext } from 'react'
import { AuthUserContext } from '../../Context/AuthUserContext'
import { capitalize } from '../../HelperFunctions/capitalize'

type CourseDetailsContainerTypes = {
  courseData: any
}

const CourseDetailsContainer = ({
  courseData,
}: CourseDetailsContainerTypes) => {
  // Context
  const { getUserRequestObject } = useContext(AuthUserContext)

  const courseDetails = [
    {
      courseName: 'Frontend Development',
      instructorName: 'Femi Adelana',
      courseDescription: `You have filIgnite your business potential with our 
                resources at ise School of Business. Gain the 
                knowledge and skills to thrive in the dynamic world of 
                commerce. Lead and achieve greatness with essential 
                business skills.led in the answer for this form`,
      courseImage: frontendbyfemiadelana,
    },
  ]
  return (
    <div className={classes.container}>
      <div className={classes.subHeader}>
        <div>
          <div>
            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.049 1.92664C14.3483 1.00538 15.6517 1.00537 15.951 1.92664L18.368 9.36437C18.5019 9.77636 18.8858 10.0553 19.319 10.0553L27.1396 10.0556C28.1083 10.0556 28.5111 11.2952 27.7274 11.8646L21.4006 16.4617C21.0501 16.7163 20.9035 17.1676 21.0373 17.5796L23.4537 25.0176C23.753 25.9388 22.6986 26.7049 21.9149 26.1356L15.5878 21.539C15.2373 21.2844 14.7627 21.2844 14.4122 21.539L8.08508 26.1356C7.30138 26.7049 6.24696 25.9388 6.54626 25.0176L8.96267 17.5796C9.09652 17.1676 8.94988 16.7163 8.59942 16.4617L2.27261 11.8646C1.48894 11.2952 1.8917 10.0556 2.86038 10.0556L10.681 10.0553C11.1142 10.0553 11.4981 9.77636 11.632 9.36437L14.049 1.92664Z"
                stroke="#664EFE"
                stroke-width="2"
              />
            </svg>
          </div>
          <h3>Course details</h3>
        </div>
      </div>
      {courseDetails.map((data, i) => {
        return (
          <div key={i} className={classes.subContainer}>
            <div>
              <span>Course Name</span>
              <p>{courseData?.name}</p>
            </div>
            <div>
              <span>Instructor Name</span>
              <p>
                {capitalize(getUserRequestObject?.data?.first_name)}{' '}
                {capitalize(getUserRequestObject?.data?.last_name)}
              </p>
            </div>
            <div>
              <span>Course Description</span>
              <p>{courseData?.description}</p>
            </div>
            <div>
              <span>Course Image</span>
              <img src={courseData?.cover_image} alt={data.courseName} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CourseDetailsContainer
