import { useState } from "react";
import SectionsNav4 from "../../Components/SectionsNav4/SectionsNav4";
import TutorProfileProfile from "../TutorProfileProfile/TutorProfileProfile";
import classes from "./StudentDetailsModules.module.css"
import StudentDetailPageDetail from "../StudentDetailPageDetail/StudentDetailPageDetail";

const StudentDetailsModules = () => {
    // States
    const [navItems, setNavItems] = useState<any[]>([
        {
            title: "Details",
            isActive: true,
            activeComponent: <StudentDetailPageDetail />,
        },
        {
            title: "Quizzes",
            isActive: false,
            activeComponent: <TutorProfileProfile />,
        },
        {
            title: "Grade",
            isActive: false,
            activeComponent: <TutorProfileProfile />,
        },
        {
            title: "Feedback",
            isActive: false,
            activeComponent: <TutorProfileProfile />,
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

export default StudentDetailsModules;
