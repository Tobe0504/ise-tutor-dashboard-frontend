import { useState } from "react";
import EmptyTabComponent from "../../Components/EmptyTabComponent/EmptyTabComponent";
import classes from "./SchedulesSessionModules2.module.css";
import noOvervue from "../../Assets/Images/noOvervue.svg";
import LiveClassSessions from "../LiveClassSessions/LiveClassSessions";
import OneOnOneCallSessions from "../OneOnOneCallSessions/OneOnOneCallSessions";
import SectionsNav2 from "../../Components/SectionsNav2/Sectionsnav2";


const SchedulesSessionModules2 = () => {
    // States
    const [navItems, setNavItems] = useState<any[]>([
        {
            title: "All",
            isActive: true,
            activeComponent: (<>
                <LiveClassSessions />
                <OneOnOneCallSessions />
            </>),
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
            title: "Live Sessions",
            isActive: false,
            activeComponent: <LiveClassSessions height="" padding="" />,
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
            title: "1-on-1 sessions",
            isActive: false,
            activeComponent: <OneOnOneCallSessions height="" padding="" />,
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
            <h2>Schedule</h2>
            <SectionsNav2 navItems={navItems} setNavItems={setNavItems} />
            <div>
                {activeCOmponent.activeComponent
                    ? activeCOmponent.activeComponent
                    : activeCOmponent.activeNullStateComponent}
            </div>
        </div>
    );
};

export default SchedulesSessionModules2;
