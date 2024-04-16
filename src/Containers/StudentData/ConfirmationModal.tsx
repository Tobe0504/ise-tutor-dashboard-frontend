import Button from "../../Components/Button/Button";
import success from "../../Assets/Gifs/success.gif";
import classes from "../PaidCourses/PaidCourses.module.css";

type ConfirmationModalProps = {
  onClick: () => void;
};

const ConfirmationModal = ({ onClick }: ConfirmationModalProps) => {
  return (
    <div className={classes.modalContainer}>
      <div className={classes.modalInner2}>
        <img src={success} alt="Email sent" />
        <h4>Message sent successfully!</h4>
        <p>
          Your message has been successfully sent to the selected student(s).
        </p>
        <Button onClick={onClick}>Close</Button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
