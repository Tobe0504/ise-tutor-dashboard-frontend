import { useState } from "react";
import SectionsNav4 from "../../Components/SectionsNav4/SectionsNav4";
import classes from "./CourseUnderReviewContainerTab.module.css"
import AllModules from "./AllModules/AllModules";
import PublishedModules from "./PublishedModules/PublishedModules";
import DeclinedModules from "./DeclinedModules/DeclinedModules";


const CourseUnderReviewContainerTab = () => {
    // States
    const [navItems, setNavItems] = useState<any[]>([
        {
            title: "All module",
            isActive: true,
            activeComponent: <AllModules />,
        },
        {
            title: "Published module",
            isActive: false,
            activeComponent: <PublishedModules />,
        },
        {
            title: "Declined module",
            isActive: false,
            activeComponent: <DeclinedModules />,
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

export default CourseUnderReviewContainerTab;
