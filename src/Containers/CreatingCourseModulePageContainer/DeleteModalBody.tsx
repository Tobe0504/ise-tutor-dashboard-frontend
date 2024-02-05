import classes from "./Delete&Discard.module.css";
import Delete from "../../Assets/Images/deleteModalImage.svg";
import Button from "../../Components/Button/Button";

type DeleteModalBodyProps = {
  onClick: () => void;
  onClick2: () => void;
};

const DeleteModalBody = ({
  onClick,
  onClick2
}: DeleteModalBodyProps) => {
  return (
    <div className={classes.modalContainer}>
      <img src={Delete} alt="Delete" />
      <h4>Are you sure you want to delete [First presentation]?</h4>
      <p>This lesson will be deleted permanently</p>
      <div className={classes.buttonContainer}>
        <Button type="secondary" onClick={onClick}>No, keep lesson</Button>
        <Button onClick={onClick2}>Yes, delete lesson</Button>
      </div>
    </div>
  );
};

export default DeleteModalBody;
