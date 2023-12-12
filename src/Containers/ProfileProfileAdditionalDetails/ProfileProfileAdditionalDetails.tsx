import { TextArea, Input } from "../../Components";
import classes from "./ProfileProfileAdditionalDetails.module.css";

const ProfileProfileAdditionalDetails = () => {
  return (
    <div className={classes.container}>
      <div>
        <Input
          label="Linkedin profile"
          placeholder="E.g: https://www.linkedin.com/in/johndoe "
          isRequired
        />
        <p className={classes.infoTip}>
          Copy and paste your Linkedin URL
        </p>
      </div>

      <TextArea label="Bio" placeholder="Tell us more about yourself, and your achievements " isRequired />
    </div>
  );
};

export default ProfileProfileAdditionalDetails;
