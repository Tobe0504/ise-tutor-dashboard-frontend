import Button from "../../Components/Button/Button";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import classes from "./ProfileProgressRightCta.module.css";

const ProfileProgressRightCta = () => {
  return (
    <div className={classes.container}>
      <h4>Complete your profile</h4>
      <p>
        Elevate your tutoring journey. Complete your profile on your dashboard today.
      </p>
      <ProgressBar percentage={50} color="#fff" />
      <Button type="tertiary">Complete profile</Button>
    </div>
  );
};

export default ProfileProgressRightCta;
