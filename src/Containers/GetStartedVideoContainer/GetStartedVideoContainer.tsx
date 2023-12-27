import { CSSProperties, useContext } from "react";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import { AppContext } from "../../Context/AppContext";
import classes from "./GetStartedVideoContainer.module.css";

type GetStartedVideoContainerProps = {
  style?: CSSProperties;
  videoHeight: string;
  description: string;
  title: string;
};

const GetStartedVideoContainer = ({
  style,
  videoHeight,
  description,
  title,
}: GetStartedVideoContainerProps) => {
  // Context
  const { screenWidthState, setShowGetStarted } = useContext(AppContext);

  return (
    <section className={classes.container} style={style}>
      <div className={classes.header}>
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
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
              strokeLinecap="round"
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
