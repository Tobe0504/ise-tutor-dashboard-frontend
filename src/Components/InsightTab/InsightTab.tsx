import classes from './InsightTab.module.css';

type InsightTabProps = {
    totalNumber: number;
    title: string;
}
const InsightTab = ({ totalNumber, title }: InsightTabProps) => {
    return (
        <div className={classes.container}>
            <div className={classes.number}>{totalNumber}</div>
            <div className={classes.title}>{title}</div>
        </div>
    );
};

export default InsightTab;
