import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import classes from "./HelpAndSupportRightCta.module.css";

const HelpAndSupportRightCta = () => {
  // Router
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <h4>Help and Support</h4>
      <p>
        Need assistance or facing navigation challenges? We're here to help!
      </p>
      <Button
        type="tertiary"
        onClick={() => {
          navigate("/support");
        }}
      >
        Contact us
      </Button>
    </div>
  );
};

export default HelpAndSupportRightCta;
