import Button from "../../../Components/Button/Button";
import Input from "../../../Components/Input/Input";
import TextArea from "../../../Components/TextArea/TextArea";
import classes from "./GradeSubmissionModal.module.css";

type GradeSubmissionModalProps = {
    onClick: () => void;
    onClick2: () => void;
};

const GradeSubmissionModal = ({ onClick, onClick2 }: GradeSubmissionModalProps) => {

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h4>Grade submission</h4>
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
                <p>Assign scores and support student improvement with clear feedback.</p>
            </div>

            <div className={classes.textareaSection}>
                <Input
                    label="Enter assignment grade *"
                    isRequired
                    placeholder="E.g 55" />
                <TextArea
                    label="Leave feedback (optional)"
                    placeholder="Help your student do better with constructive  feedback"
                />
            </div>

            <div className={classes.footer}>
                <Button onClick={onClick} type="secondary">
                    <span>Cancel</span>
                </Button>
                <Button onClick={onClick2} type="primary">
                    <span>Grade submission</span>
                </Button>
            </div>
        </div>
    );
};

export default GradeSubmissionModal;
