import React, { useContext } from "react";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import breadcrumbsBack from "../../Assets/Images/breadcrumbsBack.svg";
import classes from "./CourseDetailBreadcrumbs.module.css";
import { AppContext } from "../../Context/AppContext";

const CourseDetailBreadcrumbs = () => {
  const { students } = useContext(AppContext);

  const activeStudents = students.filter((student) => student.isActive);

  const breadCrumbsArrayProps = {
    image: breadcrumbsBack,
    array: [
      {
        title: "Back to students",
        route: "/student",
      },
    ],
  };

  const studentBreadcrumbs = activeStudents.map((student) => ({
    title: student.studentName,
    route: `/student/details/${student.studentName
      .replaceAll(' ', '-')
      .toLowerCase()}`,
  }));

  breadCrumbsArrayProps.array = [...breadCrumbsArrayProps.array, ...studentBreadcrumbs];

  return (
    <div className={classes.container}>
      <Breadcrumbs {...breadCrumbsArrayProps} />
    </div>
  );
};

export default CourseDetailBreadcrumbs;
