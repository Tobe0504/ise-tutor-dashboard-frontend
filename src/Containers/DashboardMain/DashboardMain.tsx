import { useContext } from "react";
import HelloUser from "../../Components/HelloUser/HelloUser";
import AcceptedModal from "../../Components/Modals/AcceptedModal/AcceptedModal";
import { AppContext } from "../../Context/AppContext";
import Schedules from "../Schedules/Schedules";
import GetStartedVideoContainer from "../GetStartedVideoContainer/GetStartedVideoContainer";
import EmptyTabComponent from "../../Components/EmptyTabComponent/EmptyTabComponent";
import astronaut from "../../Assets/Images/astronaut-cuate.svg";
import classes from "./DashboardMain.module.css";
import EngagementInsightsHub from "../EngagementInsightsHub/EngagementInsightsHub";
import StudentAssignmentSubmission from "../StudentAssignmentSubmission/StudentAssignmentSubmission";


const DashboardMain = () => {
  const { showGetStarted } = useContext(AppContext);

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
      <StudentAssignmentSubmission />
    </section>
  );
};

export default DashboardMain;
