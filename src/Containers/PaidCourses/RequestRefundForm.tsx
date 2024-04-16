import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";
import TextArea from "../../Components/TextArea/TextArea";
import classes from "./PaidCourses.module.css";

type RequestRefundFormProps = {
  onClick: () => void;
  onClick2: () => void;
};

const RequestRefundForm = ({ onClick, onClick2 }: RequestRefundFormProps) => {
  return (
    <div className={classes.modalContainer}>
      <div className={classes.modalInner}>
        <div className={classes.modalHeader}>
          <h4>Request a refund</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            onClick={onClick}
          >
            <path
              d="M12 36L36 12M12 12L36 36"
              stroke="#2E2E2E"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <DropdownWithSearch
          isRequired
          label="Refund reason"
          title="Select a reason"
          options={[]}
        />

        <TextArea
          isRequired
          label="Provide more details"
          placeholder="Please provide further details regarding your refund request."
        />

        <div className={classes.buttonSection}>
          <Button type="secondary">Cancel</Button>
          <Button onClick={onClick2}>Submit</Button>
        </div>

        <p className={classes.refundPolicy}>
          If your request is eligible, we'll contact you.{" "}
          <Link to="/">Review our refund policy </Link>
        </p>
      </div>
    </div>
  );
};

export default RequestRefundForm;
