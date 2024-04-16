import React, { useContext } from "react";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import breadcrumbsBack from "../../Assets/Images/breadcrumbsBack.svg";
import classes from "./StudentDetailBreadcrumbs.module.css";
import { AppContext } from "../../Context/AppContext";
import { useParams } from "react-router-dom";

const StudentDetailBreadcrumbs = () => {
  // Context
  const { students } = useContext(AppContext)

  // Router
  const { studentId } = useParams()

  const activeStudent = students.find((data) => {
    return data.studentName.replace(' ', '-').toLowerCase() === studentId
  })

  const breadCrumbs = {
    image: breadcrumbsBack,
    array: [
      {
        title: "Back to students",
        route: "/student",
      },
      {
        title: `${activeStudent?.studentName}`,
        route: `/student/details/${activeStudent?.studentName.replace(' ', '-').toLowerCase()}`,
      },
    ],
  };

  return (
    <div className={classes.container}>
      <Breadcrumbs {...breadCrumbs} />
    </div>
  );
};

export default StudentDetailBreadcrumbs;
