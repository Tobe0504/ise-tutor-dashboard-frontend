import { useState } from "react";
import Button from "../../Components/Button/Button";
import AcceptedModal from "../../Components/Modals/AcceptedModal/AcceptedModal";
import ProfileSectionContainer from "../../Components/ProfileSectionContainer/ProfileSectionContainer";
import DeleteDisclaimerModalBody from "./DeleteDisclaimerModalBody";
import DeleteSuccessfulModalBody from "./DeleteSuccessfulModalBody";
import classes from "./ProfileAccountCloseAccount.module.css";

const ProfileAccountCloseAccount = () => {
  // States
  const [displayDeleteDisclaimerModal, setDisplauDeleteDisclaimeeModal] =
    useState(false);
  const [displayDeletedModal, setDisplayDeletedModal] = useState(false);
  // Utils
  const closeDisclaimers = [
    "Deactivating your account is a temporary action.You can undo it.",
    "If you intend to close your account permanently, we will deactivate it after three months.",
    "If you have any active subscriptions, we will only cancel them if your account is permanently deleted.",
    "If you have any questions, please get in touch with us.",
  ];
  
  return (
    <ProfileSectionContainer
      header="Deactivate account"
      paragraph="Put your account on hold temporarily."
    >
      {displayDeleteDisclaimerModal && (
        <AcceptedModal
          onClick={() => {
            setDisplauDeleteDisclaimeeModal(false);
          }}
          body={
            <DeleteDisclaimerModalBody
              onClick={() => {
                setDisplauDeleteDisclaimeeModal(false);
              }}
              onClick2={() => {
                setDisplauDeleteDisclaimeeModal(false);
                setDisplayDeletedModal(true);
              }}
            />
          }
        />
      )}
      {displayDeletedModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayDeletedModal(false);
          }}
          body={
            <DeleteSuccessfulModalBody
              onClick={() => {
                setDisplauDeleteDisclaimeeModal(false);
              }}
            />
          }
        />
      )}
      <div className={classes.container}>
        <h4>Warning</h4>
        <ul>
          {closeDisclaimers.map((data, i) => {
            return <li key={i}>{data}</li>;
          })}
          <li>
            If you have any questions, please contact us before closing your
            account.
          </li>
        </ul>

        <Button
          type="invalid"
          onClick={() => {
            setDisplauDeleteDisclaimeeModal(true);
          }}
        >
          Deactivate account
        </Button>
      </div>
    </ProfileSectionContainer>
  );
};

export default ProfileAccountCloseAccount;
