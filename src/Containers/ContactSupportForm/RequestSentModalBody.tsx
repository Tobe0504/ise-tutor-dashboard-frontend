import classes from "../PaidCourses/PaidCourses.module.css";
import Button from "../../Components/Button/Button";
import success from "../../Assets/Gifs/success.gif";

type RequestSentModalBodyProps = {
  onClick: () => void;
};

const RequestSentModalBody = ({ onClick }: RequestSentModalBodyProps) => {
  return (
    <div className={classes.modalContainer}>
      <div className={classes.modalInner2}>
        <img src={success} alt="Email sent" />
        <h4>Request received</h4>
        <p>
          Thank you for contacting support! Our team is actively working on your
          request. You can expect a reply within 48 hours.
        </p>
        <Button onClick={onClick}>Close</Button>
      </div>
    </div>
  );
};

export default RequestSentModalBody;
