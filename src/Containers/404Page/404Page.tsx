import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import classes from "./404Page.module.css";
import errorImage from "../../Assets/Images/404Image.svg"


const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className={classes.container}>
      <img src={errorImage} alt="Page not found" />
      <h4>Oops! Page Not Found</h4>
      <p>
        It seems you've ventured off the beaten path. The page you're looking
        for may have been relocated or doesn't exist. Don't worry; we can help
        you get back on track.
      </p>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to homepage
      </Button>
    </section>
  );
};

export default ErrorPage;
