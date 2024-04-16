import Button from '../../Components/Button/Button'
import AcceptedModal from '../../Components/Modals/AcceptedModal/AcceptedModal'
import DeleteModalBody from '../CreatingCourseModulePageContainer/DeleteModalBody'
import DiscardModalBody from '../CreatingCourseModulePageContainer/DiscardModalBody'
import classes from './CourseQuiz.module.css'
import { useState } from 'react'
import Input from '../../Components/Input/Input'
import TextArea from '../../Components/TextArea/TextArea'
import Toast from '../../Components/Toast/Toast'
import DropdownWithSearch from '../../Components/DropdownWithSearch/DropdownWithSearch'
import { useNavigate } from 'react-router-dom'

type Answer = {
    id: number;
}

type Question = {
    id: number;
}

const AddQuestionAndAnswerComponent = () => {
    const navigate = useNavigate();


    // States
    const [displayDiscardModal, setDisplayDiscardModal] =
        useState(false);
    const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
    const [saveLessonAndContinue, setSaveLessonAndContinue] = useState(1);
    const [showToast, setShowToast] = useState(false);
    const [answers, setAnswers] = useState<Answer[]>([{ id: 0 }]);
    const [questions, setQuestions] = useState<Question[]>([{ id: 0 }]);

    const addAnswer = () => {
        const newAnswer: Answer = {
            id: answers.length + 1,
        };
        setAnswers([...answers, newAnswer]);
    };

    const deleteAnswer = (id: number) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this answer?");

        if (isConfirmed) {
            const updatedAnswers = answers.filter(answer => answer.id !== id);

            if (updatedAnswers.length >= 1) {
                setAnswers(updatedAnswers);
            } else {
                alert("At least one choice must remain.");
            }
        }
    };

    const addNewQuestion = () => {
        const newQuestion = {
            id: questions.length + 1,
        };
        setQuestions([...questions, newQuestion]);
    };

    const deleteQuestion = (id: number) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this Question?");

        if (isConfirmed) {
            const updatedQuestions = questions.filter(question => question.id !== id);

            if (updatedQuestions.length >= 1) {
                setQuestions(updatedQuestions);
            } else {
                alert("At least one question must remain.");
            }
        }
    };

    return (
        <>
            {displayDiscardModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplayDiscardModal(false);
                    }}
                    body={
                        <DiscardModalBody
                            onClick={() => {
                                setDisplayDiscardModal(false);
                            }}
                            onClick2={() => {
                                setDisplayDiscardModal(false);
                                setSaveLessonAndContinue(prevValue => (prevValue > 1) ? prevValue - 1 : prevValue);
                            }}
                        />
                    }
                />
            )}
            {displayDeleteModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplayDeleteModal(false);
                    }}
                    body={
                        <DeleteModalBody
                            onClick={() => {
                                setDisplayDeleteModal(false);
                            }}
                        />
                    }
                />
            )}

            {(saveLessonAndContinue === 1 || saveLessonAndContinue === 2) && (
                <div className={(saveLessonAndContinue === 2) ? classes.namedQuizDetails : classes.addAssignmentDetails}>
                    <h1>Enter quiz details</h1>
                    <div className={classes.assignmentDetails}>
                        <Input
                            isRequired
                            label='Add quiz title'
                            placeholder='Untitled lesson'
                            errorMessage='Please enter a valid lesson name'
                        />
                        <TextArea
                            label='Quiz instruction'
                            placeholder='Add lesson title here'
                        />
                        <DropdownWithSearch
                            isRequired
                            title="Select"
                            label="Time limit"
                            errorMessage='Please select a quiz duration'
                            options={["10mins", "20mins", "30mins", "45mins", "60mins"]}
                        />
                    </div>
                    {(saveLessonAndContinue === 1 && saveLessonAndContinue === 1) && (
                        <div className={classes.addModulesBottom}>
                            <div>
                                <svg onClick={() => navigate('/support')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <Button
                                type='secondary'
                                onClick={() => {
                                    setDisplayDeleteModal(true);
                                }}
                            >
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 18.5L18 6.5M6 6.5L18 18.5" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Close</span>
                            </Button>
                            <Button
                                type='primary'
                                onClick={() => { setSaveLessonAndContinue(2) }}
                            >
                                <span>Save and continue</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 8L21 12M21 12L17 16M21 12L3 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Button>
                        </div>
                    )}
                </div>
            )}

            {(saveLessonAndContinue === 2 || saveLessonAndContinue === 3) && (
                <>
                    {questions.map((question, index) => (
                        <div className={`${classes.addLesson} ${classes.questionSectionContainer}`} key={question.id}>
                            <div className={classes.questionSection}>
                                <div className={classes.questionSectionHeader}>
                                    <div>
                                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.00001 19.6414C1.54872 19.6414 1.1624 19.4808 0.841044 19.1594C0.519666 18.838 0.358978 18.4517 0.358978 18.0004C0.358978 17.5491 0.519666 17.1628 0.841044 16.8414C1.1624 16.5201 1.54872 16.3594 2.00001 16.3594C2.4513 16.3594 2.83762 16.5201 3.15898 16.8414C3.48036 17.1628 3.64104 17.5491 3.64104 18.0004C3.64104 18.4517 3.48036 18.838 3.15898 19.1594C2.83762 19.4808 2.4513 19.6414 2.00001 19.6414ZM10 19.6414C9.54872 19.6414 9.1624 19.4808 8.84105 19.1594C8.51967 18.838 8.35898 18.4517 8.35898 18.0004C8.35898 17.5491 8.51967 17.1628 8.84105 16.8414C9.1624 16.5201 9.54872 16.3594 10 16.3594C10.4513 16.3594 10.8376 16.5201 11.159 16.8414C11.4804 17.1628 11.641 17.5491 11.641 18.0004C11.641 18.4517 11.4804 18.838 11.159 19.1594C10.8376 19.4808 10.4513 19.6414 10 19.6414ZM2.00001 11.6414C1.54872 11.6414 1.1624 11.4808 0.841044 11.1594C0.519666 10.838 0.358978 10.4517 0.358978 10.0004C0.358978 9.54912 0.519666 9.1628 0.841044 8.84144C1.1624 8.52007 1.54872 8.35938 2.00001 8.35938C2.4513 8.35938 2.83762 8.52007 3.15898 8.84144C3.48036 9.1628 3.64104 9.54912 3.64104 10.0004C3.64104 10.4517 3.48036 10.838 3.15898 11.1594C2.83762 11.4808 2.4513 11.6414 2.00001 11.6414ZM10 11.6414C9.54872 11.6414 9.1624 11.4808 8.84105 11.1594C8.51967 10.838 8.35898 10.4517 8.35898 10.0004C8.35898 9.54912 8.51967 9.1628 8.84105 8.84144C9.1624 8.52007 9.54872 8.35938 10 8.35938C10.4513 8.35938 10.8376 8.52007 11.159 8.84144C11.4804 9.1628 11.641 9.54912 11.641 10.0004C11.641 10.4517 11.4804 10.838 11.159 11.1594C10.8376 11.4808 10.4513 11.6414 10 11.6414ZM2.00001 3.64144C1.54872 3.64144 1.1624 3.48075 0.841044 3.15938C0.519666 2.83802 0.358978 2.4517 0.358978 2.00041C0.358978 1.54912 0.519666 1.1628 0.841044 0.841443C1.1624 0.520065 1.54872 0.359375 2.00001 0.359375C2.4513 0.359375 2.83762 0.520065 3.15898 0.841443C3.48036 1.1628 3.64104 1.54912 3.64104 2.00041C3.64104 2.4517 3.48036 2.83802 3.15898 3.15938C2.83762 3.48075 2.4513 3.64144 2.00001 3.64144ZM10 3.64144C9.54872 3.64144 9.1624 3.48075 8.84105 3.15938C8.51967 2.83802 8.35898 2.4517 8.35898 2.00041C8.35898 1.54912 8.51967 1.1628 8.84105 0.841443C9.1624 0.520065 9.54872 0.359375 10 0.359375C10.4513 0.359375 10.8376 0.520065 11.159 0.841443C11.4804 1.1628 11.641 1.54912 11.641 2.00041C11.641 2.4517 11.4804 2.83802 11.159 3.15938C10.8376 3.48075 10.4513 3.64144 10 3.64144Z" fill="black" />
                                        </svg>
                                        <h3>Question <span>{index + 1}</span></h3>
                                    </div>
                                    <div>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 13H3C1.89543 13 1 12.1046 1 11V3C1 1.89543 1.89543 1 3 1H11C12.1046 1 13 1.89543 13 3V5M7 17H15C16.1046 17 17 16.1046 17 15V7C17 5.89543 16.1046 5 15 5H7C5.89543 5 5 5.89543 5 7V15C5 16.1046 5.89543 17 7 17Z" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <svg
                                            onClick={() => deleteQuestion(question.id)}
                                            width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 5L15.1327 17.1425C15.0579 18.1891 14.187 19 13.1378 19H4.86224C3.81296 19 2.94208 18.1891 2.86732 17.1425L2 5M7 9V15M11 9V15M12 5V2C12 1.44772 11.5523 1 11 1H7C6.44772 1 6 1.44772 6 2V5M1 5H17" stroke="#DC362E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 8L8 0.999999L15 8" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className={classes.textEditor}>
                                    <h4>Question</h4>
                                    <h1>Text Editor</h1>
                                </div>
                            </div>
                            <div className={classes.answerSection}>
                                <span>ANSWERS: Choose single or multiple correct answers</span>
                                <div>
                                    {answers.map((answer, index) => (
                                        <div className={classes.textEditor} key={answer.id}>
                                            <div className={classes.textEditorHeader}>
                                                <h4>Answer <span>{index + 1}</span></h4>
                                                <svg
                                                    width="18"
                                                    height="20"
                                                    viewBox="0 0 18 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    onClick={() => deleteAnswer(answer.id)}
                                                >
                                                    <path
                                                        d="M16 5L15.1327 17.1425C15.0579 18.1891 14.187 19 13.1378 19H4.86224C3.81296 19 2.94208 18.1891 2.86732 17.1425L2 5M7 9V15M11 9V15M12 5V2C12 1.44772 11.5523 1 11 1H7C6.44772 1 6 1.44772 6 2V5M1 5H17"
                                                        stroke="#DC362E"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                            <h1>Text Editor</h1>
                                            <div className={classes.checkBoxForAnswer}>
                                                <input type="checkbox" name={`answer-${index}`} id={`answer-${index}`} />
                                                <p>This is the correct answer</p>
                                            </div>
                                        </div>
                                    ))}
                                    <Button type='secondary' onClick={addAnswer}>Add answer</Button>
                                </div>
                            </div>
                            <div className={classes.explainAnswer}>
                                <h4>Add answer explanation</h4>
                                <h1>Text Editor</h1>
                            </div>
                        </div>
                    ))}

                    <div className={classes.addNewQuestion} onClick={addNewQuestion}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4V20M20 12L4 12" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Add new question</p>
                    </div>
                </>
            )}

            {(saveLessonAndContinue === 3 && showToast) && (
                <Toast
                    onClick={() => setShowToast(false)}
                    toastMessage="Lesson saved!"
                />
            )}

            {(saveLessonAndContinue === 2 || saveLessonAndContinue === 3) && (
                <div className={`${classes.addLesson} ${classes.buttonContainer}`}>
                    <Button
                        onClick={() => {
                            setSaveLessonAndContinue(prevValue => (prevValue < 3) ? prevValue + 1 : prevValue)
                            setShowToast(true);
                        }}
                        className={saveLessonAndContinue === 3 ? classes.inactivePrimary : ''}
                    >
                        <span>Save lesson</span>
                    </Button>
                    <Button
                        type='secondary'
                        onClick={() => {
                            setDisplayDiscardModal(true);
                        }}
                        className={saveLessonAndContinue === 3 ? classes.inactiveSecondary : ''}
                    >
                        <span>Discard changes</span>
                    </Button>
                    <Button
                        onClick={() => {
                            setDisplayDeleteModal(true);
                        }}
                    >
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5 7L18.6327 19.1425C18.5579 20.1891 17.687 21 16.6378 21H8.36224C7.31296 21 6.44208 20.1891 6.36732 19.1425L5.5 7M10.5 11V17M14.5 11V17M15.5 7V4C15.5 3.44772 15.0523 3 14.5 3H10.5C9.94772 3 9.5 3.44772 9.5 4V7M4.5 7H20.5" stroke="#DC362E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>Delete lesson</span>
                    </Button>
                </div>
            )}
        </>
    )
}

export default AddQuestionAndAnswerComponent