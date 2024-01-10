import { useState } from "react";
import EmptyTabComponent from "../../Components/EmptyTabComponent/EmptyTabComponent";
import SectionsNav from "../../Components/SectionsNav/SectionsNav";
import classes from "./DashboardModules.module.css";
import noOvervue from "../../Assets/Images/noOvervue.svg";
import LiveClassSessions from "../LiveClassSessions/LiveClassSessions";
import OneOnOneCallSessions from "../OneOnOneCallSessions/OneOnOneCallSessions";


const DashboardModules = () => {
  // States
  const [navItems, setNavItems] = useState<any[]>([
    {
      title: "Live class Sessions",
      isActive: true,
      activeComponent: <LiveClassSessions />,
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
      title: "On-on-one call sessions",
      isActive: false,
      activeComponent: <OneOnOneCallSessions />,
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

export default DashboardModules;
