import { useState } from "react";
import EmptyTabComponent from "../../Components/EmptyTabComponent/EmptyTabComponent";
import SectionsNav from "../../Components/SectionsNav/SectionsNav";
import classes from "./DashboardModules.module.css";
import noOvervue from "../../Assets/Images/noOvervue.svg";


const DashboardModules = () => {
  // States
  const [navItems, setNavItems] = useState<any[]>([
    {
      title: "Live class Sessions",
      isActive: true,
      activeComponent: null,
      activeNullStateComponent: (
        <EmptyTabComponent
          image={noOvervue}
          firstParagraph="You have no schedule at the moment."
          secondParagraph=""
          route="/courses"
          buttontext="Explore classes"
        />
      ),
    },
    {
      title: "On-on-one call sessions",
      isActive: false,
      activeComponent: null,
      activeNullStateComponent: (
        <EmptyTabComponent
          image={noOvervue}
          firstParagraph="You have no schedule at the moment."
          secondParagraph=""
          route="/schedule"
          buttontext="Schedule Appointment"
        />
      ),
    },
  ]);

  const activeCOmponent = navItems.find((data) => {
    return data.isActive;
  });
  return (
    <section className={classes.container}>
      <SectionsNav navItems={navItems} setNavItems={setNavItems} />
      <div>
        {activeCOmponent.activeComponent
          ? activeCOmponent.activeComponent
          : activeCOmponent.activeNullStateComponent}
      </div>
    </section>
  );
};

export default DashboardModules;
