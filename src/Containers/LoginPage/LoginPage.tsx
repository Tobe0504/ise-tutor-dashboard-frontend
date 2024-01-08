import classes from "./LoginPage.module.css";
import { useNavigate, Link } from "react-router-dom";
import login from "../../Assets/Images/login.svg";
import iseLogo from "../../Assets/Images/iseLogo.svg"
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import OnboardingLayout from "../../Components/OnboardingLayout/OnboardingLayout";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <OnboardingLayout image={login}>
      <section className={classes.container}>
        <img src={iseLogo} alt="Ise Logo" className={classes.logo} />
        <div className={classes.header}>
          <h4>Welcome to iṣẹ́ Edtech</h4>
          <p>Login with the details sent to your email</p>
        </div>
        <form 
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input label="Email" isRequired placeholder="name@gmail.com" />
          <span>
            <Input
              label="Password"
              isRequired
              type="password"
              placeholder="************"
            />
          </span>

          <div className={classes.rememberAndForgot}>
            <div>
              <input type="checkbox" id="remember" />
              <span>Remember Me</span>
            </div>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <div className={classes.buttonSection}>
            <Button
              onClick={() => {
                navigate("/tutor-complete-profile");
              }}>
                <span>Log in</span>
              </Button>
          </div>
        </form>
      </section>
    </OnboardingLayout>
  );
};

export default LoginPage;
