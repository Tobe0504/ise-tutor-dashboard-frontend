import { useState } from "react";
import classes from "./StudentQuizDataTable.module.css";

const StudentQuizDataTable = () => {
    // Utils
    const [quiz, setQuiz] = useState([
        {
            title: "Quiz 1- Test knowldge",
            completedDate: "12 Oct, 2023",
            passingGrade: 80,
            studentGrade: 100,
            studentGradeStatus: "pass",
            noOfRetry: 2,
        },
        {
            title: "Quiz 1- Test knowldge",
            completedDate: "12 Oct, 2023",
            passingGrade: 80,
            studentGrade: 100,
            studentGradeStatus: "pass",
            noOfRetry: 2,
        },
        {
            title: "Quiz 2.0- Test knowldge",
            completedDate: "10 Nov, 2023",
            passingGrade: 80,
            studentGrade: 20,
            studentGradeStatus: "fail",
            noOfRetry: "Nil",
        },
        {
            title: "Quiz 2.0- Test knowldge",
            completedDate: "10 Nov, 2023",
            passingGrade: 80,
            studentGrade: 20,
            studentGradeStatus: "fail",
            noOfRetry: "Nil",
        },
        {
            title: "Quiz 2.0- Test knowldge",
            completedDate: "10 Nov, 2023",
            passingGrade: 80,
            studentGrade: 20,
            studentGradeStatus: "fail",
            noOfRetry: "Nil",
        },
        {
            title: "Quiz 2.0- Test knowldge",
            completedDate: "10 Nov, 2023",
            passingGrade: 80,
            studentGrade: 20,
            studentGradeStatus: "fail",
            noOfRetry: "Nil",
        },
        {
            title: "Quiz 2.0- Test knowldge",
            completedDate: "10 Nov, 2023",
            passingGrade: 80,
            studentGrade: 20,
            studentGradeStatus: "fail",
            noOfRetry: "Nil",
        },
        {
            title: "Quiz 2.0- Test knowldge",
            completedDate: "10 Nov, 2023",
            passingGrade: 80,
            studentGrade: 20,
            studentGradeStatus: "fail",
            noOfRetry: "Nil",
        },
        {
            title: "Quiz 2.0- Test knowldge",
            completedDate: "10 Nov, 2023",
            passingGrade: 80,
            studentGrade: 20,
            studentGradeStatus: "fail",
            noOfRetry: "Nil",
        },
        {
            title: "Quiz 2.0- Test knowldge",
            completedDate: "10 Nov, 2023",
            passingGrade: 80,
            studentGrade: 20,
            studentGradeStatus: "fail",
            noOfRetry: "Nil",
        },
        {
            title: "Quiz 2.0- Test knowldge",
            completedDate: "10 Nov, 2023",
            passingGrade: 80,
            studentGrade: 20,
            studentGradeStatus: "fail",
            noOfRetry: "Nil",
        },
    ]);

    const getStatusClass = (studentGradeStatus: string) => {
        switch (studentGradeStatus) {
            case "pass":
                return classes.pass;
            case "fail":
                return classes.fail;

            default:
                return "";
        }
    };

    return (
        <section className={classes.container}>
            <div className={classes.body}>
                <p>1-10 of 10 results</p>
                <div>
                    <div className={classes.tableHeader}>
                        <span>Quiz title</span>
                        <span>Completion date</span>
                        <span>Passing grade</span>
                        <span>Student grade</span>
                        <span># of retry(s)</span>
                    </div>

                    <div className={classes.bodyContent}>
                        {quiz.map((data, i) => {
                            const statusClassName = getStatusClass(data.studentGradeStatus);
                            return (
                                <div key={Math.random()} className={classes.tableBody}>
                                    <span>{data.title}</span>
                                    <span>{data.completedDate}</span>
                                    <span>{data.passingGrade}%</span>
                                    <span><span>{data.studentGrade}%</span><span className={statusClassName}>{data.studentGradeStatus}</span></span>
                                    <span>{data.noOfRetry}</span>
                                </div>
                            );
                        })}
                    </div>
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
                                strokeLinecap="round"
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
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </div>
            </div>

        </section>
    );
};

export default StudentQuizDataTable;
