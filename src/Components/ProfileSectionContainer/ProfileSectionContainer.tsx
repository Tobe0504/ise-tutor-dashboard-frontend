import React from "react";
import classes from "./ProfileSectionContainer.module.css";

type ProfileSectionContainerProps = {
  children: React.ReactNode;
  header?: string;
  paragraph?: string;
};

const ProfileSectionContainer = ({
  children,
  header,
  paragraph,
}: ProfileSectionContainerProps) => {
  return (
    <section className={classes.container}>
      <div>
        <h4>{header}</h4>
        <p>{paragraph}</p>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default ProfileSectionContainer;
