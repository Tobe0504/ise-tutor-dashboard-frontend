import { useState } from "react";
import EmptyTabComponent from "../../Components/EmptyTabComponent/EmptyTabComponent";
import SectionsNav from "../../Components/SectionsNav/SectionsNav";
import classes from "./SchedulesSessionModules.module.css";
import noOvervue from "../../Assets/Images/noOvervue.svg";
import LiveClassSessions from "../LiveClassSessions/LiveClassSessions";
import OneOnOneCallSessions from "../OneOnOneCallSessions/OneOnOneCallSessions";


const SchedulesSessionModules = () => {
  // States
  const [navItems, setNavItems] = useState<any[]>([
    {
      title: "Live class Sessions",
      isActive: true,
      activeComponent: <LiveClassSessions height="250px" padding="1rem 1.5rem" />,
      activeNullStateComponent: (
        <EmptyTabComponent
          image={noOvervue}
          firstParagraph="You have no schedule at the moment."
          secondParagraph=""
          route="/courses"
          buttontext="Explore classes"
          showButton={false}
        />
      ),
    },
    {
      title: "One-on-one call sessions",
      isActive: false,
      activeComponent: <OneOnOneCallSessions height="250px" padding="1rem 1.5rem" />,
      activeNullStateComponent: (
        <EmptyTabComponent
          image={noOvervue}
          firstParagraph="You have no schedule at the moment."
          secondParagraph=""
          route="/schedule"
          buttontext="Schedule Appointment"
          showButton={false}
        />
      ),
    },
  ]);

  const activeCOmponent = navItems.find((data) => {
    return data.isActive;
  });
  return (
    <div className={classes.container}>
      <SectionsNav navItems={navItems} setNavItems={setNavItems} />
      <div>
        {activeCOmponent.activeComponent
          ? activeCOmponent.activeComponent
          : activeCOmponent.activeNullStateComponent}
      </div>
    </div>
  );
};

export default SchedulesSessionModules;
