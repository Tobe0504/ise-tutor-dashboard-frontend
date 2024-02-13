import Button from '../../Components/Button/Button'
import DragAndDropInput from '../../Components/DragAndDropInput/DragAndDropInput'
import AcceptedModal from '../../Components/Modals/AcceptedModal/AcceptedModal'
import DeleteModalBody from '../CreatingCourseModulePageContainer/DeleteModalBody'
import DiscardModalBody from '../CreatingCourseModulePageContainer/DiscardModalBody'
import classes from './CourseModuleAssessment.module.css'
import { useState } from 'react'
import Input from '../../Components/Input/Input'
import TextArea from '../../Components/TextArea/TextArea'
import Toast from '../../Components/Toast/Toast'
import { useNavigate } from 'react-router-dom'

const BulkUploadComponent = () => {
    const navigate = useNavigate();


    // States
    const [displayDiscardModal, setDisplayDiscardModal] =
        useState(false);
    const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
    const [saveLessonAndContinue, setSaveLessonAndContinue] = useState(1);
    const [showToast, setShowToast] = useState(false);

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
                <div className={(saveLessonAndContinue === 2) ? classes.namedAssignmentDetails : classes.addAssignmentDetails}>
                    <h1>Enter assignment details</h1>
                    <div className={classes.assignmentDetails}>
                        <Input
                            isRequired
                            label='Add assignment title'
                            placeholder='Untitled lesson'
                            errorMessage='Please enter a valid lesson name  '
                        />
                        <TextArea
                            label='Assignment instruction'
                            placeholder='Add instructions for this assignment here '
                        />
                    </div>
                    {(saveLessonAndContinue === 1 && saveLessonAndContinue === 1) && (
                        <div className={classes.addModulesBottom}>
                            <div onClick={() => navigate('/support')}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

            {saveLessonAndContinue === 3 && (
                <>
                    <h1 className={classes.namedAssignmentDetails}>First assignment</h1>
                    <div className={classes.addLesson}>
                        <Input
                            isRequired
                            label='Title'
                            placeholder='Untitled lesson'
                            errorMessage='Please enter a valid lesson name  '
                        />
                    </div>
                </>
            )}

            {(saveLessonAndContinue === 2 || saveLessonAndContinue === 3) && (
                <div className={classes.addLesson}>
                    <div className={classes.textEditor}>
                        <div className={classes.textEditorHeader}>
                            <h4>Add assignment details</h4>
                            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.66665 11L11 1.66667L20.3333 11" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <h1>Text Editor</h1>
                    </div>
                </div>
            )}

            {saveLessonAndContinue === 2 && (
                <div className={classes.addLesson}>
                    <DragAndDropInput
                        acceptedFileTypes=".pdf, .doc, .docx"
                    />
                    <p className={classes.info}>You can upload files with the extensions: doc, pdf</p>
                </div>
            )}

            {saveLessonAndContinue === 3 && (
                <div className={classes.addLesson}>
                    <div className={classes.fileUpload}>
                        <h3>Uploaded File</h3>
                        <div className={classes.file}>
                            <p>First presentation.pdf</p>
                            <svg onClick={() => {
                                setDisplayDeleteModal(true);
                            }}
                                width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 7L18.6327 19.1425C18.5579 20.1891 17.687 21 16.6378 21H8.36224C7.31296 21 6.44208 20.1891 6.36732 19.1425L5.5 7M10.5 11V17M14.5 11V17M15.5 7V4C15.5 3.44772 15.0523 3 14.5 3H10.5C9.94772 3 9.5 3.44772 9.5 4V7M4.5 7H20.5" stroke="#DC362E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            )}

            {(saveLessonAndContinue === 3 && showToast) && (
                <Toast
                    onClick={() => setShowToast(false)}
                    toastTeaxt="Lesson saved!"
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

export default BulkUploadComponent