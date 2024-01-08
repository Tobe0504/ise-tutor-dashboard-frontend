import classes from "../ProfileAccountCloseAccount/ProfileAccountCloseAccount.module.css";
import emailChange from "../../Assets/Images/emailChange.svg";
import Button from "../../Components/Button/Button";

type ChangeEmailComformedModalBodyProps = {
  onClick: () => void;
};

const ChangeEmailComformedModalBody = ({
  onClick,
}: ChangeEmailComformedModalBodyProps) => {
  return (
    <div className={classes.modalContainer}>
      <div className={classes.modalInnerContainer2}>
        <img src={emailChange} alt="Success" />
        <h4> Email change confirmation</h4>
        <p>
          Your email address has been successfully updated. Please log back in
          using your new email address (name@gmail.com)
        </p>
        <Button onClick={onClick}>Close</Button>
      </div>
    </div>
  );
};

export default ChangeEmailComformedModalBody;
