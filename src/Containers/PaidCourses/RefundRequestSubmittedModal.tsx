import classes from "./PaidCourses.module.css";
import success from "../../Assets/Gifs/success.gif";
import Button from "../../Components/Button/Button";

type RefundRequestSubmittedModalProps = {
  onClick: () => void;
};

const RefundRequestSubmittedModal = ({
  onClick,
}: RefundRequestSubmittedModalProps) => {
  return (
    <div className={classes.modalContainer}>
      <div className={classes.modalInner2}>
        <img src={success} alt="Email sent" />
        <h4>Refund request received</h4>
        <p>
          Your refund request is in progress. We appreciate your patience and
          will get back to you within 48 hours.{" "}
        </p>
        <Button onClick={onClick}>Close</Button>
      </div>
    </div>
  );
};

export default RefundRequestSubmittedModal;
