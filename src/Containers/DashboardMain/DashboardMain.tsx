import HelloUser from "../../Components/HelloUser/HelloUser";
import Schedules from "../Schedules/Schedules";
import EmptyTabComponent from "../../Components/EmptyTabComponent/EmptyTabComponent";
import astronaut from "../../Assets/Images/astronaut-cuate.svg";
import classes from "./DashboardMain.module.css";
import EngagementInsightsHub from "../EngagementInsightsHub/EngagementInsightsHub";
import StudentAssignmentSubmission from "../StudentAssignmentSubmission/StudentAssignmentSubmission";
import StudentsPerformance from "../StudentsPerformance/StudentsPerformance";
import StudentParticipationandSatisfaction from "../StudentParticipationandSatisfaction/StudentParticipationandSatisfaction";


const DashboardMain = () => {

  return (
    <section className={classes.container}>

      <HelloUser notIncludePay notIncludeBg />

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
    </section>
  );
};

export default DashboardMain;
