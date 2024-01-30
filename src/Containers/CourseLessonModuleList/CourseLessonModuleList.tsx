import { Dispatch, SetStateAction } from "react";
import { activeToggler } from "../../HelperFunctions/activeTogglers";
import classes from "./CourseLessonModuleList.module.css";

type CourseLessonModuleListProps = {
  modules: any[];
  setModules: Dispatch<SetStateAction<any[]>>;
};

const CourseLessonModuleList = ({
  modules,
  setModules,
}: CourseLessonModuleListProps) => {
  return (
    <section className={classes.container}>
      <div className={classes.innerContainer}>
        {modules.map((data, i) => {
          return (
            <div
              className={`${classes.module} ${data.active ? classes.active : undefined
                }`}
              key={i}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onClick={() => {
                  activeToggler(i, modules, setModules);
                }}
              >
                <path
                  d="M19 9L12 16L5 9"
                  stroke="#2E2E2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className={classes.moduleTitleContainer}>
                <p
                  onClick={() => {
                    activeToggler(i, modules, setModules);
                  }}
                >
                  <span>Module {i + 1}: </span>
                  {data.title}
                </p>
                <div className={classes.moduleTitleCourseContent}>
                  <div>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="15.5" stroke="black" />
                      <path d="M13 21.1932V10.8086L21.1538 16.0009L13 21.1932ZM14 19.3509L19.2885 16.0009L14 12.6509V19.3509Z" fill="black" />
                    </svg>
                    <p>{ } Videos</p>
                  </div>
                </div>
              </div>
              <div
                className={classes.weekContainer}
                style={
                  data.isActive ? { maxHeight: "1300px" } : { maxHeight: "0px" }
                }
              >
                {data.weeks.map((datum: any, j: number) => {
                  return (
                    <div key={j} className={classes.week}>
                      <p>
                        Week {j + 1}: {datum.title}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.99984 10V11.3333M3.99984 14H11.9998C12.7362 14 13.3332 13.403 13.3332 12.6667V8.66667C13.3332 7.93029 12.7362 7.33333 11.9998 7.33333H3.99984C3.26346 7.33333 2.6665 7.93029 2.6665 8.66667V12.6667C2.6665 13.403 3.26346 14 3.99984 14ZM10.6665 7.33333V4.66667C10.6665 3.19391 9.4726 2 7.99984 2C6.52708 2 5.33317 3.19391 5.33317 4.66667V7.33333H10.6665Z"
                          stroke="#737373"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CourseLessonModuleList;
