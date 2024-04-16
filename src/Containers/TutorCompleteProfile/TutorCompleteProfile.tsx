import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import iseLogo from "../../Assets/Images/iseLogo.svg"
import ProfileProfile from "../ProfileProfile/ProfileProfile";
import classes from "./TutorCompleteProfile.module.css";


const TutorCompleteProfile = () => {
  const navigate = useNavigate();

  return (
    <section className={classes.container}>
      <header className={classes.header}>
        <img src={iseLogo} alt="Ise Logo" className={classes.logo} />
      </header>
      <div>
        <div className={classes.title}>
          <h3>Complete your profile information </h3>
          <p>This will be visible to students, you can always edit this
            later.</p>
        </div>
        <div className={classes.body}><ProfileProfile /></div>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <span className={classes.buttonInner}>
            <span>Save and continue</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M17.5 8L21.5 12M21.5 12L17.5 16M21.5 12L3.5 12"
                stroke="white"
                strokeWidth="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Button>
      </div>
    </section>
  );
};

export default TutorCompleteProfile;
