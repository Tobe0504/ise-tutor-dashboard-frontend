import { useContext } from 'react';
import Button from '../../../Components/Button/Button'
import { AppContext } from '../../../Context/AppContext';
import classes from './CourseInfoLeftBar.module.css';

const CourseInfoLeftBar = () => {
    const { setCurrentStep } = useContext(AppContext);

    return (
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
    )
}

export default CourseInfoLeftBar