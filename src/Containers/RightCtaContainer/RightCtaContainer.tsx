import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import GetStartedRightCta from "../GetStartedRightCta/GetStartedRightCta";
import CollaborationHubRightCta from "../CollaborationHubRightCta/CollaborationHubRightCta";
import HelpAndSupportRightCta from "../HelpAndSupportRightCta/HelpAndSupportRightCta";
import classes from "./RightCtaContainer.module.css";
import ProfileProgressRightCta from "../ProfileProgressRightCta/ProfileProgressRightCta";

const RightCtaContainer = () => {
  // Context
  const { showGetStarted } = useContext(AppContext);
  return (
    <section className={classes.container}>
      <ProfileProgressRightCta />
      {showGetStarted.rightCta && <GetStartedRightCta />}
      <CollaborationHubRightCta />
      <HelpAndSupportRightCta />
    </section>
  );
};

export default RightCtaContainer;
