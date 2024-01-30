import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import classes from "./AssignmentSubmissionPageContainer.module.css";
import breadcrumbsBack from "../../Assets/Images/breadcrumbsBack.svg";
import Button from "../../Components/Button/Button";
import { useState } from "react";
import AcceptedModal from "../../Components/Modals/AcceptedModal/AcceptedModal";
import MessageSentModal from "../AssignmentPageContainer/MessageSentModal";
import SendMessageModal from "../AssignmentPageContainer/SendMessageModal/SendMessageModal";
import RejectSubmissionModal from "../AssignmentPageContainer/RejectSubmissionModal/RejectSubmissionModal";
import Toast from "../../Components/Toast/Toast";
import GradeSubmissionModal from "../AssignmentPageContainer/GradeSubmissionModal/GradeSubmissionModal";
import ApproveSubmissionModal from "../AssignmentPageContainer/ApproveSubmissionModal/ApproveSubmissionModal";


const AssignmentSubmissionPageContainer = () => {

    // State
    const [displayApproveSubmissionModal, setDisplayApproveSubmissionModal] = useState(false)
    const [displayGradeSubmissionModal, setDisplayGradeSubmissionModal] = useState(false)
    const [displayGradeSubmissionToast, setDisplayGradeSubmissionToast] = useState(false)
    const [displayRejectSubmissionModal, setDisplayRejectSubmissionModal] = useState(false)
    const [displaySendMessageModal, setDisplaySendMessageModal] = useState(false)
    const [displayMessageSentModal, setDisplayMessageSentModal] = useState(false)

    // Utils
    const breadCrumbs = {
        image: breadcrumbsBack,
        array: [
            {
                title: "Back to assignment",
                route: "/student/assignment",
            },
            {
                title: "View assignment",
                route: "",
            },
        ],
    };

    return (
        <div className={classes.container}>
            {displayApproveSubmissionModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplayApproveSubmissionModal(false)
                    }}
                    body={
                        <ApproveSubmissionModal
                            title="Approve submission"
                            onClick={() => {
                                setDisplayApproveSubmissionModal(false)
                            }}
                            onClick2={() => {
                                setDisplayGradeSubmissionModal(true)
                            }}
                        />
                    }
                />
            )}
            {displayGradeSubmissionModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplayGradeSubmissionModal(false)
                    }}
                    body={
                        <GradeSubmissionModal
                            onClick={() => {
                                setDisplayApproveSubmissionModal(false)
                                setDisplayGradeSubmissionModal(false)
                            }}
                            onClick2={() => {
                                setDisplayApproveSubmissionModal(false)
                                setDisplayGradeSubmissionModal(false)
                                setDisplayGradeSubmissionToast(true)
                            }}
                        />
                    }
                />
            )}
            {displayGradeSubmissionToast && (
                <Toast
                    toastTeaxt="Grade successfully recorded!"
                    onClick={() => {
                        setDisplayGradeSubmissionModal(false)
                        setDisplayGradeSubmissionToast(false)
                    }}
                />
            )}
            {displayRejectSubmissionModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplayRejectSubmissionModal(false)
                    }}
                    body={
                        <RejectSubmissionModal
                            onClick={() => {
                                setDisplayRejectSubmissionModal(false)
                            }}
                            onClick2={() => {
                                setDisplayMessageSentModal(true)
                            }}
                        />
                    }
                />
            )}
            {displaySendMessageModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplaySendMessageModal(false)
                    }}
                    body={
                        <SendMessageModal
                            onClick={() => {
                                setDisplaySendMessageModal(false)
                            }}
                            onClick2={() => {
                                setDisplayMessageSentModal(true)
                            }}
                        />
                    }
                />
            )}
            {displayMessageSentModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplayMessageSentModal(false)
                    }}
                    body={
                        <MessageSentModal
                            onClick={() => {
                                setDisplayMessageSentModal(false)
                                setDisplayRejectSubmissionModal(false)
                                setDisplaySendMessageModal(false)
                            }}
                        />
                    }
                />
            )}
            <div className={classes.breadCrumbs}>
                <Breadcrumbs {...breadCrumbs} />
            </div>
            <div className={classes.textField}>
                <div className={classes.header}>
                    <h2>Review submitted assignment</h2>
                </div>
                <div className={classes.body}>
                    <div className={classes.content}>
                        <h4>Task description:</h4>
                        <p>Data collection (10 points): Each student is required to collect data on a topic of their choice. It could be as simple as surveying their classmates about their favourite hobbies or gathering data on weather conditions in their local area over a week. Ensure the dataset contains at least 20 data points.</p>
                        <p>Data cleaning (10 points): After collecting the data, students should clean the dataset by addressing missing values, outliers, or inconsistencies. Document the steps taken to clean the data.</p>
                        <p>Data exploration (20 points): Perform essential data exploration by calculating summary statistics (mean, median, standard deviation), creating appropriate data visualizations (e.g., histograms, scatter plots), and identifying trends or patterns in the data.</p>
                        <p>Data interpretation (20 points): Write a brief analysis (around 300-500 words) of the insights gained from the data. What can you infer from the data? Are there any correlations or exciting observations?</p>
                        <p>Presentation (10 points): Prepare a brief presentation (3-5 minutes) summarizing your data collection, cleaning, exploration, and interpretation. You can use PowerPoint or any presentation tool of your choice.</p>
                    </div>
                    <div className={classes.content}>
                        <h4>Submission:</h4>
                        <ul>
                            <li>The cleaned dataset (Excel, CSV, or any suitable format).</li>
                            <li>The data analysis report.</li>
                            <li>The presentation.</li>
                        </ul>
                    </div>
                    <div className={classes.content}>
                        <h4>Grading criteria:</h4>
                        <p>Students will be graded based on the assignment's completeness, data analysis accuracy, and presentation quality. Additionally, the tutor will evaluate their ability to communicate insights from the data.</p>
                    </div>
                    <div className={classes.content}>
                        <h4>Note:</h4>
                        <p>This assignment is designed to give students a hands-on introduction to data analysis and its real-world applications. Tutors can tailor the topic and data collection method to the student's interests and available resources.</p>
                    </div>
                </div>
                <div className={classes.footer}>
                    <div>
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10.5L9 12.5L13 8.5M19 10.5C19 15.4706 14.9706 19.5 10 19.5C5.02944 19.5 1 15.4706 1 10.5C1 5.52944 5.02944 1.5 10 1.5C14.9706 1.5 19 5.52944 19 10.5Z" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span
                            onClick={() => {
                                setDisplayApproveSubmissionModal(true)
                            }}
                        >Approve submission</span>
                    </div>
                    <div>
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.85 11.5L12.85 9.5H16V11.5H14.85ZM18.775 21.125L16.5 18.85C15.6833 19.3833 14.8125 19.7917 13.8875 20.075C12.9625 20.3583 12 20.5 11 20.5C9.61667 20.5 8.31667 20.2375 7.1 19.7125C5.88333 19.1875 4.825 18.475 3.925 17.575C3.025 16.675 2.3125 15.6167 1.7875 14.4C1.2625 13.1833 1 11.8833 1 10.5C1 9.5 1.14167 8.5375 1.425 7.6125C1.70833 6.6875 2.11667 5.81667 2.65 5L0.375 2.725L1.8 1.3L20.2 19.7L18.775 21.125ZM19.35 16L17.9 14.55C18.2667 13.9167 18.5417 13.2625 18.725 12.5875C18.9083 11.9125 19 11.2167 19 10.5C19 8.28333 18.2208 6.39583 16.6625 4.8375C15.1042 3.27917 13.2167 2.5 11 2.5C10.2833 2.5 9.5875 2.59167 8.9125 2.775C8.2375 2.95833 7.58333 3.23333 6.95 3.6L5.5 2.15C6.31667 1.61667 7.1875 1.20833 8.1125 0.925C9.0375 0.641667 10 0.5 11 0.5C12.3833 0.5 13.6833 0.7625 14.9 1.2875C16.1167 1.8125 17.175 2.525 18.075 3.425C18.975 4.325 19.6875 5.38333 20.2125 6.6C20.7375 7.81667 21 9.11667 21 10.5C21 11.5 20.8583 12.4625 20.575 13.3875C20.2917 14.3125 19.8833 15.1833 19.35 16ZM15.05 17.4L9.15 11.5H6V9.5H7.15L4.1 6.45C3.73333 7.08333 3.45833 7.7375 3.275 8.4125C3.09167 9.0875 3 9.78333 3 10.5C3 12.7167 3.77917 14.6042 5.3375 16.1625C6.89583 17.7208 8.78333 18.5 11 18.5C11.7167 18.5 12.4125 18.4083 13.0875 18.225C13.7625 18.0417 14.4167 17.7667 15.05 17.4Z" fill="#664EFE" />
                        </svg>
                        <span
                            onClick={() => {
                                setDisplayRejectSubmissionModal(true)
                            }}
                        >Reject submission</span>
                    </div>
                    <div>
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 2.5C0 1.96957 0.210714 1.46086 0.585786 1.08579C0.960859 0.710714 1.46957 0.5 2 0.5H18C18.5304 0.5 19.0391 0.710714 19.4142 1.08579C19.7893 1.46086 20 1.96957 20 2.5V14.5C20 15.0304 19.7893 15.5391 19.4142 15.9142C19.0391 16.2893 18.5304 16.5 18 16.5H2C1.46957 16.5 0.960859 16.2893 0.585786 15.9142C0.210714 15.5391 0 15.0304 0 14.5V2.5ZM3.519 2.5L10 8.171L16.481 2.5H3.519ZM18 3.829L10.659 10.253C10.4766 10.4128 10.2424 10.5009 10 10.5009C9.75755 10.5009 9.52336 10.4128 9.341 10.253L2 3.829V14.5H18V3.829Z" fill="#664EFE" />
                        </svg>
                        <span
                            onClick={() => {
                                setDisplaySendMessageModal(true)
                            }}
                        >Send a message</span>
                    </div>
                </div>
                <Button type="primary">
                    <span>Grade submission</span>
                </Button>
            </div>
        </div>
    );
};


export default AssignmentSubmissionPageContainer
