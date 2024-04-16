import CollaborationHubHeader from "../../Components/CollaborationHubHeader/CollaborationHubHeader";
import CollaborationHubHintsAndTips from "../CollaborationHubHintsAndTips/CollaborationHubHintsAndTips";
import CollaborationHubNewToDiscord from "../CollaborationHubNewToDiscord/CollaborationHubNewToDiscord";
import CollaborationHubWhatsNext from "../CollaborationHubWhatsNext/CollaborationHubWhatsNext";
import classes from "./CollaborationHub.module.css";

const CollaborationHub = () => {
  return (
    <section className={classes.container}>
      <CollaborationHubHeader
        header="Collaboration Hub"
        paragraph="Join the  discord discussion forum"
      >
        <div className={classes.bodyContainer}>
          <CollaborationHubNewToDiscord />
          <CollaborationHubHintsAndTips />
          <CollaborationHubWhatsNext />
        </div>
      </CollaborationHubHeader>
    </section>
  );
};

export default CollaborationHub;
