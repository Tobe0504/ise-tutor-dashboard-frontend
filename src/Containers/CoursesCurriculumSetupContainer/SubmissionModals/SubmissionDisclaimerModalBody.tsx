import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import classes from "./SubmissionModals.module.css";

type SubmissionDisclaimerModalBodyProps = {
  onClick: () => void;
  onClick2: () => void;
};

const SubmissionDisclaimerModalBody = ({
  onClick,
  onClick2,
}: SubmissionDisclaimerModalBodyProps) => {
  const navigate = useNavigate();
  return (
    <section className={classes.modalContainer}>
      <div>
        <h4>Are you sure you want to submit your course for review?</h4>
        <p>
          Ensure you read the submission guide. You can only make edits once an administrator provides feedback.
        </p>
      </div>

      <div className={classes.modalContent}>
        <p>Course title</p>
        <span>Project Management [Cohort1]</span>
      </div>

      <div className={classes.modalContent}>
        <p>Module submitted</p>
        <p>10 modules</p>
      </div>

      <div className={classes.modalButtonSection}>
        <Button type="secondary" onClick={onClick}>
          Cancel
        </Button>
        <Button type="secondary" onClick={() => navigate('/courses/courses-curriculum/submission-guide')}>
          Read submission guide
        </Button>
        <Button type="primary" onClick={onClick2}>
          Confirm submission
        </Button>
      </div>
    </section>
  );
};

export default SubmissionDisclaimerModalBody;
