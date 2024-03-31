import DropdownWithSearch from '../../Components/DropdownWithSearch/DropdownWithSearch'
import HelloUser from '../../Components/HelloUser/HelloUser'
import classes from './QuizPageContainer.module.css'
import calendarIcon from '../../Assets/Images/calendar.svg'
import { useState } from 'react'
import EmptyTabComponent from '../../Components/EmptyTabComponent/EmptyTabComponent'
import noResultFound from "../../Assets/Images/noResult.svg";

interface QuizData {
    courseName: string;
    quizName: string;
    lastCompletionDate: string;
    noOfResults: number;
    lessonName: string;
}

const QuizPageContainer = () => {
    // States
    const [courseSelected, setCourseSelected] = useState('')
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    const quizData: QuizData[] = [
        {
            courseName: "Frontend development",
            quizName: "Quiz 2.0",
            lastCompletionDate: "13th Dec. 2023",
            noOfResults: 33,
            lessonName: "Quiz knowledge 1.2",
        },
        {
            courseName: "Frontend development",
            quizName: "Quiz 2.0",
            lastCompletionDate: "12th Nov. 2023",
            noOfResults: 33,
            lessonName: "Quiz knowledge 1.2",
        },
        {
            courseName: "Backend development",
            quizName: "Quiz 2.0",
            lastCompletionDate: "10th Sept. 2023",
            noOfResults: 33,
            lessonName: "Quiz knowledge 1.2",
        },
        {
            courseName: "Frontend development",
            quizName: "Quiz 2.0",
            lastCompletionDate: "31th Mar. 2024",
            noOfResults: 33,
            lessonName: "Quiz knowledge 1.2",
        },
    ];

    const filteredQuizData = quizData.filter(data => {
        if (courseSelected && data.courseName !== courseSelected) {
            return false;
        }
        if (selectedDate) {
            const selectedDateString = `${selectedDate.getDate()}th ${selectedDate.toLocaleString('default', { month: 'short' })}. ${selectedDate.getFullYear()}`;
            return data.lastCompletionDate === selectedDateString;
        }
        return true;
    });

    const coursesSet = new Set(quizData.map(data => data.courseName));
    const courses = ['All Courses', ...Array.from(coursesSet)];

    const handleCourseSelection = (selectedCourse: string) => {
        setCourseSelected(selectedCourse === 'All Courses' ? '' : selectedCourse);
    }

    const handleDateSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDateString = event.target.value;
        setSelectedDate(selectedDateString ? new Date(selectedDateString) : null);
    }

    return (
        <div className={classes.container}>
            <HelloUser header="Quiz" paragraph="This shows an overview of all the quiz report in the course(s) you offer. To see a detailed report of individual quiz, go to students." notIncludePay notIncludeBg />

            <div className={classes.quizHeaderDropdowns}>
                <DropdownWithSearch
                    label="Select Course"
                    title="Select a course"
                    options={courses}
                    selected={courseSelected}
                    setSelected={handleCourseSelection}
                />
                <div className={classes.completedDate}>
                    <label htmlFor="completedDate">Completion date</label>
                    <div className={classes.selectDate}>
                        <input
                            type="date"
                            id="completedDate"
                            placeholder="1 week ago"
                            onChange={handleDateSelection}
                        />
                        <img src={calendarIcon} alt="select a date" />
                    </div>
                </div>
            </div>
            <div className={classes.quizDataTableContainer}>
                {filteredQuizData.length === 0 ? (
                    <EmptyTabComponent
                        image={noResultFound}
                        header={`No quizzes found for the selected criteria.`}
                        firstParagraph='Try a new search'
                        imageHeight={280}
                        route=''
                        buttonType='null'
                    />
                ) : (
                    <>
                        <p>Showing {filteredQuizData.length} of {quizData.length} quizzes</p>
                        <div className={classes.body}>
                            <div className={classes.tableHeader}>
                                <p>S/N</p>
                                <span>Course name</span>
                                <span>Quiz name</span>
                                <span>Last completion date</span>
                                <span># of results</span>
                                <span>Lesson name</span>
                            </div>
                            <div className={classes.tableBodyContainer}>
                                {filteredQuizData.map((data, i) => {
                                    return (
                                        <div className={classes.tableBody} key={i}>
                                            <p>{i + 1}</p>
                                            <span>{data.courseName}</span>
                                            <span>{data.quizName}</span>
                                            <span>{data.lastCompletionDate}</span>
                                            <span>{data.noOfResults}</span>
                                            <span>{data.lessonName}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </>
                )}
                {filteredQuizData.length > 0 && (
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
                                    strokeLinecap="round"
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
                )}
            </div>
        </div>
    )
}

export default QuizPageContainer
