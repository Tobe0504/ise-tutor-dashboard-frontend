import classes from "./CourseCard2.module.css";
import { useNavigate } from "react-router-dom";

type CourseCard2Props = {
  title: string;
  image: string;
  description: string;
  paid?: boolean | undefined;
  route?: string;
};

const CourseCard2 = ({
  image,
  title,
  description,
  paid,
  route,
}: CourseCard2Props) => {
  // Router
  const navigate = useNavigate();

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
          <span>{paid ? "Paid" : "Free"}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CourseCard2;
