import Button from "../../../../Components/Button/Button";
import success from "../../../../Assets/Gifs/success.gif";
import classes from "../../../PaidCourses/PaidCourses.module.css"

type SubmissionSuccessfulModalProps = {
    onClick: () => void;
};

const SubmissionSuccessfulModal = ({ onClick }: SubmissionSuccessfulModalProps) => {
    return (
        <div className={classes.modalContainer}>
            <div className={classes.modalInner2}>
                <img src={success} alt="Email sent" />
                <h4>Submission successful!</h4>
                <p>Your edits have been submitted successfully for review. Thank you for your dedication to creating quality content.</p>
                <Button onClick={onClick}>Back to Dashboard</Button>
            </div>
        </div>
    )
}

export default SubmissionSuccessfulModal
