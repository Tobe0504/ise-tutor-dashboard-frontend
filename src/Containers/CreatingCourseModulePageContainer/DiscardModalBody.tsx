import classes from "./Delete&Discard.module.css";
import Discard from "../../Assets/Images/discardModalImage.svg";
import Button from "../../Components/Button/Button";

type DiscardModalBodyProps = {
  onClick: () => void;
  onClick2: () => void;
};

const DiscardModalBody = ({
  onClick,
  onClick2
}: DiscardModalBodyProps) => {
  return (
    <div className={classes.modalContainer}>
      <img src={Discard} alt="Discard" />
      <h4>Do you want to discard the changes you made to this lesson?</h4>
      <p>Selecting  'Discard lesson' will undo recent edits and revert to the last saved version of your content.</p>
      <div className={classes.buttonContainer}>
        <Button type="secondary" onClick={onClick}>Cancel</Button>
        <Button onClick={onClick2}>Discard lesson</Button>
      </div>
    </div>
  );
};

export default DiscardModalBody;
