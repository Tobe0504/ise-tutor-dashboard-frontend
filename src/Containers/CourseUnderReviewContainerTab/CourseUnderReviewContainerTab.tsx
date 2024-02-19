import { useState } from "react";
import SectionsNav4 from "../../Components/SectionsNav4/SectionsNav4";
import classes from "./CourseUnderReviewContainerTab.module.css"
import StudentDetailQuizDataTable from "../StudentDetailQuizDataTable/StudentDetailQuizDataTable";
import StudentDetailGradeDataTable from "../StudentDetailGradeDataTable/StudentDetailGradeDataTable";
import StudentDetailFeedBackDataTable from "../StudentDetailFeedBackDataTable/StudentDetailFeedBackDataTable";

const CourseUnderReviewContainerTab = () => {
    // States
    const [navItems, setNavItems] = useState<any[]>([
        {
            title: "All module",
            isActive: true,
            activeComponent: <StudentDetailQuizDataTable />,
        },
        {
            title: "Published module",
            isActive: false,
            activeComponent: <StudentDetailGradeDataTable />,
        },
        {
            title: "Declined module",
            isActive: false,
            activeComponent: <StudentDetailFeedBackDataTable />,
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
