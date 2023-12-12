import { ProfileProfileAbout, ProfileProfileAdditionalDetails } from "../../Containers";
import classes from "./ProfileProfile.module.css";

const ProfileProfile = () => {
  return (
    <section className={classes.container}>
      <ProfileProfileAbout />
      <ProfileProfileAdditionalDetails />
    </section>
  );
};

export default ProfileProfile;
