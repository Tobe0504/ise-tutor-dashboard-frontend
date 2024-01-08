import classes from "./ProfileProfile.module.css";
import ProfileProfileAbout from "../ProfileProfileAbout/ProfileProfileAbout";
import ProfileProfileAdditionalDetails from "../ProfileProfileAdditionalDetails/ProfileProfileAdditionalDetails";

const ProfileProfile = () => {
  return (
    <section className={classes.container}>
      <ProfileProfileAbout />
      <ProfileProfileAdditionalDetails />
    </section>
  );
};

export default ProfileProfile;
