import DropdownWithSearch from '../../Components/DropdownWithSearch/DropdownWithSearch'
import HelloUser from '../../Components/HelloUser/HelloUser'
import classes from './QuizPageContainer.module.css'

const QuizPageContainer = () => {
    const quiz = [
        {
            courseName: "Frontend development",
            quizName: "Quiz 2.0",
            lastCompletionDate: "19th Oct. 2023",
            noOfResults: 33,
            lessonName: "Quiz knowldge 1.2",
        },
        {
            courseName: "Frontend development",
            quizName: "Quiz 2.0",
            lastCompletionDate: "19th Oct. 2023",
            noOfResults: 33,
            lessonName: "Quiz knowldge 1.2",
        },
        {
            courseName: "Frontend development",
            quizName: "Quiz 2.0",
            lastCompletionDate: "19th Oct. 2023",
            noOfResults: 33,
            lessonName: "Quiz knowldge 1.2",
        },
        {
            courseName: "Frontend development",
            quizName: "Quiz 2.0",
            lastCompletionDate: "19th Oct. 2023",
            noOfResults: 33,
            lessonName: "Quiz knowldge 1.2",
        },
    ];

    return (
        <div className={classes.container}>
            <HelloUser header="Quiz" paragraph="This shows an overview of all the quiz report in the course(s) you offer. To see a detailed report of individual quiz, go to students." notIncludePay notIncludeBg />

            <div className={classes.quizHeaderDropdowns}>
                <DropdownWithSearch
                    isRequired
                    label="Select course "
                    title="Frontend development"
                    options={[]}
                />
                <div className={classes.completedDate}>
                    <label htmlFor="completedDate">Completion date</label>
                    <input
                        required
                        type="text"
                        id="completedDate"
                        placeholder="1 week ago"
                        onFocus={(e) => (e.target.type = 'date')}
                    />
                </div>
            </div>
            <div className={classes.quizDataTableContainer}>
                <p>Showing 1-4 of 4 quizzes</p>
                <div className={classes.tableHeader}>
                    <p>S/N</p>
                    <span>Course name</span>
                    <span>Quiz name</span>
                    <span>Last completion date</span>
                    <span># of results</span>
                    <span>Lesson name</span>
                </div>
                <div className={classes.tableBodyContainer}>
                    {quiz.map((data, i) => {
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
                                stroke-linecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default QuizPageContainer
