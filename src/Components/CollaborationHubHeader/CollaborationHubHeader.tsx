import React from "react";
import classes from './CollaborationHubHeader.module.css'

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
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <div>
          <h4>{header}</h4>
          <p>{paragraph}</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5 15L15 5M5 5L15 15"
              stroke="#2E2E2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default CollaborationHubHeader