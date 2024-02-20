import classes from "./DeclinedModules.module.css";
import { couseReviewData } from "../couseReviewData";
import { Link } from "react-router-dom";

const DeclinedModules = () => {

    const getStatusClass = (status: string) => {
        switch (status) {
            case "approved":
                return classes.approved;
            case "revise":
                return classes.revise;
            case "pending":
                return classes.pending;
        }
    }

    const reviseCourse = couseReviewData.filter(data => data.status === "revise");

    return (
        <section className={classes.container}>
            <div>
                <div className={classes.tableHeader}>
                    <span>Module/Title</span>
                    <span><p>Status</p>/<p>Deadline</p></span>
                    <span>Status</span>
                    <span>Deadline</span>
                    <span>Message</span>
                    <span>Action</span>
                </div>

                <div className={classes.bodyContent}>
                    {reviseCourse.map((data, i) => {
                        const statusClassName = getStatusClass(data.status);
                        return (
                            <>
                                <div key={i} className={classes.tableBody}>
                                    <span>{data.module}:{data.title}</span>
                                    <span className={statusClassName}>{data.status}</span>
                                    <span>{data.deadline}</span>
                                    <span><Link to='/courses/create-module/preview'>View feedback</Link></span>
                                    <span>
                                        <svg width="5" height="18" viewBox="0 0 5 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.5 2L2.5 2.01M2.5 9L2.5 9.01M2.5 16L2.5 16.01M2.5 3C1.94772 3 1.5 2.55228 1.5 2C1.5 1.44772 1.94772 1 2.5 1C3.05228 1 3.5 1.44772 3.5 2C3.5 2.55228 3.05228 3 2.5 3ZM2.5 10C1.94771 10 1.5 9.55228 1.5 9C1.5 8.44772 1.94771 8 2.5 8C3.05228 8 3.5 8.44772 3.5 9C3.5 9.55228 3.05228 10 2.5 10ZM2.5 17C1.94771 17 1.5 16.5523 1.5 16C1.5 15.4477 1.94771 15 2.5 15C3.05228 15 3.5 15.4477 3.5 16C3.5 16.5523 3.05228 17 2.5 17Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <p>
                                        <span>{data.module}</span>
                                        <span>{data.title}</span>
                                    </p>
                                    <p>
                                        <span className={statusClassName}>{data.status}</span>
                                        <span>{data.deadline}</span>
                                    </p>
                                    <p>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.4 15L0 13.6L11.6 2H5V0H15V10H13V3.4L1.4 15Z" fill="black" />
                                        </svg>
                                    </p>
                                </div>
                            </>
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
        </section>
    );
};

export default DeclinedModules;
