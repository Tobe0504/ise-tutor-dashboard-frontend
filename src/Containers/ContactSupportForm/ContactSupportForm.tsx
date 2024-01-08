import Error from "../../Components/Error/Error";
import Input from "../../Components/Input/Input";
import TextArea from "../../Components/TextArea/TextArea";
import classes from "./ContactSupportForm.module.css";
import contactSupport from "../../Assets/Images/contactSupport.svg";
import DragAndDropInput from "../../Components/DragAndDropInput/DragAndDropInput";
import Button from "../../Components/Button/Button";
import { useState } from "react";
import AcceptedModal from "../../Components/Modals/AcceptedModal/AcceptedModal";
import RequestSentModalBody from "./RequestSentModalBody";

const ContactSupportForm = () => {
  // States
  const [requestSent, setRequestSent] = useState(false);
  return (
    <div className={classes.container}>
      {requestSent && (
        <AcceptedModal
          onClick={() => {
            setRequestSent(false);
          }}
          body={
            <RequestSentModalBody
              onClick={() => {
                setRequestSent(false);
              }}
            />
          }
        />
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h4>Still need help? We’re here for you</h4>
        <p>
          Share the important details with us. After you open a request, you can
          view and add updates via your email.
        </p>

        <Error type="success">
          Do not share sensitive information (attachments or text). Ex. Your
          credit card details or personal ID numbers.
        </Error>

        <Input
          label="Subject"
          isRequired
          placeholder="What is the subject of your support?"
        />

        <TextArea
          label="Description"
          isRequired
          placeholder="By providing the essential details, we can quickly resolve your request. "
        />

        <DragAndDropInput />
        <p className={classes.tip}>Adding screenshots can help us identify and fix bugs faster</p>

        <div className={classes.buttonSection}>
          <Button
            onClick={(e) => {
              e.preventDefault();

              setRequestSent(true);
            }}
          >
            Submit request
          </Button>
        </div>
      </form>
      <img src={contactSupport} alt="COntact support" />
    </div>
  );
};

export default ContactSupportForm;
