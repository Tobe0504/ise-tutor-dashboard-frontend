import Calender from "../../Components/Calender/Calender";
import SchedulesSessionModules from "../SchedulesSessionModules/SchedulesSessionModules";
import classes from "./SchedulesModules.module.css";

const SchedulesModules = () => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <div>
          <h4>Schedules</h4>
        </div>
      </div>


      <div className={classes.schedules}>
        <Calender />
        <SchedulesSessionModules />
      </div>
    </section>
  );
};

export default SchedulesModules;
