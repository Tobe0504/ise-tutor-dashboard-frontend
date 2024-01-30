import { useContext } from "react";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import { AppContext } from "../../Context/AppContext";
import classes from "./GetStartedVideoContainer.module.css";

type GetStartedVideoContainerProps = {
  videoHeight: string;
  title: string;
  paragraph: string;
};

const GetStartedVideoContainer = ({
  videoHeight,
  title,
  paragraph,
}: GetStartedVideoContainerProps) => {
  // Context
  const { screenWidthState, setShowGetStarted } = useContext(AppContext);

  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <div>
          <h4>{title}</h4>
          <p>{paragraph}</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            onClick={() => {
              setShowGetStarted({
                rightCta: true,
                dashboard: false,
                showModdal: false,
              });
            }}
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="#2E2E2E"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={classes.videoSection}>
        <VideoPlayer
          height={screenWidthState > 1023 ? videoHeight : "206px"}
          url=""
        />
      </div>
    </section >
  );
};

export default GetStartedVideoContainer;
