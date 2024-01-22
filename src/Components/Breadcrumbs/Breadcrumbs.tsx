import { Link, useLocation } from "react-router-dom";
import classes from "./Breadcrumbs.module.css";

export type BreadcrumbsProps = {
  image?: string;
  array: {
    title: string;
    route: string;
  }[];
};

const Breadcrumbs = ({ image, array }: BreadcrumbsProps) => {
  // Navigation
  const location = useLocation();

  return (
    <div className={classes.container}>
      {image && <img src={image} alt={array[0].title} />}
      {array.map((data) => {
        return (
          <Link
            to={data.route}
            className={`${classes.link} ${location.pathname === data.route
                ? classes.active
                : classes.inActive
              }`}
            key={data.title}
          >
            <span>{data.title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13 5L20 12L13 19M5 5L12 12L5 19"
                stroke="#737373"
                strokeWidth="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
