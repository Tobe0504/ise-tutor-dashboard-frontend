import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import classes from "./CollaborationHubVideoGuide.module.css";
import discordVideoThumbnail from "../../Assets/Images/discordVideoThumbnail.svg";

const CollaborationHubVideoGuide = () => {
  return (
    <div className={classes.container}>
      <h4>Need a video guide?</h4>
      <p>
        Watch the video below to learn how to navigate to our Discord Server.
      </p>

      <div className={classes.videoContainer}>
        <VideoPlayer height="530px" url="/" thumbnail={discordVideoThumbnail} />
      </div>
    </div>
  );
};

export default CollaborationHubVideoGuide;
