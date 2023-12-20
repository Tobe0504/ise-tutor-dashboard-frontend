import classes from "./SupportCantFind.module.css";
import support from "../../Assets/Images/support.svg";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const SupportCantFind = () => {
  // Router
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <img src={support} alt="Support" />
      <div>
        <h4>Can’t find what you are looking for?</h4>
        <p>We’re here to help</p>

        <Button
          type="white"
          onClick={() => {
            navigate("/support/contact-support");
          }}
        >
          Contact support
        </Button>
      </div>
    </div>
  );
};

export default SupportCantFind;
