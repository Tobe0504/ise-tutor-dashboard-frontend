import ActionsModal from "../../Components/ScheduleCard/ActionsModal/ActionsModal";
import ScheduleCalendar from "../ScheduleCalendar/ScheduleCalendar";
import SchedulesSessionModules2 from "../SchedulesSessionModules2/SchedulesSessionModules2";
import classes from "./SchedulePageContainer.module.css";

const SchedulePageContainer = () => {
    return (
        <>
            <ActionsModal />
            <section className={classes.container}>
                <SchedulesSessionModules2 />
                <ScheduleCalendar />
            </section>

        </>
    );
};

export default SchedulePageContainer;
