import { useNavigate } from "react-router-dom";
import classes from "./StudentDetailFeedBackDataTable.module.css";

const feedback = [
  {
    title: "Periodic survey feedback 1",
    dateCreated: "19th Oct. 2023",
    dateCompleted: "11 Nov, 2023",
  },
  {
    title: "Periodic survey feedback 1",
    dateCreated: "19th Oct. 2023",
    dateCompleted: "11 Nov, 2023",
  },
];

const StudentDetailFeedBackDataTable = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <p>1-10 of 10 results</p>
      <div className={classes.tableHeader}>
        <span>Title</span>
        <span>File type</span>
        <span>Date uploaded</span>
        <span>Action</span>
      </div>
      <div className={classes.tableBodyContainer}>
        {feedback.map((data, i) => {
          return (
            <div className={classes.tableBody} key={i}>
              <span>
                {data.title} {i + 1}
              </span>
              <span>{data.dateCreated}</span>
              <span>{data.dateCompleted}</span>
              <span
                onClick={() => navigate('/student/periodic-survey')}
              >View</span>
            </div>
          );
        })}
      </div>
      <div className={classes.pageButtons}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 19L8 12L15 5"
              stroke="#d8d8d8"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <button>1</button>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 5L16 12L9 19"
              stroke="#d8d8d8"
              strokeWidth="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default StudentDetailFeedBackDataTable;
