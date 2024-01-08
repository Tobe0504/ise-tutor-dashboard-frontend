import classes from "./ProfileAccountCloseAccount.module.css";
import success from "../../Assets/Gifs/success.gif";
import Button from "../../Components/Button/Button";

type DeleteDisclaimerModalBodyProps = {
  onClick: () => void;
};

const DeleteSuccessfulModalBody = ({
  onClick,
}: DeleteDisclaimerModalBodyProps) => {
  return (
    <div className={classes.modalContainer}>
      <div className={classes.modalInnerContainer2}>
        <img src={success} alt="Success" />
        <h4>Account closed successfully</h4>
        <p>
          Your account has been successfully closed. We appreciate your time
          with us and wish you all the best in your future endeavors.
        </p>
        <Button onClick={onClick}>Return to homepage</Button>
      </div>
    </div>
  );
};

export default DeleteSuccessfulModalBody;
