import { Link } from "react-router-dom";
import { iseLogo } from "../../Assets/Images";
import classes from "../LoginEmailTemplate/LoginEmailTemplate.module.css";
import { facebook, linkedin, twitter, instagram } from "../../Assets/Images";

const LoginEmailTemplate = () => {

  return (
    <section className={classes.container}>
      <div>
        <header className={classes.header}>
          <img src={iseLogo} alt="Ise Logo" className={classes.logo} />
        </header>
        <main className={classes.main}>
          <div className={classes.mainHeader}>
            <img src={iseLogo} alt="Ise Logo" className={classes.logo} />
            <h3>Password change reminder</h3>
          </div>
          <div className={classes.mainBody}>
            <div>
              <p>Dear [Tutor's Name],</p>
              <p>
                We trust you're enjoying a seamless experience with iṣẹ́ EdTech. This friendly reminder encourages you to enhance your account security by changing your default password.
              </p>
            </div>
            <div>
              <p>To update your password, log in to your account and navigate to the "Profile" section, where you can create a strong, unique password. We recommend choosing a secure and easy password for you to remember.</p>
            </div>
            <div>
              <p>
                Should you have any questions or require assistance, our support team is ready to help at [Support Email Address].
              </p>
            </div>
            <div>
              <p>
                Thank you for being a valued member of the ise EdTech community!.
              </p>
            </div>
            <div>
              <p>
                Best regards,<br />
                iṣẹ́ EdTech Team
              </p>
            </div>
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
