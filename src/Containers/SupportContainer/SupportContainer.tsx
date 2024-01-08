import SupportCantFind from "../SupportCantFind/SupportCantFind";
import SupportFaqs from "../SupportFaqs/SupportFaqs";
import SupportVisitOurCommunity from "../SupportVisitOurCommunity/SupportVisitOurCommunity";
import classes from "./SupportContainer.module.css";

const SupportContainer = () => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>Hi Amirah, how can we help?</div>

      <SupportFaqs />
      <SupportVisitOurCommunity />
      <SupportCantFind />
    </section>
  );
};

export default SupportContainer;
