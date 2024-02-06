import React, { useContext } from 'react';
import classes from './CreatingCourseModulePageContainer.module.css';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import TextArea from '../../Components/TextArea/TextArea';
import { useNavigate } from 'react-router-dom';
import TypeItem from '../../Components/TypeItem/TypeItem';
import CourseReading from './CourseReading/CourseReading';
import { AppContext } from '../../Context/AppContext';

const CreatingCourseModulePageContainer = () => {
    const navigate = useNavigate();

    const { setCurrentStep, setCurrentStepAndSave, currentStep } = useContext(AppContext);

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
            step: () => setCurrentStepAndSave(currentStep + 1),
            detail: 'Tailor your lessons with custom content to suit your unique teaching style and objectives.',
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6663 14.668H10.6663M13.333 20.0013H10.6663M21.333 9.33464H10.6663M26.6663 9.06797V22.9346C26.6663 25.1748 26.6663 26.295 26.2304 27.1506C25.8469 27.9032 25.235 28.5152 24.4823 28.8987C23.6267 29.3346 22.5066 29.3346 20.2663 29.3346H11.733C9.4928 29.3346 8.37269 29.3346 7.51705 28.8987C6.7644 28.5152 6.15248 27.9032 5.76898 27.1506C5.33301 26.295 5.33301 25.1748 5.33301 22.9346V9.06797C5.33301 6.82776 5.33301 5.70765 5.76898 4.85201C6.15248 4.09936 6.7644 3.48744 7.51705 3.10394C8.37269 2.66797 9.4928 2.66797 11.733 2.66797H20.2663C22.5066 2.66797 23.6267 2.66797 24.4823 3.10394C25.235 3.48744 25.8469 4.09936 26.2304 4.85201C26.6663 5.70765 26.6663 6.82776 26.6663 9.06797Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            title: "Reading",
            step: () => setCurrentStepAndSave(currentStep + 1),
            detail: 'Share essential reading materials, articles, and documents.',
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6663 14.668H10.6663M13.333 20.0013H10.6663M21.333 9.33464H10.6663M26.6663 9.06797V22.9346C26.6663 25.1748 26.6663 26.295 26.2304 27.1506C25.8469 27.9032 25.235 28.5152 24.4823 28.8987C23.6267 29.3346 22.5066 29.3346 20.2663 29.3346H11.733C9.4928 29.3346 8.37269 29.3346 7.51705 28.8987C6.7644 28.5152 6.15248 27.9032 5.76898 27.1506C5.33301 26.295 5.33301 25.1748 5.33301 22.9346V9.06797C5.33301 6.82776 5.33301 5.70765 5.76898 4.85201C6.15248 4.09936 6.7644 3.48744 7.51705 3.10394C8.37269 2.66797 9.4928 2.66797 11.733 2.66797H20.2663C22.5066 2.66797 23.6267 2.66797 24.4823 3.10394C25.235 3.48744 25.8469 4.09936 26.2304 4.85201C26.6663 5.70765 26.6663 6.82776 26.6663 9.06797Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            title: "Presentation",
            step: () => setCurrentStepAndSave(currentStep + 1),
            detail: 'Deliver engaging presentations to convey information effectively.',
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0961 28C11.8758 27.1464 13.8803 26.6667 16.0003 26.6667C18.1204 26.6667 20.1248 27.1464 21.9046 28M9.06699 22.6667H22.9337C25.1739 22.6667 26.294 22.6667 27.1496 22.2307C27.9023 21.8472 28.5142 21.2353 28.8977 20.4826C29.3337 19.627 29.3337 18.5069 29.3337 16.2667V10.4C29.3337 8.15979 29.3337 7.03969 28.8977 6.18404C28.5142 5.43139 27.9023 4.81947 27.1496 4.43597C26.294 4 25.1739 4 22.9337 4H9.06699C6.82678 4 5.70668 4 4.85103 4.43597C4.09838 4.81947 3.48646 5.43139 3.10297 6.18404C2.66699 7.03969 2.66699 8.15979 2.66699 10.4V16.2667C2.66699 18.5069 2.66699 19.627 3.10297 20.4826C3.48646 21.2353 4.09838 21.8472 4.85103 22.2307C5.70668 22.6667 6.82678 22.6667 9.06699 22.6667Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
    ]

    const AssessmentTools = [
        {
            title: "Quiz",
            detail: "Test students' understanding of essential concepts with interactive quizzes.",
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.6668 12.668V9.06797C26.6668 6.82776 26.6668 5.70765 26.2309 4.85201C25.8474 4.09936 25.2354 3.48744 24.4828 3.10394C23.6271 2.66797 22.507 2.66797 20.2668 2.66797H11.7335C9.49329 2.66797 8.37318 2.66797 7.51753 3.10394C6.76489 3.48744 6.15296 4.09936 5.76947 4.85201C5.3335 5.70765 5.3335 6.82776 5.3335 9.06797V22.9346C5.3335 25.1748 5.3335 26.295 5.76947 27.1506C6.15296 27.9032 6.76489 28.5152 7.51753 28.8987C8.37318 29.3346 9.49329 29.3346 11.7335 29.3346H18.6668M18.6668 14.668H10.6668M13.3335 20.0013H10.6668M21.3335 9.33464H10.6668M22.0002 20.0043C22.2351 19.3365 22.6988 18.7733 23.3091 18.4146C23.9195 18.0559 24.6371 17.9248 25.3349 18.0445C26.0326 18.1641 26.6655 18.5269 27.1214 19.0685C27.5773 19.6101 27.8269 20.2956 27.8258 21.0035C27.8258 23.002 24.8281 24.0013 24.8281 24.0013M24.8667 28.0013H24.88" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            title: "Module assessment",
            detail: 'Assign hands-on tasks and projects to put knowledge and skills into practice.',
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6663 3.02734V8.53473C18.6663 9.28147 18.6663 9.65484 18.8117 9.94005C18.9395 10.1909 19.1435 10.3949 19.3944 10.5227C19.6796 10.6681 20.0529 10.6681 20.7997 10.6681H26.3071M13.133 16.0043C13.3679 15.3365 13.8316 14.7733 14.442 14.4146C15.0523 14.0559 15.7699 13.9248 16.4677 14.0445C17.1654 14.1641 17.7983 14.5269 18.2542 15.0685C18.7102 15.6101 18.9597 16.2956 18.9586 17.0035C18.9586 19.002 15.9609 20.0013 15.9609 20.0013M15.9997 24.0013H16.013M18.6663 2.66797H11.733C9.4928 2.66797 8.37269 2.66797 7.51705 3.10394C6.7644 3.48744 6.15248 4.09936 5.76898 4.85201C5.33301 5.70765 5.33301 6.82776 5.33301 9.06797V22.9346C5.33301 25.1748 5.33301 26.295 5.76898 27.1506C6.15248 27.9032 6.7644 28.5152 7.51705 28.8987C8.37269 29.3346 9.4928 29.3346 11.733 29.3346H20.2663C22.5066 29.3346 23.6267 29.3346 24.4823 28.8987C25.235 28.5152 25.8469 27.9032 26.2304 27.1506C26.6663 26.295 26.6663 25.1748 26.6663 22.9346V10.668L18.6663 2.66797Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            title: "Final exam",
            detail: 'Evaluate overall course comprehension with a comprehensive final exam.',
            icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6668 3.02734V8.53473C18.6668 9.28147 18.6668 9.65484 18.8122 9.94005C18.94 10.1909 19.144 10.3949 19.3948 10.5227C19.6801 10.6681 20.0534 10.6681 20.8002 10.6681H26.3075M13.1335 16.0043C13.3684 15.3365 13.8321 14.7733 14.4424 14.4146C15.0528 14.0559 15.7704 13.9248 16.4682 14.0445C17.1659 14.1641 17.7988 14.5269 18.2547 15.0685C18.7106 15.6101 18.9602 16.2956 18.9591 17.0035C18.9591 19.002 15.9614 20.0013 15.9614 20.0013M16.0002 24.0013H16.0135M18.6668 2.66797H11.7335C9.49329 2.66797 8.37318 2.66797 7.51753 3.10394C6.76489 3.48744 6.15296 4.09936 5.76947 4.85201C5.3335 5.70765 5.3335 6.82776 5.3335 9.06797V22.9346C5.3335 25.1748 5.3335 26.295 5.76947 27.1506C6.15296 27.9032 6.76489 28.5152 7.51753 28.8987C8.37318 29.3346 9.49329 29.3346 11.7335 29.3346H20.2668C22.507 29.3346 23.6271 29.3346 24.4828 28.8987C25.2354 28.5152 25.8474 27.9032 26.2309 27.1506C26.6668 26.295 26.6668 25.1748 26.6668 22.9346V10.668L18.6668 2.66797Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
    ]


    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div
                    onClick={() => { navigate('/dashboard') }}
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 12L2.25 9M2.25 9L5.25 6M2.25 9L15.75 9" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Back to dashboard</span>
                </div>
                <div>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.22766 9C8.77678 7.83481 10.2584 7 12.0001 7C14.2092 7 16.0001 8.34315 16.0001 10C16.0001 11.3994 14.7224 12.5751 12.9943 12.9066C12.4519 13.0106 12.0001 13.4477 12.0001 14M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <Button
                        type='secondary'
                        onClick={() => { navigate('/courses/create-module/preview') }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2.45825 12C3.73253 7.94288 7.52281 5 12.0004 5C16.4781 5 20.2684 7.94291 21.5426 12C20.2684 16.0571 16.4781 19 12.0005 19C7.52281 19 3.73251 16.0571 2.45825 12Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>Preview</span>
                    </Button>
                </div>
            </div>
            <div className={classes.body}>
                <div className={classes.course}>
                    <h3>Frontend Development Course</h3>
                    <div className={classes.moduleTitle}>
                        <h4>Module 1: Untitled module</h4>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 9L12 16L5 9" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className={`${classes.moduleTitle} ${classes.moduleWeek}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.99982 19.2311C8.66135 19.2311 8.37161 19.1106 8.13059 18.8695C7.88956 18.6285 7.76904 18.3388 7.76904 18.0003C7.76904 17.6618 7.88956 17.3721 8.13059 17.1311C8.37161 16.89 8.66135 16.7695 8.99982 16.7695C9.33828 16.7695 9.62803 16.89 9.86904 17.1311C10.1101 17.3721 10.2306 17.6618 10.2306 18.0003C10.2306 18.3388 10.1101 18.6285 9.86904 18.8695C9.62803 19.1106 9.33828 19.2311 8.99982 19.2311ZM14.9998 19.2311C14.6614 19.2311 14.3716 19.1106 14.1306 18.8695C13.8896 18.6285 13.769 18.3388 13.769 18.0003C13.769 17.6618 13.8896 17.3721 14.1306 17.1311C14.3716 16.89 14.6614 16.7695 14.9998 16.7695C15.3383 16.7695 15.628 16.89 15.869 17.1311C16.1101 17.3721 16.2306 17.6618 16.2306 18.0003C16.2306 18.3388 16.1101 18.6285 15.869 18.8695C15.628 19.1106 15.3383 19.2311 14.9998 19.2311ZM8.99982 13.2311C8.66135 13.2311 8.37161 13.1106 8.13059 12.8695C7.88956 12.6285 7.76904 12.3388 7.76904 12.0003C7.76904 11.6618 7.88956 11.3721 8.13059 11.1311C8.37161 10.89 8.66135 10.7695 8.99982 10.7695C9.33828 10.7695 9.62803 10.89 9.86904 11.1311C10.1101 11.3721 10.2306 11.6618 10.2306 12.0003C10.2306 12.3388 10.1101 12.6285 9.86904 12.8695C9.62803 13.1106 9.33828 13.2311 8.99982 13.2311ZM14.9998 13.2311C14.6614 13.2311 14.3716 13.1106 14.1306 12.8695C13.8896 12.6285 13.769 12.3388 13.769 12.0003C13.769 11.6618 13.8896 11.3721 14.1306 11.1311C14.3716 10.89 14.6614 10.7695 14.9998 10.7695C15.3383 10.7695 15.628 10.89 15.869 11.1311C16.1101 11.3721 16.2306 11.6618 16.2306 12.0003C16.2306 12.3388 16.1101 12.6285 15.869 12.8695C15.628 13.1106 15.3383 13.2311 14.9998 13.2311ZM8.99982 7.23108C8.66135 7.23108 8.37161 7.11056 8.13059 6.86953C7.88956 6.62851 7.76904 6.33877 7.76904 6.00031C7.76904 5.66184 7.88956 5.3721 8.13059 5.13108C8.37161 4.89005 8.66135 4.76953 8.99982 4.76953C9.33828 4.76953 9.62803 4.89005 9.86904 5.13108C10.1101 5.3721 10.2306 5.66184 10.2306 6.00031C10.2306 6.33877 10.1101 6.62851 9.86904 6.86953C9.62803 7.11056 9.33828 7.23108 8.99982 7.23108ZM14.9998 7.23108C14.6614 7.23108 14.3716 7.11056 14.1306 6.86953C13.8896 6.62851 13.769 6.33877 13.769 6.00031C13.769 5.66184 13.8896 5.3721 14.1306 5.13108C14.3716 4.89005 14.6614 4.76953 14.9998 4.76953C15.3383 4.76953 15.628 4.89005 15.869 5.13108C16.1101 5.3721 16.2306 5.66184 16.2306 6.00031C16.2306 6.33877 16.1101 6.62851 15.869 6.86953C15.628 7.11056 15.3383 7.23108 14.9998 7.23108Z" fill="#2E2E2E" />
                        </svg>
                        <h4>Week 1: Week 1: Introduction to Frameworks</h4>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 9L12 16L5 9" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className={classes.moduleButtons}>
                        <Button
                            type='secondary'
                            onClick={() => setCurrentStep(4)}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4V20M20 12L4 12" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>Add week</span>
                        </Button>
                        <Button
                            type='secondary'
                            onClick={() => setCurrentStep(1)}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4V20M20 12L4 12" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>Add lesson</span>
                        </Button>
                    </div>
                    <div>
                        <Button>
                            <span>Add new module</span>
                        </Button>
                    </div>
                </div>
                {currentStep === 1 && (
                    <div className={classes.addModules}>
                        <h3>Add module details </h3>
                        <p>Enhance module clarity with additional details.</p>
                        <Input
                            isRequired
                            label="Add module title"
                            placeholder="Untitled module "
                        />
                        <TextArea
                            isRequired
                            label="Module description"
                            placeholder="Add module description here"
                        />
                        <TextArea
                            isRequired
                            label="Module objective"
                            placeholder="Add module objective here"
                        />
                        <div className={classes.addModulesBottom}>
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <Button
                                type='secondary'
                                onClick={() => setCurrentStepAndSave(currentStep - 1)}
                            >
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 18.5L18 6.5M6 6.5L18 18.5" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Close</span>
                            </Button>
                            <Button
                                type='primary'
                                onClick={() => setCurrentStepAndSave(currentStep + 1)}
                            >
                                <span>Save and continue</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 8L21 12M21 12L17 16M21 12L3 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                )}
                {currentStep === 2 && (
                    <div className={classes.addModules}>
                        <h3>Add new week to this module</h3>
                        <p>Enter the title for the new week.</p>
                        <Input
                            isRequired
                            label="Enter week title"
                            placeholder="Untitled week "
                        />
                        <div className={classes.addModulesBottom}>
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <Button
                                type='secondary'
                                onClick={() => setCurrentStepAndSave(currentStep - 1)}
                            >
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 16.5L3 12.5M3 12.5L7 8.5M3 12.5L21 12.5" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Back</span>
                            </Button>
                            <Button
                                type='primary'
                                onClick={() => setCurrentStepAndSave(currentStep + 1)}
                            >
                                <span>Save and continue</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 8L21 12M21 12L17 16M21 12L3 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                )}
                {currentStep === 3 && (
                    <div className={`${classes.addModules} ${classes.addEngagingContent}`}>
                        <h3>Add engaging lesson content</h3>
                        <p>Include texts, videos and pictures to engage your students. </p>
                        <div className={classes.addModulesBottom}>
                            <Button
                                type='primary'
                                onClick={() => setCurrentStep(5)}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4V20M20 12L4 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Add lesson</span>
                            </Button>
                        </div>
                    </div>
                )}
                {currentStep === 4 && (
                    <div className={`${classes.addModules} ${classes.addEngagingContent}`}>
                        <h3>Add week to your modules</h3>
                        <p>Give your course structure with weekly content.</p>
                        <div className={classes.addModulesBottom}>
                            <Button
                                type='primary'
                                onClick={() => setCurrentStep(2)}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4V20M20 12L4 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Add week</span>
                            </Button>
                        </div>
                    </div>
                )}
                {currentStep === 5 && (
                    <div className={`${classes.addModules} ${classes.selectType}`}>
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
                                        <TypeItem
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
                                        <TypeItem
                                            key={i}
                                            title={data.title}
                                            details={data.detail}
                                            svg={data.icon}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )}
                {currentStep === 6 && <CourseReading />}
            </div>
        </div>
    )
}

export default CreatingCourseModulePageContainer
