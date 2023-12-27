import Calender from "../../Components/Calender/Calender";
import DashboardModules from "../DashboardModules/DashboardModules";
import classes from "./Schedules.module.css";

const Schedules = () => {
  const badges = [
    {
      name: "Verified Profile",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M9.50012 12.0006L11.5001 14.0006L15.5001 10.0006M8.33486 4.69766C9.05239 4.6404 9.73358 4.35824 10.2814 3.89136C11.5599 2.80184 13.4403 2.80184 14.7188 3.89136C15.2667 4.35824 15.9478 4.6404 16.6654 4.69766C18.3398 4.83128 19.6695 6.16092 19.8031 7.83535C19.8603 8.55288 20.1425 9.23407 20.6094 9.78193C21.6989 11.0604 21.6989 12.9408 20.6094 14.2193C20.1425 14.7672 19.8603 15.4483 19.8031 16.1659C19.6695 17.8403 18.3398 19.1699 16.6654 19.3036C15.9479 19.3608 15.2667 19.643 14.7188 20.1099C13.4403 21.1994 11.5599 21.1994 10.2814 20.1099C9.73358 19.643 9.05239 19.3608 8.33486 19.3036C6.66043 19.1699 5.33079 17.8403 5.19717 16.1659C5.13991 15.4483 4.85775 14.7672 4.39087 14.2193C3.30135 12.9408 3.30135 11.0604 4.39087 9.78193C4.85775 9.23407 5.13991 8.55288 5.19717 7.83535C5.33079 6.16092 6.66043 4.83128 8.33486 4.69766Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      description: "Your ise profile is complete",
    },

    {
      name: "Newbie",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <g clipPath="url(#clip0_8361_13784)">
            <path
              d="M11.549 2.92664C11.8483 2.00537 13.1517 2.00538 13.451 2.92664L14.9699 7.60055C15.1038 8.01254 15.4877 8.29148 15.9209 8.29149L20.8354 8.29168C21.8041 8.29172 22.2068 9.53127 21.4232 10.1007L17.4474 12.9895C17.0969 13.2441 16.9503 13.6955 17.0841 14.1075L18.6026 18.7815C18.9019 19.7028 17.8475 20.4689 17.0638 19.8995L13.0878 17.011C12.7373 16.7564 12.2627 16.7564 11.9122 17.011L7.93622 19.8995C7.15252 20.4689 6.0981 19.7028 6.3974 18.7815L7.91589 14.1075C8.04974 13.6955 7.90309 13.2441 7.55263 12.9895L3.57683 10.1007C2.79317 9.53127 3.19592 8.29172 4.16461 8.29168L9.07911 8.29149C9.51231 8.29148 9.89623 8.01254 10.0301 7.60055L11.549 2.92664Z"
              stroke="white"
              strokeWidth="2"
            />
          </g>
          <defs>
            <clipPath id="clip0_8361_13784">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      description: "You joined ise as a learner",
    },
  ];
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <div>
          <h4>Schedules</h4>
        </div>
      </div>


      <div className={classes.badgeSection}>
        <Calender />
        <DashboardModules />
      </div>
    </section>
  );
};

export default Schedules;
