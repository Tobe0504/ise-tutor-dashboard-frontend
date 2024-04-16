import classes from "./CollaborationHubNewToDiscord.module.css";
import discordLogo from "../../Assets/Images/discordLogo.svg";

const CollaborationHubNewToDiscord = () => {
  return (
    <div className={classes.container}>
      <h4>New to Discord?</h4>
      <p>
        Are you new to discord, no need to worry. Sign up for an account{" "}
        <a href="https://discord.com/" target="_blank" rel="noreferrer">
          here
        </a>{" "}
        and discover a seamless platform for team collaboration.{" "}
      </p>

      <img src={discordLogo} alt="Discord" />
    </div>
  );
};

export default CollaborationHubNewToDiscord;
