import { useState } from "react";
import SectionsNav4 from "../../Components/SectionsNav4/SectionsNav4";
import TutorProfileProfile from "../TutorProfileProfile/TutorProfileProfile";
import classes from "./TutorProfile.module.css";

const TutorProfile = () => {
  // States
  const [navItems, setNavItems] = useState<any[]>([
    {
      title: "Profile",
      isActive: true,
      activeComponent: <TutorProfileProfile />,
    },
    {
      title: "Account setting",
      isActive: false,
      activeComponent: null,
    },
  ]);

  //   Utils
  const activeComponent = navItems.find((data) => data.isActive);
  return (
    <section className={classes.container}>
      <div className={classes.sectionsNavSection}>
        <SectionsNav4 navItems={navItems} setNavItems={setNavItems} />
      </div>
      <div className={classes.body}>{activeComponent.activeComponent}</div>
    </section>
  );
};

export default TutorProfile;
