import classes from "./CourseCard2.module.css";
import { useNavigate } from "react-router-dom";

type CourseCard2Props = {
  title: string;
  image: string;
  description: string;
  status: "Published" | "Draft" | "Paid" | "Pending";
  route?: string;
};

const CourseCard2 = ({
  image,
  title,
  description,
  status,
  route,
}: CourseCard2Props) => {
  // Router
  const navigate = useNavigate();

  const statusClassName = {
    Published: classes.purple,
    Draft: classes.yellow,
    Paid: classes.yellow,
    Pending: classes.cyan,
  };

  const statusClass = statusClassName[status] || "";

  return (
    <div
      className={classes.container}
      onClick={() => {
        navigate(route as string);
      }}
    >
      <img src={image} alt={title} />
      <div className={classes.textSection}>
        <div className={classes.upperSection}>
          <p>{title}</p>
          <span className={statusClass}>{status}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CourseCard2;
