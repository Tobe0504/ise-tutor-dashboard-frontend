import classes from "./DragAndDropInput.module.css";

const DragAndDropInput = () => {
  return (
    <div className={classes.container}>
      <label>Attach file </label>
      <div className={classes.dropContainer}>
        <span>Drag and drop file to attach it</span>
        <span>or</span>
        <label htmlFor="browseFile">
          <span>browse for a file...</span>
          <input type="file" name="browse-file" id="browseFile" />
        </label>
      </div>
    </div>
  );
};

export default DragAndDropInput;
