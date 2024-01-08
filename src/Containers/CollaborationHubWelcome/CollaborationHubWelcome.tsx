import Button from "../../Components/Button/Button";
import classes from "./CollaborationHubWelcome.module.css";

const CollaborationHubWelcome = () => {
  return (
    <div className={classes.container}>
      <h4>Welcome to the Collaboration Hub!</h4>
      <p>
        Join the vibrant community of learners, share your insights, and engage
        in meaningful discussions. Join the ise Collaboration Hub on Discord and
        experience the power of teamwork and support.
      </p>
      <Button type="tertiary">Join your team here</Button>
    </div>
  );
};

export default CollaborationHubWelcome;
