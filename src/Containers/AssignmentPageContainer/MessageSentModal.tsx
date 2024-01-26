import classes from "../PaidCourses/PaidCourses.module.css";
import Button from "../../Components/Button/Button";
import success from "../../Assets/Images/CheckCircleIcon.png";

type MessageSentModalProps = {
  onClick: () => void;
};

const MessageSentModal = ({ onClick }: MessageSentModalProps) => {
  return (
    <div className={classes.modalContainer}>
      <div className={classes.modalInner2}>
        <img src={success} alt="Message sent" />
        <h4>Done!</h4>
        <p>Your message was successfully sent.</p>
        <Button onClick={onClick} type="secondary">Close</Button>
      </div>
    </div>
  );
};

export default MessageSentModal;
