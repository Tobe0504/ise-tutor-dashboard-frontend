import { Link, useNavigate } from "react-router-dom";
import classes from "./CollaborationHubWhatsNext.module.css";

const CollaborationHubWhatsNext = () => {
  const navigate = useNavigate();

  // Utils
  const whatsNext = [
    "Visit the Discord website or open the Discord app on your device.",
    'Click on the "+" icon or the "Add a Server" button on the left side of the screen.',
    'Select the "Join a Server" option.',
    "Copy the invitation code provided below",
    'Click "Join" to connect to the ise Discord channel and start collaborating with your peers.',
  ];

  return (
    <div className={classes.container}>
      <h4>You have created a Discord account, what next?</h4>
      <ol>
        {whatsNext.map((data, i) => {
          return <li key={i}>{data}</li>;
        })}
      </ol>

      <div className={classes.copyCode}>
        <span>AB7823TTBBY</span>
        <span>
          <span>Copy Code</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M6.75 14C6.3375 14 5.98438 13.8531 5.69063 13.5594C5.39688 13.2656 5.25 12.9125 5.25 12.5V3.5C5.25 3.0875 5.39688 2.73438 5.69063 2.44063C5.98438 2.14687 6.3375 2 6.75 2H13.5C13.9125 2 14.2656 2.14687 14.5594 2.44063C14.8531 2.73438 15 3.0875 15 3.5V12.5C15 12.9125 14.8531 13.2656 14.5594 13.5594C14.2656 13.8531 13.9125 14 13.5 14H6.75ZM6.75 12.5H13.5V3.5H6.75V12.5ZM3.75 17C3.3375 17 2.98438 16.8531 2.69063 16.5594C2.39687 16.2656 2.25 15.9125 2.25 15.5V5H3.75V15.5H12V17H3.75Z"
              fill="#664EFE"
            />
          </svg>
        </span>
      </div>
      <div className={classes.videoGuide}>
        <p>Having any difficulty navigating Discord?</p>
        <span
          className={classes.buttonInner}
          onClick={() => { navigate("/collaboration-hub-video-guide") }}
        >
          <span>Watch video guide</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M17.5 8L21.5 12M21.5 12L17.5 16M21.5 12L3.5 12"
              stroke="white"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CollaborationHubWhatsNext;
