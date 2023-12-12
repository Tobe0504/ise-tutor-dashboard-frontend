import ProfileProfile from "../ProfileProfile/ProfileProfile";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <section className={classes.container}>
      <div className={classes.sectionsNavSection}>
      </div>
      <div className={classes.body}><ProfileProfile /></div>
    </section>
  );
};

export default Profile;
