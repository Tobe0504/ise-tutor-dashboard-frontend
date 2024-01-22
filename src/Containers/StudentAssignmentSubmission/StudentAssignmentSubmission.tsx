import { useState } from "react";
import ellipses from "../../Assets/Images/ellipses.svg"
import classes from "./StudentAssignmentSubmission.module.css";

const StudentAssignmentSubmission = () => {
  // Utils
  const [assignments, setAssignments] = useState([
    {
      name: "Amirah Oyegoke",
      submittedFile: "Assignment1.pdf",
      dateAdded: "04-Sept-23",
    },
    {
      name: "Amirah Oyegoke",
      submittedFile: "Assignment1.pdf",
      dateAdded: "04-Sept-23",
    },
    {
      name: "Amirah Oyegoke",
      submittedFile: "Assignment1.pdf",
      dateAdded: "04-Sept-23",
    },
    {
      name: "Amirah Oyegoke",
      submittedFile: "Assignment1.pdf",
      dateAdded: "04-Sept-23",
    },
    {
      name: "Amirah Oyegoke",
      submittedFile: "Assignment1.pdf",
      dateAdded: "04-Sept-23",
    },
  ]);

  const filterItems = (id: number) => {
    const assignmentsCopy = assignments.filter((data, i) => {
      return i !== id;
    });

    setAssignments(assignmentsCopy);
  };
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <div>
          <h4>Student Assignment Submission</h4>
          <p>Access assignments submitted by your students, helping you stay organized and provide timely feedback.</p>
        </div>
        <div>
          <span>View all</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M12.75 6.5L15.75 9.5M15.75 9.5L12.75 12.5M15.75 9.5L2.25 9.5"
              stroke="#664EFE"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className={classes.body}>
        <div>
          <div className={classes.tableHeader}>
            <span>Name</span>
            <span>Submitted File</span>
            <span>Date</span>
            <span>Action</span>
          </div>

          <div className={classes.bodyContent}>
            {assignments.map((data, i) => {
              return (
                <div key={Math.random()} className={classes.tableBody}>
                  <span>{data.name}</span>
                  <span>{data.submittedFile}</span>
                  <span>{data.dateAdded}</span>
                  <span
                    onClick={() => {
                      filterItems(i);
                    }}
                  >
                    <img src={ellipses} alt="more options" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};

export default StudentAssignmentSubmission;
