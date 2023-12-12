import { Button } from "../../Components";
import { useNavigate, Link } from "react-router-dom";
import classes from "./LoginEmailTemplate.module.css";
import { iseLogo, facebook, linkedin, twitter, instagram } from "../../Assets/Images";

const LoginEmailTemplate = () => {
  const navigate = useNavigate();

  return (
    <section className={classes.container}> 
      <div>
        <header className={classes.header}>
          <img src={iseLogo} alt="Ise Logo" className={classes.logo} />
        </header>
        <main className={classes.main}>
          <div className={classes.mainHeader}>
            <img src={iseLogo} alt="Ise Logo" className={classes.logo} />
            <h3>Login to your iṣẹ́ EdTech account</h3>
          </div>
          <div className={classes.mainBody}>
            <div>
              <p>Dear [Tutor's Name],</p>
              <p>
                Welcome to iṣẹ́ EdTech! We're delighted to have you join our
                mission of transforming education and empowering tutors and
                students. Your presence is a valuable addition to our community.
              </p>
            </div>
            <div>
              <p>Below, you'll find your login details to access our platform:</p>
              <ul className={classes.loginDetailsList}>
                <li>Email Address: [Tutor's Email Address]</li>
                <li>Default Password: [Default Password]</li>
              </ul>
            </div>
            <div>
              <p>
                Login to your tutor account by copying this link in your browser
                or clicking on the “login” button below Login link: [this will be
                the link to the login screen]
              </p>
            </div>
          </div>
          <div className={classes.buttonContainer}>
            <Button
              onClick={() => {
                navigate("/sign-in");
              }}
            >
              <span className={classes.buttonInner}>
                <span>Login to your account</span>
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Button>
          </div>
        </main>
        <footer className={classes.footer}>
          <p>This message is sent to oyegokeamirah@gmail.com by iṣẹ́ EdTech because you are a member of our platform.</p>
          <h4>Stay in Touch</h4>
          <div>
            <Link to=""><img src={facebook} alt="facebook" /></Link>
            <Link to=""><img src={linkedin} alt="linkedin" /></Link>
            <Link to=""><img src={twitter} alt="twitter" /></Link>
            <Link to=""><img src={instagram} alt="instagram" /></Link>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default LoginEmailTemplate;
