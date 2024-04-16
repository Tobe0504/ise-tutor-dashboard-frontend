import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Error from "../../Components/Error/Error";
import Input from "../../Components/Input/Input";
import AcceptedModal from "../../Components/Modals/AcceptedModal/AcceptedModal";
import ProfileSectionContainer from "../../Components/ProfileSectionContainer/ProfileSectionContainer";
import classes from "../ProfileAccountManageAccounts/ProfileAccountManageAccounts.module.css";
import ChangeEmailComformedModalBody from "./ChangeEmailComformedModalBody";
import ChangeEmailModalWarning from "./ChangeEmailModalWarning";

const ProfileAccountManageEmail = () => {
  // States
  const [displayInput, setDisplayInput] = useState(false);
  const [displayWarningModal, setDisplayWarningModal] = useState(false);
  const [displayEmailChangeConfirmModal, setDisplayEmailChangeConfirmModal] =
    useState(false);

  return (
    <ProfileSectionContainer
      header="Manage email"
      paragraph="Update to an active email. We'll send you updates here."
    >
      <div className={classes.container}>
        {displayWarningModal && (
          <AcceptedModal
            onClick={() => {
              setDisplayWarningModal(false);
            }}
            body={
              <ChangeEmailModalWarning
                onClick={() => {
                  setDisplayWarningModal(false);
                }}
                onClick2={() => {
                  setDisplayWarningModal(false);
                  setDisplayEmailChangeConfirmModal(true);
                }}
              />
            }
          />
        )}
        {displayEmailChangeConfirmModal && (
          <AcceptedModal
            onClick={() => {
              setDisplayEmailChangeConfirmModal(false);
            }}
            body={
              <ChangeEmailComformedModalBody
                onClick={() => {
                  setDisplayEmailChangeConfirmModal(false);
                }}
              />
            }
          />
        )}
        <div className="error">
          <Error type="error">
            You can only change your email once in six months
          </Error>
        </div>
        <Input
          type="email"
          label="Account email"
          placeholder="oyegokeamirah@gmail.com"
        />

        {!displayInput && (
          <Button
            type="null"
            onClick={() => {
              setDisplayInput(true);
            }}
          >
            Change email
          </Button>
        )}

        {displayInput && (
          <>
            <Input
              type="password"
              label="Enter your password"
              placeholder="Enter your current iṣẹ́ EdTech password"
            />

            <Input
              type="email"
              label="Enter new account email"
              placeholder="name@gmail.com"
            />

            <p className={classes.infoTip}>
              <Link to="">Forgot Password?</Link>
            </p>
            <Input
              type="email"
              label="Confirm new account email"
              placeholder="name@gmail.com"
            />

            <div className={classes.buttonSection}>
              <Button
                type="secondary"
                onClick={() => {
                  setDisplayInput(false);
                }}
              >
                Cancel update
              </Button>
              <Button
                onClick={() => {
                  setDisplayWarningModal(true);
                }}
              >
                Continue updates
              </Button>
            </div>
          </>
        )}
      </div>
    </ProfileSectionContainer>
  );
};

export default ProfileAccountManageEmail;
