import Calender from "../../Components/Calender/Calender";
import DashboardModules from "../DashboardModules/DashboardModules";
import classes from "./Schedules.module.css";

const Schedules = () => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <div>
          <h4>Schedules</h4>
        </div>
      </div>


      <div className={classes.schedules}>
        <Calender />
        <DashboardModules />
      </div>
    </section>
  );
};

export default Schedules;
