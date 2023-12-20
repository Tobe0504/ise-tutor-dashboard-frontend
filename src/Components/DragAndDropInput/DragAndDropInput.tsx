import classes from "./DragAndDropInput.module.css";

const DragAndDropInput = () => {
  return (
    <div>
      <label>Attach file </label>
      <div className={classes.dropContainer}>
        <span>Drag and drop file to attach it or</span>
        <span>browse for a file...</span>
      </div>
    </div>
  );
};

export default DragAndDropInput;
