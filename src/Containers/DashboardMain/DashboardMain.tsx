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


const DashboardMain = () => {
  const { showGetStarted } = useContext(AppContext);

  return (
    <section className={classes.container}>
      {showGetStarted.showModdal && (
        <AcceptedModal
          body={
            <GetStartedVideoContainer
              style={{ padding: "1.5rem" }}
              videoHeight="380px"
              title="" description=""
            />
          }
        />
      )}

      <HelloUser notIncludePay notIncludeBg />

      <div>
        <EngagementInsightsHub />
      </div>

      <div className={classes.mobileGetStartedVideo}>
        {showGetStarted.dashboard && (
          <GetStartedVideoContainer style={{ background: "#fff" }} title="Getting Started Guide" description="Welcome to the ise platform! We're excited to have you on board and help you embark on your learning journey. Watch out tutorial guide to learn how to navigate our platform." videoHeight="480px" />
        )}
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
    </section>
  );
};

export default DashboardMain;
