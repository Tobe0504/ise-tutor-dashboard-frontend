import React, { useContext } from 'react';
import classes from './SelectLessonType.module.css'
import { AppContext } from '../../../Context/AppContext';
import CourseTypeItem from '../../../Components/CourseTypeItem/CourseTypeItem';

const SelectLessonType = () => {
    const { setCurrentStepAndSave, currentStep } = useContext(AppContext);

    const DeliverLearningContent = [
        {
            title: "Video",
            step: () => setCurrentStepAndSave(currentStep + 1),
            detail: 'Engage your students with video content to enhance their learning experience',
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6692 14.8906L15.4063 12.0486C14.5202 11.4579 13.3333 12.0931 13.3333 13.158V18.842C13.3333 19.9069 14.5202 20.5421 15.4063 19.9514L19.6692 17.1094C20.4609 16.5816 20.4609 15.4184 19.6692 14.8906Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            title: "Customize",
            step: () => setCurrentStepAndSave(currentStep + 2),
            detail: 'Tailor your lessons with custom content to suit your unique teaching style and objectives.',
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6663 14.668H10.6663M13.333 20.0013H10.6663M21.333 9.33464H10.6663M26.6663 9.06797V22.9346C26.6663 25.1748 26.6663 26.295 26.2304 27.1506C25.8469 27.9032 25.235 28.5152 24.4823 28.8987C23.6267 29.3346 22.5066 29.3346 20.2663 29.3346H11.733C9.4928 29.3346 8.37269 29.3346 7.51705 28.8987C6.7644 28.5152 6.15248 27.9032 5.76898 27.1506C5.33301 26.295 5.33301 25.1748 5.33301 22.9346V9.06797C5.33301 6.82776 5.33301 5.70765 5.76898 4.85201C6.15248 4.09936 6.7644 3.48744 7.51705 3.10394C8.37269 2.66797 9.4928 2.66797 11.733 2.66797H20.2663C22.5066 2.66797 23.6267 2.66797 24.4823 3.10394C25.235 3.48744 25.8469 4.09936 26.2304 4.85201C26.6663 5.70765 26.6663 6.82776 26.6663 9.06797Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            title: "Reading",
            step: () => setCurrentStepAndSave(currentStep + 3),
            detail: 'Share essential reading materials, articles, and documents.',
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6663 14.668H10.6663M13.333 20.0013H10.6663M21.333 9.33464H10.6663M26.6663 9.06797V22.9346C26.6663 25.1748 26.6663 26.295 26.2304 27.1506C25.8469 27.9032 25.235 28.5152 24.4823 28.8987C23.6267 29.3346 22.5066 29.3346 20.2663 29.3346H11.733C9.4928 29.3346 8.37269 29.3346 7.51705 28.8987C6.7644 28.5152 6.15248 27.9032 5.76898 27.1506C5.33301 26.295 5.33301 25.1748 5.33301 22.9346V9.06797C5.33301 6.82776 5.33301 5.70765 5.76898 4.85201C6.15248 4.09936 6.7644 3.48744 7.51705 3.10394C8.37269 2.66797 9.4928 2.66797 11.733 2.66797H20.2663C22.5066 2.66797 23.6267 2.66797 24.4823 3.10394C25.235 3.48744 25.8469 4.09936 26.2304 4.85201C26.6663 5.70765 26.6663 6.82776 26.6663 9.06797Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            title: "Presentation",
            step: () => setCurrentStepAndSave(currentStep + 4),
            detail: 'Deliver engaging presentations to convey information effectively.',
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0961 28C11.8758 27.1464 13.8803 26.6667 16.0003 26.6667C18.1204 26.6667 20.1248 27.1464 21.9046 28M9.06699 22.6667H22.9337C25.1739 22.6667 26.294 22.6667 27.1496 22.2307C27.9023 21.8472 28.5142 21.2353 28.8977 20.4826C29.3337 19.627 29.3337 18.5069 29.3337 16.2667V10.4C29.3337 8.15979 29.3337 7.03969 28.8977 6.18404C28.5142 5.43139 27.9023 4.81947 27.1496 4.43597C26.294 4 25.1739 4 22.9337 4H9.06699C6.82678 4 5.70668 4 4.85103 4.43597C4.09838 4.81947 3.48646 5.43139 3.10297 6.18404C2.66699 7.03969 2.66699 8.15979 2.66699 10.4V16.2667C2.66699 18.5069 2.66699 19.627 3.10297 20.4826C3.48646 21.2353 4.09838 21.8472 4.85103 22.2307C5.70668 22.6667 6.82678 22.6667 9.06699 22.6667Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
    ]

    const AssessmentTools = [
        {
            title: "Quiz",
            step: () => setCurrentStepAndSave(currentStep + 5),
            detail: "Test students' understanding of essential concepts with interactive quizzes.",
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.6668 12.668V9.06797C26.6668 6.82776 26.6668 5.70765 26.2309 4.85201C25.8474 4.09936 25.2354 3.48744 24.4828 3.10394C23.6271 2.66797 22.507 2.66797 20.2668 2.66797H11.7335C9.49329 2.66797 8.37318 2.66797 7.51753 3.10394C6.76489 3.48744 6.15296 4.09936 5.76947 4.85201C5.3335 5.70765 5.3335 6.82776 5.3335 9.06797V22.9346C5.3335 25.1748 5.3335 26.295 5.76947 27.1506C6.15296 27.9032 6.76489 28.5152 7.51753 28.8987C8.37318 29.3346 9.49329 29.3346 11.7335 29.3346H18.6668M18.6668 14.668H10.6668M13.3335 20.0013H10.6668M21.3335 9.33464H10.6668M22.0002 20.0043C22.2351 19.3365 22.6988 18.7733 23.3091 18.4146C23.9195 18.0559 24.6371 17.9248 25.3349 18.0445C26.0326 18.1641 26.6655 18.5269 27.1214 19.0685C27.5773 19.6101 27.8269 20.2956 27.8258 21.0035C27.8258 23.002 24.8281 24.0013 24.8281 24.0013M24.8667 28.0013H24.88" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            title: "Module assessment",
            step: () => setCurrentStepAndSave(currentStep + 6),
            detail: 'Assign hands-on tasks and projects to put knowledge and skills into practice.',
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6663 3.02734V8.53473C18.6663 9.28147 18.6663 9.65484 18.8117 9.94005C18.9395 10.1909 19.1435 10.3949 19.3944 10.5227C19.6796 10.6681 20.0529 10.6681 20.7997 10.6681H26.3071M13.133 16.0043C13.3679 15.3365 13.8316 14.7733 14.442 14.4146C15.0523 14.0559 15.7699 13.9248 16.4677 14.0445C17.1654 14.1641 17.7983 14.5269 18.2542 15.0685C18.7102 15.6101 18.9597 16.2956 18.9586 17.0035C18.9586 19.002 15.9609 20.0013 15.9609 20.0013M15.9997 24.0013H16.013M18.6663 2.66797H11.733C9.4928 2.66797 8.37269 2.66797 7.51705 3.10394C6.7644 3.48744 6.15248 4.09936 5.76898 4.85201C5.33301 5.70765 5.33301 6.82776 5.33301 9.06797V22.9346C5.33301 25.1748 5.33301 26.295 5.76898 27.1506C6.15248 27.9032 6.7644 28.5152 7.51705 28.8987C8.37269 29.3346 9.4928 29.3346 11.733 29.3346H20.2663C22.5066 29.3346 23.6267 29.3346 24.4823 28.8987C25.235 28.5152 25.8469 27.9032 26.2304 27.1506C26.6663 26.295 26.6663 25.1748 26.6663 22.9346V10.668L18.6663 2.66797Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            title: "Final exam",
            step: () => setCurrentStepAndSave(currentStep + 7),
            detail: 'Evaluate overall course comprehension with a comprehensive final exam.',
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6668 3.02734V8.53473C18.6668 9.28147 18.6668 9.65484 18.8122 9.94005C18.94 10.1909 19.144 10.3949 19.3948 10.5227C19.6801 10.6681 20.0534 10.6681 20.8002 10.6681H26.3075M13.1335 16.0043C13.3684 15.3365 13.8321 14.7733 14.4424 14.4146C15.0528 14.0559 15.7704 13.9248 16.4682 14.0445C17.1659 14.1641 17.7988 14.5269 18.2547 15.0685C18.7106 15.6101 18.9602 16.2956 18.9591 17.0035C18.9591 19.002 15.9614 20.0013 15.9614 20.0013M16.0002 24.0013H16.0135M18.6668 2.66797H11.7335C9.49329 2.66797 8.37318 2.66797 7.51753 3.10394C6.76489 3.48744 6.15296 4.09936 5.76947 4.85201C5.3335 5.70765 5.3335 6.82776 5.3335 9.06797V22.9346C5.3335 25.1748 5.3335 26.295 5.76947 27.1506C6.15296 27.9032 6.76489 28.5152 7.51753 28.8987C8.37318 29.3346 9.49329 29.3346 11.7335 29.3346H20.2668C22.507 29.3346 23.6271 29.3346 24.4828 28.8987C25.2354 28.5152 25.8474 27.9032 26.2309 27.1506C26.6668 26.295 26.6668 25.1748 26.6668 22.9346V10.668L18.6668 2.66797Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
    ]
    return (
        <div className={classes.selectType}>
            <div>
                <h3>Select lesson type</h3>
                <svg
                    onClick={() => setCurrentStepAndSave(currentStep - 1)}
                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div className={classes.selectContent}>
                <h4>Deliver learning content</h4>
                <div>
                    {DeliverLearningContent.map((data, i) => {
                        return (
                            <CourseTypeItem
                                key={i}
                                title={data.title}
                                details={data.detail}
                                svg={data.icon}
                                onClick={data.step}
                            />
                        )
                    })}
                </div>
                <div className={classes.divider}></div>
                <h4>Assessment tools</h4>
                <div>
                    {AssessmentTools.map((data, i) => {
                        return (
                            <CourseTypeItem
                                key={i}
                                title={data.title}
                                details={data.detail}
                                svg={data.icon}
                                onClick={data.step}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SelectLessonType
