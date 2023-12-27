import CollaborationHubHintsAndTips from "../CollaborationHubHintsAndTips/CollaborationHubHintsAndTips";
import CollaborationHubNewToDiscord from "../CollaborationHubNewToDiscord/CollaborationHubNewToDiscord";
import CollaborationHubWhatsNext from "../CollaborationHubWhatsNext/CollaborationHubWhatsNext";
import classes from "./CollaborationHubModal.module.css";

const CollaborationHubModal = () => {
  return (
    <section className={classes.container}>
      <CollaborationHubNewToDiscord />
      <CollaborationHubHintsAndTips />
      <CollaborationHubWhatsNext />
    </section>
  );
};

export default CollaborationHubModal;
