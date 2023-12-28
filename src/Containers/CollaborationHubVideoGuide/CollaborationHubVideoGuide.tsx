import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import classes from "./CollaborationHubVideoGuide.module.css";
import discordVideoThumbnail from "../../Assets/Images/discordVideoThumbnail.svg";
import CollaborationHubHeader from "../../Components/CollaborationHubHeader/CollaborationHubHeader";

const CollaborationHubVideoGuide = () => {
  return (
    <div className={classes.container}>
      <CollaborationHubHeader
        header="Collaboration Hub"
        paragraph="Join the vibrant community with learners to share your insights and engage in meaningful discussions. Connect with the ise Collaboration Hub on Discord for a collaborative and supportive learning experience."
      >
        <div className={classes.videoContainer}>
          <VideoPlayer height="530px" url="/" thumbnail={discordVideoThumbnail} />
        </div>
      </CollaborationHubHeader>
    </div>
  );
};

export default CollaborationHubVideoGuide;
