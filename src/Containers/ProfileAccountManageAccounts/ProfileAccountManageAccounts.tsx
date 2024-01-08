import { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import ProfileSectionContainer from "../../Components/ProfileSectionContainer/ProfileSectionContainer";
import classes from "./ProfileAccountManageAccounts.module.css";

const ProfileAccountManageAccounts = () => {
  // States
  const [displayInput, setDiplayInput] = useState(false);

  return (
    <div className={classes.container}>
      <ProfileSectionContainer
        header="Manage password"
        paragraph="Keep your account secure. Update your password here."
      >
        <Input
          label="Current password"
          type="password"
          placeholder="Enter current password"
        />

        {!displayInput && (
          <Button
            type="null"
            onClick={() => {
              setDiplayInput(true);
            }}
          >
            Change password
          </Button>
        )}
        {displayInput && (
          <>
            <Input
              label="New password"
              type="password"
              placeholder="Enter new password "
              tip="Must be at least 8 characters"
            />
            <Input
              label="Confirm new password"
              type="password"
              placeholder="Enter new password "
              tip="Must match the new password"
            />
            <div className={classes.buttonSection}>
              <Button
                type="secondary"
                onClick={() => {
                  setDiplayInput(false);
                }}
              >
                Cancel
              </Button>
              <Button>Save new password</Button>
            </div>
          </>
        )}
      </ProfileSectionContainer>
    </div>
  );
};

export default ProfileAccountManageAccounts;
