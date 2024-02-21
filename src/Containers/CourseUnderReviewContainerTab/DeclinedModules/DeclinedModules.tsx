import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./DeclinedModules.module.css";
import { couseReviewData } from "../couseReviewData";
import ellipses from '../../../Assets/Images/ellipses.svg'
import ActionsModal from "../ActionsModal/ActionsModal";

const DeclinedModules = () => {

    // Refs
    const optionsRef = useRef<HTMLDivElement | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    // States
    const [studentsData, setStudentData] = useState(couseReviewData)


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

    const optionsChangeHandler = (index: number) => {
        const studentsCopy = studentsData.map((data, i) => {
            if (i === index) {
                return { ...data, displayOptions: !data.displayOptions };
            }
            return { ...data, displayOptions: false };
        });

        setStudentData(studentsCopy);
    };

    useEffect(() => {
        const removeOptions = (e: any) => {
            if (optionsRef && !optionsRef.current?.contains(e.target)) {
                const studentsCopy = studentsData.map((data) => {
                    return { ...data, displayOptions: false }
                })
                setStudentData(studentsCopy)
            } else {
                const studentsCopy = studentsData.map((data) => {
                    return { ...data }
                })
                setStudentData(studentsCopy)
            }
        }

        document.addEventListener('mousedown', removeOptions)

        return () => {
            document.removeEventListener('mousedown', removeOptions)
        }
    }, [studentsData])

    return (
        <section className={classes.container} ref={containerRef}>
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
                    {reviseCourse.map((data, index) => {
                        const statusClassName = getStatusClass(data.status);
                        return (
                            <div key={index} className={classes.tableBody}>
                                <span>{data.module}:{data.title}</span>
                                <span className={statusClassName}>{data.status}</span>
                                <span>{data.deadline}</span>
                                <span><Link to='/courses/feedback/:courseReviewId/feedback-preview'>View feedback</Link></span>
                                <span>
                                    <img
                                        onClick={() => {
                                            optionsChangeHandler(index)
                                        }}
                                        src={ellipses} alt="more options" />
                                    {data.displayOptions && (
                                        <div ref={optionsRef}>
                                            <ActionsModal
                                                onClick={() => {
                                                    optionsChangeHandler(index);
                                                }}
                                                onClick2={() => {
                                                    optionsChangeHandler(index);
                                                }}
                                            />
                                        </div>
                                    )}
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </div>
        </section>
    );
};

export default DeclinedModules;
