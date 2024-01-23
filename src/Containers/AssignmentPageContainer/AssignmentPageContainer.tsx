import { useState } from "react";
import HelloUser from "../../Components/HelloUser/HelloUser";
import classes from "./AssignmentPageContainer.module.css";
import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";
import ellipses from "../../Assets/Images/ellipses.svg"


const AssignmentPageContainer = () => {

  const [assignments, setAssignments] = useState([
    {
      fileName: "Assignment1.mp4",
      studentName: "Sarah Oyebade",
      status: "Pending",
      grade: "Not graded",
    },
    {
      fileName: "Assignment1.coc",
      studentName: "Lukman Shaggi",
      status: "Approved",
      grade: 22,
    },
    {
      fileName: "Assignment1.mp4",
      studentName: "Sarah Oyebade",
      status: "Pending",
      grade: "Not graded",
    },
  ]);

  return (
    <div className={classes.container}>

      <HelloUser header="Assignments" paragraph="Review student assignment, submission details, assignment status, grades, and give feedback here." notIncludePay notIncludeBg />

      <div className={classes.studentSeachInput}>
        <div className={classes.inputSection}>
          <input type="text" placeholder="Search by file name, student name" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="#2E2E2E"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <DropdownWithSearch
          isRequired
          label=""
          title="Frontend development course"
          options={[]}
        />
      </div>

      <div className={classes.body}>
        <div>
          <div className={classes.tableHeader}>
            <span>File name</span>
            <span>Student Name</span>
            <span>Status</span>
            <span>Grade</span>
            <span>Action</span>
          </div>

          <div className={classes.bodyContent}>
            {assignments.map((data, i) => {
              return (
                <div key={Math.random()} className={classes.tableBody}>
                  <span>{data.fileName}</span>
                  <span>{data.studentName}</span>
                  <span>{data.status}</span>
                  <span>{data.grade}</span>
                  <span>
                    <img src={ellipses} alt="more options" />
                  </span>
                </div>
              );
            })}
          </div>
          <p className={classes.submission}>
            <span>{assignments.length}</span> submissions
          </p>
        </div>
      </div>

    </div>
  );
};

export default AssignmentPageContainer;
