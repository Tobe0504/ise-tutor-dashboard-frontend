import React, { useState } from 'react';
import classes from './CreatingCourseModulePageContainer.module.css';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import TextArea from '../../Components/TextArea/TextArea';
import { useNavigate } from 'react-router-dom';
import TypeItem from '../../Components/TypeItem/TypeItem';

const CreatingCourseModulePageContainer = () => {
    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(1);

    const handleSaveAndContinue = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleAddLessonModules = () => {
        setCurrentStep(1);
    };

    const handleAddWeek = () => {
        setCurrentStep(5);
    };

    const handleAddWeekModules = () => {
        setCurrentStep(2);
    };


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
                            onClick={handleAddWeek}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4V20M20 12L4 12" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>Add week</span>
                        </Button>
                        <Button
                            type='secondary'
                            onClick={handleAddLessonModules}
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
                                onClick={handleBack}
                            >
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 18.5L18 6.5M6 6.5L18 18.5" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Close</span>
                            </Button>
                            <Button
                                type='primary'
                                onClick={handleSaveAndContinue}
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
                                onClick={handleBack}
                            >
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 16.5L3 12.5M3 12.5L7 8.5M3 12.5L21 12.5" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Back</span>
                            </Button>
                            <Button
                                type='primary'
                                onClick={handleSaveAndContinue}
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
                                onClick={handleSaveAndContinue}
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
                    <div className={`${classes.addModules} ${classes.selectType}`}>
                        <div>
                            <h3>Select lesson type</h3>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 18L18 6M6 6L18 18" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <TypeItem />
                    </div>
                )}
                {currentStep === 5 && (
                    <div className={`${classes.addModules} ${classes.addEngagingContent}`}>
                        <h3>Add week to your modules</h3>
                        <p>Give your course structure with weekly content.</p>
                        <div className={classes.addModulesBottom}>
                            <Button
                                type='primary'
                                onClick={handleAddWeekModules}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4V20M20 12L4 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Add week</span>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CreatingCourseModulePageContainer
