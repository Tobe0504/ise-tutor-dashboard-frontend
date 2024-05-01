import Button from '../../../Components/Button/Button';
import classes from './CourseModuleFeedbackPreviewContainer.module.css'
import courseCardImg from '../../../Assets/Images/course-feedback-img-card.png'
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../../Components/Breadcrumbs/Breadcrumbs';
import breadcrumbsBack from "../../../Assets/Images/breadcrumbsBack.svg";


const CourseModuleFeedbackPreviewContainer = () => {
    // Router
    const navigate = useNavigate();
    const { courseReviewId } = useParams();

    // Utils
    const breadCrumbs = {
        image: breadcrumbsBack,
        array: [
            {
                title: "Back to content feedback",
                route: `/courses/feedback/${courseReviewId}`,
            },
            {
                title: "Module 3",
                route: "",
            },
        ],
    };

    const moduleInfo = [
        {
            date: '10/01/2024',
            weekTitle: 'Week 5: Introduction  to UI Framework',
            weekDescription: 'Review the content for coherence. Ensure that',
        },
        {
            date: '10/01/2024',
            weekTitle: 'Week 5: Introduction  to UI Framework',
            weekDescription: 'Review the content for coherence. Ensure that',
        },
        {
            date: '10/01/2024',
            weekTitle: 'Week 5: Introduction  to UI Framework',
            weekDescription: 'Review the content for coherence. Ensure that',
        },
        {
            date: '10/01/2024',
            weekTitle: 'Week 5: Introduction  to UI Framework',
            weekDescription: 'Review the content for coherence. Ensure that',
        },
        {
            date: '10/01/2024',
            weekTitle: 'Week 5: Introduction  to UI Framework',
            weekDescription: 'Review the content for coherence. Ensure that',
        },
        {
            date: '10/01/2024',
            weekTitle: 'Week 5: Introduction  to UI Framework',
            weekDescription: 'Review the content for coherence. Ensure that',
        },
        {
            date: '10/01/2024',
            weekTitle: 'Week 5: Introduction  to UI Framework',
            weekDescription: 'Review the content for coherence. Ensure that',
        },
    ];

    const src = courseCardImg;

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <svg onClick={() => { navigate(`/courses/feedback/${courseReviewId}`) }} width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.25 7.5L1.25 4.5M1.25 4.5L4.25 1.5M1.25 4.5L14.75 4.5" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p onClick={() => { navigate(`/courses/feedback/${courseReviewId}`) }}>Back to feedback dashboard</p>
            </div>
            <div className={classes.breadCrumbs}>
                <Breadcrumbs {...breadCrumbs} />
            </div>
            <div className={classes.body}>
                <div className={classes.leftSide}>
                    <h2>Module 3: UI frameworks</h2>
                    {moduleInfo.map((data, i) => (
                        <div className={classes.module}>
                            <>
                                <div key={i} className={classes.moduleInfo}>
                                    <p>{data.date}</p>
                                    <h4>{data.weekTitle}</h4>
                                    <span>{data.weekDescription}</span>
                                </div>
                                <div key={i} className={classes.status}>
                                    <p>A</p>
                                </div>
                            </>
                        </div>
                    ))}
                </div>
                <div className={classes.rightSide}>
                    <h1>Week 5: Introduction  to UI Framework</h1>
                    <div className={classes.feedBackMessage}>
                        <h4>Feedback</h4>
                        <p>Review the content for coherence. Ensure that each section logically connects to the next, creating a seamless learning journey. While the content is informative, some explanations could be clearer. Break down complex ideas into simpler terms for better understanding.</p>
                    </div>
                    <div className={classes.attachment}>
                        <h4>Attachment</h4>
                        {src ? (
                            <>
                                <img src={src} alt="Attachment" />
                                <div>
                                    <Button onClick={() => { navigate('/courses/create-module') }}>Edit Module 1</Button>
                                </div>
                            </>
                        ) : (
                            <>
                                <p>No attachment here</p>
                                <div>
                                    <Button onClick={() => { navigate(`/courses/feedback/${courseReviewId}`) }}>Done</Button>
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </div >
    )
}

export default CourseModuleFeedbackPreviewContainer