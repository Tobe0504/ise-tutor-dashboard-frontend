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