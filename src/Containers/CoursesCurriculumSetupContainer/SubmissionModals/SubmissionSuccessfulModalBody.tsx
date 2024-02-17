import classes from "./SubmissionModals.module.css";
import success from "../../../Assets/Gifs/success.gif";
import Button from "../../../Components/Button/Button";

type SubmissionSuccessfulModalBodyProps = {
  onClick: () => void;
};

const SubmissionSuccessfulModalBody = ({
  onClick,
}: SubmissionSuccessfulModalBodyProps) => {
  return (
    <div className={classes.modalContainer}>
      <div className={classes.modalInnerContainer}>
        <img src={success} alt="Success" />
        <h4>Submission successful!</h4>
        <p>
          Congratulations. Your course is on its way to review! Our dedicated team will thoroughly evaluate your content and provide feedback within [Estimated timeframe].
        </p>
        <Button onClick={onClick}>Done</Button>
      </div>
    </div>
  );
};

export default SubmissionSuccessfulModalBody;
