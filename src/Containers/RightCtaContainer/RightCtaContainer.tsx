import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
// import GetStartedRightCta from "../GetStartedRightCta/GetStartedRightCta";
// import KeepPushingRightCta from "../KeepPushingRightCta/KeepPushingRightCta";
// import ProfileProgressRightCta from "../ProfileProgressRightCta/ProfileProgressRightCta";
// import ReferAFriendRightCta from "../ReferAFriendRightCta/ReferAFriendRightCta";
// import ScheduleRightCta from "../ScheduleRightCta/ScheduleRightCta";
import classes from "./RightCtaContainer.module.css";

const RightCtaContainer = () => {
  // Context
  const { showGetStarted } = useContext(AppContext);
  return (
    <section className={classes.container}>
      {/* <ProfileProgressRightCta />
      <KeepPushingRightCta />
      {showGetStarted.rightCta && <GetStartedRightCta />}
      <ScheduleRightCta />
      <ReferAFriendRightCta /> */}
    </section>
  );
};

export default RightCtaContainer;
