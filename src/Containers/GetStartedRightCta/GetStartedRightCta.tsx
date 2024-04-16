import { useContext } from "react";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import { AppContext } from "../../Context/AppContext";
import classes from "./GetStartedRightCta.module.css";

const GetStartedRightCta = () => {
  // Context
  const { setShowGetStarted } = useContext(AppContext);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h4>Get started.</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          onClick={() => {
            setShowGetStarted((prevState) => {
              return { ...prevState, rightCta: false };
            });
          }}
        >
          <path
            d="M5 15L15 5M5 5L15 15"
            stroke="#fff"
            strokeWidth="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className={classes.body}
        onClick={() => {
          setShowGetStarted((prevState) => {
            return { ...prevState, showModal: true };
          });
        }}
      >
        <p>Watch the tour video to learn how to navigate your dashboard.</p>
        <VideoPlayer height="122px" url="/" />
      </div>
    </div>
  );
};

export default GetStartedRightCta;
