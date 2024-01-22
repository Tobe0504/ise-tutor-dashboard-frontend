import React from "react";
import classes from './CollaborationHubHeader.module.css'
import { useNavigate } from "react-router-dom";

type CollaborationHubHeaderProps = {
  children: React.ReactNode;
  header?: string;
  paragraph?: string;
};

const CollaborationHubHeader = ({
  children,
  header,
  paragraph,
}: CollaborationHubHeaderProps) => {
  const navigate = useNavigate();

  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <div>
          <h4>{header}</h4>
          <p>{paragraph}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          onClick={() => { navigate("/dashboard") }}
        >
          <path
            d="M5 15L15 5M5 5L15 15"
            stroke="#2E2E2E"
            strokeWidth="2"
            stroke-linecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {children}
    </section>
  );
};

export default CollaborationHubHeader