import classes from "./OnboardingLayout.module.css";

type OnboardingLayoutTypes = {
  image: string;
  children: React.ReactNode;
};

const OnboardingLayout = ({ image, children }: OnboardingLayoutTypes) => {
  return (
    <section className={classes.container}>
      <div className={classes.textSection}>{children}</div>
      <div className={classes.imageSection}>
        <img src={image} alt="Login" />
      </div>
    </section>
  );
};

export default OnboardingLayout;
