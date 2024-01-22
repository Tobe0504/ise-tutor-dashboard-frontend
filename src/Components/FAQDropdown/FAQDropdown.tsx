import { useState } from "react";
import classes from "./FAQDropdown.module.css";

type FAQDropdownProps = {
  question: string;
  answer: string;
};

const FAQDropdown = ({ question, answer }: FAQDropdownProps) => {
  // States
  const [displayDropdown, setDisplayDropdown] = useState(false);
  return (
    <div className={classes.container}>
      <div
        className={classes.label}
        onClick={() => {
          setDisplayDropdown((prevState) => {
            return !prevState;
          });
        }}
      >
        <p>{question}</p>
        {displayDropdown ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 12H6"
              stroke="#737373"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M9 1.67969V17.6797M17 9.67969L1 9.67969"
              stroke="#737373"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <div
        style={displayDropdown ? { maxHeight: "300px" } : { maxHeight: "0px" }}
        className={classes.dropdown}
      >
        <div className={classes.dropdownInner}>{answer}</div>
      </div>
    </div>
  );
};

export default FAQDropdown;
