import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import GetStartedRightCta from "../GetStartedRightCta/GetStartedRightCta";
import CollaborationHubRightCta from "../CollaborationHubRightCta/CollaborationHubRightCta";
import HelpAndSupportRightCta from "../HelpAndSupportRightCta/HelpAndSupportRightCta";
import GetStartedVideoContainer from "../GetStartedVideoContainer/GetStartedVideoContainer";
import classes from "./RightCtaContainer.module.css";

const RightCtaContainer = () => {
  // Context
  const { showGetStarted } = useContext(AppContext);
  return (
    <section className={classes.container}>
      <GetStartedVideoContainer title="Getting Started" description="Watch the tour video to learn how to navigate your dashboard." videoHeight="122px" />
      <CollaborationHubRightCta />
      {showGetStarted.rightCta && <GetStartedRightCta />}
      <HelpAndSupportRightCta />
    </section>
  );
};

export default RightCtaContainer;
