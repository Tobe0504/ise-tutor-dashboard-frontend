import classes from "./CollaborationHubRightCta.module.css";
import keepPushing from "../../Assets/Images/keepPushing.svg";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const CollaborationHubRightCta = () => {
  
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>Collaboration Hub</p>
        <img src={keepPushing} alt="Keep pushing" />
      </div>
      <p>Learn how to join discord discussion forum.</p>
      <Button
        type="primary"
        onClick={() => {
          navigate("/collaboration-hub");
        }}
      >
        Explore info
      </Button>
    </div>
  );
};

export default CollaborationHubRightCta;

// import classes from "./CollaborationHubRightCta.module.css";
// import keepPushing from "../../Assets/Images/keepPushing.svg";
// import Button from "../../Components/Button/Button";
// import AcceptedModal from "../../Components/Modals/AcceptedModal/AcceptedModal";
// import { useState } from "react";


// const CollaborationHubRightCta = () => {
//   // States
//   const [displayWarningModal, setDisplayWarningModal] = useState(false);
//   const [displayEmailChangeConfirmModal, setDisplayEmailChangeConfirmModal] =
//     useState(false);


//   return (
//     <div className={classes.container}>
//       {displayWarningModal && (
//         <AcceptedModal
//           onClick={() => {
//             setDisplayWarningModal(false);
//           }}
//           body={
//             <ChangeEmailModalWarning
//               onClick={() => {
//                 setDisplayWarningModal(false);
//               }}
//               onClick2={() => {
//                 setDisplayWarningModal(false);
//                 setDisplayEmailChangeConfirmModal(true);
//               }}
//             />
//           }
//         />
//       )}
//       {displayEmailChangeConfirmModal && (
//         <AcceptedModal
//           onClick={() => {
//             setDisplayEmailChangeConfirmModal(false);
//           }}
//           body={
//             <ChangeEmailComformedModalBody
//               onClick={() => {
//                 setDisplayEmailChangeConfirmModal(false);
//               }}
//             />
//           }
//         />
//       )}
//       <div className={classes.header}>
//         <p>Collaboration Hub</p>
//         <img src={keepPushing} alt="Keep pushing" />
//       </div>
//       <p>Learn how to join discord discussion forum.</p>
//       <Button
//         type="primary"
//         onClick={() => {
//           setDisplayWarningModal(true);
//         }}
//       >
//         Explore info
//       </Button>
//     </div>
//   );
// };

// export default CollaborationHubRightCta;

