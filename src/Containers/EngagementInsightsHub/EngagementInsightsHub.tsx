import classes from "./EngagementInsightsHub.module.css"
import InsightTab from '../../Components/InsightTab/InsightTab'

const EngagementInsightsHub = () => {
    return (
        <section className={classes.container}>
            <div>
                <InsightTab totalNumber={42} title="Active Students" />
                <InsightTab totalNumber={0} title="Rejected lessons" />
                <InsightTab totalNumber={0} title="Active feedback" />
            </div>
        </section>
    )
}

export default EngagementInsightsHub
