import React, { useState } from 'react';
import classes from './CreatingCourseModulePageContainer.module.css';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import TextArea from '../../Components/TextArea/TextArea';

const CreatingCourseModulePageContainer = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleSaveAndContinue = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        setCurrentStep(currentStep - 1);
    };

    const handlePrimaryButtonClick = () => {
        setCurrentStep(1);
    };


    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div>
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
                    <Button type='secondary'>
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
                    <div className={classes.module}></div>
                    <div className={classes.moduleButtons}>
                        <Button
                            type='secondary'
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4V20M20 12L4 12" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>Add week</span>
                        </Button>
                        <Button
                            type='secondary'
                            onClick={handlePrimaryButtonClick}
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
                            label="Enter week title *"
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
                                onClick={handlePrimaryButtonClick}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4V20M20 12L4 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Add lesson</span>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CreatingCourseModulePageContainer
