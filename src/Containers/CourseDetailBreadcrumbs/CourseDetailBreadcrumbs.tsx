import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import breadcrumbsBack from "../../Assets/Images/breadcrumbsBack.svg";
import classes from "./CourseDetailBreadcrumbs.module.css";

const CourseDetailBreadcrumbs = () => {
  // Utils
  const breadCrumbsArrayProps = {
    image: breadcrumbsBack,
    array: [
      {
        title: "Back to students",
        route: "/student",
      },
      {
        title: "Amirah Oyegoke",
        route: "",
      },
    ],
  };
  return (
    <div className={classes.container}>
      <Breadcrumbs {...breadCrumbsArrayProps} />
    </div>
  );
};

export default CourseDetailBreadcrumbs;
