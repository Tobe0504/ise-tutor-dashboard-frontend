import HelloUser from "../../Components/HelloUser/HelloUser";
import Schedules from "../Schedules/Schedules";
import EmptyTabComponent from "../../Components/EmptyTabComponent/EmptyTabComponent";
import astronaut from "../../Assets/Images/astronaut-cuate.svg";
import classes from "./StudentMain.module.css";
import EngagementInsightsHub from "../EngagementInsightsHub/EngagementInsightsHub";
import StudentAssignmentSubmission from "../StudentAssignmentSubmission/StudentAssignmentSubmission";
import StudentsPerformance from "../StudentsPerformance/StudentsPerformance";
import StudentParticipationandSatisfaction from "../StudentParticipationandSatisfaction/StudentParticipationandSatisfaction";
import RightCtaContainer from "../RightCtaContainer/RightCtaContainer";


const StudentMain = () => {

  return (
    <div className={classes.container}>

      <HelloUser header="Students" paragraph="Review student details, enrollments, grades, and likes here." notIncludePay notIncludeBg />
      
      <div>
        <div className={classes.inputSection}>
          <input type="text" placeholder="Search by name or email" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="#2E2E2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

      </div>
      <div>
        <EngagementInsightsHub />
      </div>

      <div>
        <EmptyTabComponent
          image={astronaut}
          firstParagraph="Currently, your dashboard is empty, and it's time to take the first step"
          secondParagraph="in creating a valuable learning experience for your students."
          route="/"
          buttontext="Create a lesson"
        />
      </div>

      <Schedules />
      <StudentsPerformance />
      <StudentAssignmentSubmission />
      <StudentParticipationandSatisfaction />
    </div>
  );
};

export default StudentMain;
