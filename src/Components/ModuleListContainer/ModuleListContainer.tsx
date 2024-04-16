import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import classes from "./ModuleListContainer.module.css";

type ModuleListContainerProps = {
  modules: {
    title: string;
    time: string;
    date: string;
  }[];
};

const ModuleListContainer = ({ modules }: ModuleListContainerProps) => {
  const { screenWidthState } = useContext(AppContext);

  return (
    <div className={classes.container}>
      {modules.map((data, i) => {
        return (
          <div className={classes.module} key={i}>
            <div>
              <p>
                {screenWidthState > 1023
                  ? data.title
                  : `${data.title.slice(0, 35)}...`}
              </p>
              <p>{data.time}</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M10.4998 11.3333H13.8332L12.8965 10.3967C12.6425 10.1427 12.4998 9.79819 12.4998 9.43897V7.33334C12.4998 5.59171 11.3868 4.11006 9.83317 3.56094V3.33333C9.83317 2.59695 9.23622 2 8.49984 2C7.76346 2 7.1665 2.59695 7.1665 3.33333V3.56094C5.61291 4.11006 4.49984 5.59171 4.49984 7.33334V9.43897C4.49984 9.79819 4.35714 10.1427 4.10313 10.3967L3.1665 11.3333H6.49984M10.4998 11.3333V12C10.4998 13.1046 9.60441 14 8.49984 14C7.39527 14 6.49984 13.1046 6.49984 12V11.3333M10.4998 11.3333H6.49984"
                  stroke="#2E2E2E"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{data.date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ModuleListContainer;
