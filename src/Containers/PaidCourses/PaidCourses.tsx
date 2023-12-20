import { useState } from "react";
import Button from "../../Components/Button/Button";
import AcceptedModal from "../../Components/Modals/AcceptedModal/AcceptedModal";
import classes from "./PaidCourses.module.css";
import RefundRequestSubmittedModal from "./RefundRequestSubmittedModal";
import RequestRefundForm from "./RequestRefundForm";

const PaidCourses = () => {
  const paidCourses = [
    {
      title: "Machine Learning",
      price: "$75.00",
      date: "19th Oct 2023",
      status: "full",
    },
    {
      title: "Machine Learning",
      price: "$75.00",
      date: "19th Oct 2023",
      status: "1st installment paid \n 2nd upcoming",
    },
    {
      title: "Machine Learning",
      price: "$75.00",
      date: "19th Oct 2023",
      status: "1st installment paid \n 2nd upcoming",
    },

    {
      title: "Machine Learning",
      price: "$75.00",
      date: "19th Oct 2023",
      status: "full",
    },
  ];

  //   State
  const [displayRefundModal, setDisplayRefundModal] = useState(false);
  const [displayRefundSubmit, setDisplayRefundSubmit] = useState(false);

  return (
    <div className={classes.container}>
      {displayRefundModal && (
        <AcceptedModal
          onClick={() => {
            setDisplayRefundModal(false);
          }}
          body={
            <RequestRefundForm
              onClick={() => {
                setDisplayRefundModal(false);
              }}
              onClick2={() => {
                setDisplayRefundModal(false);
                setDisplayRefundSubmit(true);
              }}
            />
          }
        />
      )}

      {displayRefundSubmit && (
        <AcceptedModal
          onClick={() => {
            setDisplayRefundSubmit(false);
          }}
          body={
            <RefundRequestSubmittedModal
              onClick={() => {
                setDisplayRefundSubmit(false);
              }}
            />
          }
        />
      )}
      <div className={classes.tableHeader}>
        <span>Course name</span>
        <span>Total amount</span>
        <span>Payment date</span>
        <span>Payment status</span>
        <span></span>
        <span></span>
      </div>

      <div className={classes.tableBodyContainer}>
        {paidCourses.map((data, i) => {
          return (
            <div key={i} className={classes.tableBody}>
              <span>
                <span>{data.title}</span>
                <span>Paid</span>
              </span>
              <span>{data.price}</span>
              <span>{data.date}</span>
              <span>
                <span
                  className={classes.indicator}
                  style={
                    data.status === "full"
                      ? { background: "#63AD0E" }
                      : { background: "#F2B414" }
                  }
                ></span>
                <span>
                  {data.status === "full" ? "Paid in full" : data.status}
                </span>
              </span>
              <span>
                {data.status === "full" ? (
                  <Button
                    type="null"
                    onClick={() => [setDisplayRefundModal(true)]}
                  >
                    Request refund
                  </Button>
                ) : (
                  <Button type="null">Email receipt</Button>
                )}
              </span>

              <span>
                {data.status === "full" ? (
                  <Button type="secondary">Email receipt</Button>
                ) : (
                  <Button type="secondary">Complete payment</Button>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaidCourses;
