import HelloUser from '../../Components/HelloUser/HelloUser'
import SchedulesModules from '../SchedulesModules/SchedulesModules'
import EmptyTabComponent from '../../Components/EmptyTabComponent/EmptyTabComponent'
import astronaut from '../../Assets/Images/astronaut-cuate.svg'
import classes from './DashboardMain.module.css'
import EngagementInsightsHub from '../EngagementInsightsHub/EngagementInsightsHub'
import StudentAssignmentSubmission from '../StudentAssignmentSubmission/StudentAssignmentSubmission'
import StudentsPerformance from '../StudentsPerformance/StudentsPerformance'
import StudentParticipationandSatisfaction from '../StudentParticipationandSatisfaction/StudentParticipationandSatisfaction'
import RightCtaContainer from '../RightCtaContainer/RightCtaContainer'
import CourseCarousel2 from '../../Components/CourseCarousel2/CourseCarousel2'
import { courses } from '../../Utilities/courses'
import GetStartedVideoContainer from '../GetStartedVideoContainer/GetStartedVideoContainer'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'

const DashboardMain = () => {
  const { showGetStarted } = useContext(AppContext)

  return (
    <div className={classes.container}>
      <HelloUser
        header="Hi Amirah, welcome"
        paragraph="We are thrilled to have you as part of our esteemed team of educators."
        notIncludePay
        notIncludeBg
      />

      <div className={classes.rightCTASection}>
        <RightCtaContainer />
      </div>

      <div>
        <EngagementInsightsHub />
      </div>

      <div className={classes.getStartedVideo}>
        {showGetStarted.dashboard && (
          <GetStartedVideoContainer
            title="Getting Started Guide"
            paragraph="Welcome to the ise platform! We're excited to have you on board and help you embark on your learning journey. Watch out tutorial guide to learn how to navigate our platform."
            videoHeight="480px" />
        )}
      </div>

      <div className={classes.carousel}>
        <CourseCarousel2
          data={courses}
          header="Assigned course(s)"
          paragraph="Here are the courses you have been assigned."
        />
      </div>

      <div>
        <EmptyTabComponent
          image={astronaut}
          imageHeight={300}
          header="No assigned course "
          firstParagraph=" We're actively working on matching you with the perfect course based on your expertise."
          secondParagraph=" You'll receive an email notification once you’re assigned a course."
          route="/"
          buttontext="Create a lesson"
          showButton={false}
        />
      </div>

      <SchedulesModules />
      <StudentsPerformance />
      <StudentAssignmentSubmission />
      <StudentParticipationandSatisfaction />
    </div>
  )
}

export default DashboardMain
