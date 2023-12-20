import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import ContactSupportForm from "../ContactSupportForm/ContactSupportForm";
import classes from "./ContactSupport.module.css";

const ContactSupport = () => {
  // Utils
  const breadCrumbs = {
    image: undefined,
    array: [
      {
        title: "Support",
        route: "/support",
      },
      {
        title: "Contact support",
        route: "/support/contact-support",
      },
    ],
  };
  return (
    <div className={classes.container}>
      <div className={classes.breadCrumbs}>
        <Breadcrumbs {...breadCrumbs} />
      </div>
      <div className={classes.body}>
        <div className={classes.header}>
          <h4>Contact support</h4>
          <p>Questions, bug reports, feedback- let’s hear from you</p>
        </div>

        <ContactSupportForm />
      </div>
    </div>
  );
};

export default ContactSupport;
