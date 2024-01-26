import Button from "../../../Components/Button/Button";
import classes from "./ApproveSubmissionModal.module.css";

type ApproveSubmissionModalProps = {
    title: string
    onClick: () => void;
    onClick2: () => void;
};

const ApproveSubmissionModal = ({ title, onClick, onClick2 }: ApproveSubmissionModalProps) => {

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h4>{title}</h4>
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

            <div className={classes.note}>
                <p>Before grading the assignment, please confirm that it meets the required criteria. Once the assignment is approved, the student can’t make another submission.</p>
                <p>An email can be sent to the student if there’s additional feedback or comments about their submission.</p>
            </div>

            <div className={classes.footer}>
                <Button onClick={onClick} type="secondary">
                    <span>Back to assignment</span>
                </Button>
                <Button onClick={onClick2} type="primary">
                    <span>Continue to grade</span>
                </Button>
            </div>
        </div>
    );
};

export default ApproveSubmissionModal;
