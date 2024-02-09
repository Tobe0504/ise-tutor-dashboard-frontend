import React, { useState } from "react";
import classes from "./DragAndDropInput.module.css";

type DragAndDropInputProps = {
  errorMessage?: string;
  acceptedFileTypes?: string;
};

const DragAndDropInput = ({
  errorMessage,
  acceptedFileTypes,
}: DragAndDropInputProps) => {
  const [invalid, setInvalid] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length === 0) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  };

  return (
    <div className={classes.container}>
      <label>Attach file </label>
      <div
        className={`${classes.dropContainer} ${invalid ? classes.invalid : ""}`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <span>Drag and drop file to attach it</span>
        <span>or</span>
        <label htmlFor="browseFile">
          <span>Browse for a file...</span>
          <input
            type="file"
            name="browse-file"
            id="browseFile"
            accept={acceptedFileTypes}
          />
        </label>
      </div>
      {invalid && (
        <span className={classes.errorMessage}>
        </span>
      )}
    </div>
  );
};

export default DragAndDropInput;