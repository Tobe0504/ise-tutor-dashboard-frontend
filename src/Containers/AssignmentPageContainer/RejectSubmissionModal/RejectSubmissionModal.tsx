import Button from "../../../Components/Button/Button";
import TextArea from "../../../Components/TextArea/TextArea";
import classes from "./RejectSubmissionModal.module.css";

type RejectSubmissionModalProps = {
    onClick: () => void;
    onClick2: () => void;
};

const RejectSubmissionModal = ({ onClick, onClick2 }: RejectSubmissionModalProps) => {

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h4>Send a message </h4>
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
                <p>Please provide reasons for rejecting submission and request a revision. The student will be notified of a revision request and can then improve and resubmit the assignment.</p>
            </div>

            <div className={classes.textareaSection}>
                <TextArea
                    label="Leave  feedback * "
                    placeholder="Help your student  make better submissions"
                />
            </div>

            <div className={classes.footer}>
                <Button onClick={onClick}>
                    <span>Close</span>
                </Button>
                <Button onClick={onClick2}>
                    <span>Request revision</span>
                </Button>
            </div>
        </div>
    );
};

export default RejectSubmissionModal;
