import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import classes from "./DeclinedModules.module.css";
import { couseReviewData } from "../couseReviewData";
import ellipses from '../../../Assets/Images/ellipses.svg'
import ActionsModal from "../ActionsModal/ActionsModal";
import AcceptedModal from "../../../Components/Modals/AcceptedModal/AcceptedModal";
import ReviewUpdatedModal from "./Modals/ReviewUpdatedModal";
import ReadyToSubmitModal from "./Modals/ReadyToSubmitModal";
import SubmissionSuccessfulModal from "./Modals/SubmissionSuccessfulModal";

const DeclinedModules = () => {

    const reviseCourse = couseReviewData.filter(data => data.status === "revise");

    // States
    const [reviewCourseData, setReviewCourseData] = useState(reviseCourse)
    const [displayReviewUpdatedModal, setDisplReviewUpdatedModal] = useState(false)
    const [displayReadyToSubmitModal, setDisplayReadyToSubmitModal] = useState(false)
    const [displaySubmissionSuccessfulModal, setDisplaySubmissionSuccessfulModal] = useState(false)

    // Router
    const navigate = useNavigate()
    const { courseReviewId } = useParams();

    // Refs
    const optionsRef = useRef<HTMLDivElement | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const optionsChangeHandler = (index: number) => {
        const reviewCoursesCopy = reviewCourseData.map((data, i) => {
            if (i === index) {
                return { ...data, displayOptions: !data.displayOptions };
            }
            return { ...data, displayOptions: false };
        });

        setReviewCourseData(reviewCoursesCopy);
    };

    useEffect(() => {
        const removeOptions = (e: any) => {
            if (optionsRef && !optionsRef.current?.contains(e.target)) {
                const reviewCoursesCopy = reviewCourseData.map((data) => {
                    return { ...data, displayOptions: false }
                })
                setReviewCourseData(reviewCoursesCopy)
            } else {
                const reviewCoursesCopy = reviewCourseData.map((data) => {
                    return { ...data }
                })
                setReviewCourseData(reviewCoursesCopy)
            }
        }

        document.addEventListener('mousedown', removeOptions)

        return () => {
            document.removeEventListener('mousedown', removeOptions)
        }
    }, [reviewCourseData])

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

    return (
        <section className={classes.container} ref={containerRef}>
            {displayReviewUpdatedModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplReviewUpdatedModal(false)
                    }}
                    body={
                        <ReviewUpdatedModal
                            onClick={() => {
                                setDisplReviewUpdatedModal(false)
                                setDisplayReadyToSubmitModal(true)
                            }}
                        />
                    }
                />
            )}
            {displayReadyToSubmitModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplayReadyToSubmitModal(false)
                    }}
                    body={
                        <ReadyToSubmitModal
                            onClick={() => {
                                setDisplayReadyToSubmitModal(false)
                            }}
                            onClick2={() => {
                                setDisplayReadyToSubmitModal(false)
                                setDisplaySubmissionSuccessfulModal(true)
                            }}
                        />
                    }
                />
            )}
            {displaySubmissionSuccessfulModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplaySubmissionSuccessfulModal(false)
                    }}
                    body={
                        <SubmissionSuccessfulModal
                            onClick={() => {
                                setDisplayReadyToSubmitModal(false)
                                setDisplaySubmissionSuccessfulModal(false)
                            }}
                        />
                    }
                />
            )}
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
                    {reviewCourseData.map((data, index) => {
                        const statusClassName = getStatusClass(data.status);
                        return (
                            <div key={index} className={classes.tableBody}>
                                <span>{data.module}:{data.title}</span>
                                <span className={statusClassName}>{data.status}</span>
                                <span>{data.deadline}</span>
                                <span><Link to={`/courses/feedback/${courseReviewId}/feedback-preview`}>View feedback</Link></span>
                                <span
                                    onClick={() => {
                                        optionsChangeHandler(index)
                                    }}
                                >
                                    <img src={ellipses} alt="more options" />
                                    {data.displayOptions && (
                                        <div ref={optionsRef}>
                                            <ActionsModal
                                                onClick={() => {
                                                    optionsChangeHandler(index);
                                                    setDisplReviewUpdatedModal(true);
                                                }}
                                                onClick2={() => {
                                                    optionsChangeHandler(index);
                                                    navigate(`/courses/feedback/${courseReviewId}/feedback-preview`);
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
                                    <svg
                                        onClick={() => {
                                            optionsChangeHandler(index)
                                        }}
                                        width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.4 15L0 13.6L11.6 2H5V0H15V10H13V3.4L1.4 15Z" fill="black" />
                                    </svg>
                                    {data.displayOptions && (
                                        <div ref={optionsRef}>
                                            <ActionsModal
                                                onClick={() => {
                                                    optionsChangeHandler(index);
                                                    setDisplReviewUpdatedModal(true);
                                                }}
                                                onClick2={() => {
                                                    optionsChangeHandler(index);
                                                    navigate(`/courses/feedback/${courseReviewId}/feedback-preview`);
                                                }}
                                            />
                                        </div>
                                    )}
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