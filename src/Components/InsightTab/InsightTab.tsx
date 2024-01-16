import classes from './InsightTab.module.css';

type InsightTabProps = {
    totalNumber: number;
    title: string;
}
const InsightTab = ({ totalNumber, title }: InsightTabProps) => {
    return (
        <div className={classes.container}>
            <p className={classes.number}>{totalNumber}</p>
            <h3 className={classes.title}>{title}</h3>
        </div>
    );
};

export default InsightTab;
