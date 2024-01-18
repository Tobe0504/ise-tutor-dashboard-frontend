import classes from "./EngagementInsightsHub.module.css"
import InsightTab from '../../Components/InsightTab/InsightTab'

const EngagementInsightsHub = () => {
    return (
        <section className={classes.container}>
            <div>
                <InsightTab totalNumber={7} title="Total course assigned" />
                <InsightTab totalNumber={0} title="Published course(s)" />
                <InsightTab totalNumber={0} title="Upcoming sessions" />
            </div>
        </section>
    )
}

export default EngagementInsightsHub
