import Button from "../../../Components/Button/Button";
import classes from "./AssignmentSummaryModal.module.css";

type AssignmentSummaryModalProps = {
    onClick: () => void;
};

const AssignmentSummaryModal = ({ onClick }: AssignmentSummaryModalProps) => {

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h4>Assignment summary</h4>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    onClick={onClick}
                >
                    <path
                        d="M12 36L36 12M12 12L36 36"
                        stroke="#2E2E2E"
                        strokeWidth="2"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <div className={classes.detailContent}>
                <div className={classes.detailHeader}>
                    <span>Student name</span>
                    <span>Lesson tile</span>
                    <span>Module title</span>
                    <span>Submission date</span>
                    <span>Submitted file</span>
                    <span>Submission status</span>
                    <span>Grade status</span>
                    <span>Grade score</span>
                    <span>Message</span>
                    <span>Feedback</span>
                </div>
                <div className={classes.detailBody}>
                    <span>John Smith</span>
                    <span>Module assessment 1.0</span>
                    <span>Module 1: Introduction to UI </span>
                    <span>12 Oct, 2023 at 3:30pm</span>
                    <span>hhttps://app.slack.com/client/</span>
                    <span>Approved</span>
                    <span>Grade</span>
                    <span>44</span>
                    <span>Nil</span>
                    <span>Great effort on this assignment, [Student's Name]! Your analysis demonstrates a solid understanding of the topic. But consider adding more real-world examples to strengthen your arguments. Keep up the excellent work!</span>
                </div>
            </div>

            <div className={classes.footer}>
                <Button onClick={onClick} type="primary">
                    <span>Done</span>
                </Button>
            </div>
        </div>
    );
};

export default AssignmentSummaryModal;