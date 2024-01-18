import { useRef } from "react";
import classes from "./CourseCarousel2.module.css";
import assignCourseImage from "../../Assets/Images/assignCourseImage.svg";
import CourseCard2 from "../CourseCard2/CourseCard2";
import Button from "../Button/Button";

type CoursesCarousel2Props2 = {
  header: string;
  paragraph?: string;
  data: any[];
};

const CourseCarousel2 = ({ header, paragraph, data }: CoursesCarousel2Props2) => {
  // Refs
  const carouselRef = useRef<HTMLDivElement>(null);

  // Utils
  const scrollToNextDivItem = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollAmount = container.offsetWidth;
      container.scrollLeft += scrollAmount;
    }
  };

  const scrollToPrevDivItem = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollAmount = container.offsetWidth;
      container.scrollLeft -= scrollAmount;
    }
  };

  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <div>
          <h2>{header}</h2>
          <p>{paragraph}</p>
        </div>
        <div>
          <span onClick={scrollToPrevDivItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 19L8 12L15 5"
                stroke="#A79AFE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span onClick={scrollToNextDivItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="#A79AFE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className={classes.courseSection} ref={carouselRef}>
        {data.map((data, i) => {
          return (
            <div key={i}>
              <CourseCard2
                title={data.title}
                image={assignCourseImage}
                description={data.description}
                status={data.paid}
              />
            </div>
          );
        })}
      </div>
      <div className={classes.footer}>
        <Button type="secondary">See course details</Button>
        <Button type="primary">Create curriculum</Button>
      </div>
    </section>
  );
};

export default CourseCarousel2;
