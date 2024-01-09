import OverallCourseRating from "../OverallCourseRating/OverallCourseRating";
import StudentEngagement from "../StudentEngagement/StudentEngagement";
import classes from "./StudentParticipationandSatisfaction.module.css";

const StudentParticipationandSatisfaction = () => {
  return (
    <section className={classes.container}>
      <div className={classes.subContainer}>
        <StudentEngagement />
        <OverallCourseRating />
      </div>
    </section>
  );
};

export default StudentParticipationandSatisfaction;