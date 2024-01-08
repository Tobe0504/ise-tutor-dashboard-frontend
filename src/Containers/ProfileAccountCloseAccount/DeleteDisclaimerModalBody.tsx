import Button from "../../Components/Button/Button";
import TextArea from "../../Components/TextArea/TextArea";
import classes from "./ProfileAccountCloseAccount.module.css";

type DeleteDisclaimerModalBodyProps = {
  onClick: () => void;
  onClick2: () => void;
};

const DeleteDisclaimerModalBody = ({
  onClick,
  onClick2,
}: DeleteDisclaimerModalBodyProps) => {
  return (
    <section className={classes.modalContainer}>
      <div className={classes.modalInnerContainer}>
        <h4>Are you sure you want to close your account?</h4>
        <p>
          Closing your account is irreversible and will result in the permanent
          deletion of all your data, including your profile, saved preferences,
          and any associated content.
        </p>
        <TextArea
          label="Reason (optional)"
          placeholder="Kindly let us know why you want to close your account"
        />

        <div className={classes.modalButtonSection}>
          <Button type="secondary" onClick={onClick}>
            Cancel
          </Button>
          <Button type="delete" onClick={onClick2}>
            Deactivate account
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeleteDisclaimerModalBody;
