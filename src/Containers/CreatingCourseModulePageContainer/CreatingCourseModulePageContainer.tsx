import React, { useContext } from 'react';
import classes from './CreatingCourseModulePageContainer.module.css';
import Button from '../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';
import CourseReading from '../CourseReading/CourseReading';
import { AppContext } from '../../Context/AppContext';
import CourseInfoLeftBar from './CourseInfo/CourseInfoLeftBar';
import AddModuleDetails from './AddModulesDetails/AddModuleDetails';
import AddEngagingModule from './AddEngagingModule/AddEngagingModule';
import AddNewWeekModule from './AddNewWeekModule/AddNewWeekModule';
import AddWeekModule from './AddWeekModule/AddWeekModule';
import SelectLessonType from './SelectLessonType/SelectLessonType';
import CoursePresentation from '../CoursePresentation/CoursePresentation';
import CourseVideo from '../CourseVideo/CourseVideo';

const CreatingCourseModulePageContainer = () => {
    const navigate = useNavigate();

    const { currentStep } = useContext(AppContext);

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
                <CourseInfoLeftBar />
                {currentStep === 1 && <AddModuleDetails />}
                {currentStep === 2 && <AddNewWeekModule />}
                {currentStep === 3 && <AddEngagingModule />}
                {currentStep === 4 && <AddWeekModule />}
                {currentStep === 5 && <SelectLessonType />}
                {currentStep === 6 && <CourseVideo />}
                {currentStep === 7 && <h1>Customize</h1>}
                {currentStep === 8 && <CourseReading />}
                {currentStep === 9 && <CoursePresentation />}
                {currentStep === 10 && <h1>Quiz</h1>}
                {currentStep === 11 && <h1>Module Assessment</h1>}
                {currentStep === 12 && <h1>Final Exam</h1>}
            </div>
        </div>
    )
}

export default CreatingCourseModulePageContainer