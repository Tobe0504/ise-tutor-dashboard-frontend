import Calender from "../../Components/Calender/Calender";
import SchedulesSessionModules2 from "../SchedulesSessionModules2/SchedulesSessionModules2";
import classes from "./SchedulePageContainer.module.css";

const SchedulePageContainer = () => {
    return (
        <>
            <section className={classes.container}>
                <SchedulesSessionModules2 />
                <Calender />
            </section>

        </>
    );
};

export default SchedulePageContainer;
