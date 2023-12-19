import ProfileAccountCloseAccount from "../ProfileAccountCloseAccount/ProfileAccountCloseAccount";
import ProfileAccountManageAccounts from "../ProfileAccountManageAccounts/ProfileAccountManageAccounts";
import ProfileAccountManageEmail from "../ProfileAccountManageEmail/ProfileAccountManageEmail";
import ProfileAccountNotifications from "../ProfileAccountNotifications/ProfileAccountNotifications";
import classes from "../ProfileProfile/ProfileProfile.module.css";

const ProfileAccountSettings = () => {
  return (
    <section className={classes.container}>
      <ProfileAccountManageAccounts />
      <ProfileAccountManageEmail />
      <ProfileAccountNotifications />
      <ProfileAccountCloseAccount />
    </section>
  );
};

export default ProfileAccountSettings;
