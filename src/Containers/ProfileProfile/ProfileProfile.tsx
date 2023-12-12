import ProfileProfileAbout from "../ProfileProfileAbout/ProfileProfileAbout";
import ProfileProfileAdditionalDetails from "../ProfileProfileAdditionalDetails/ProfileProfileAdditionalDetails";
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
