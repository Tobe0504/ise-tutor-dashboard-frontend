import React, { useState } from 'react'
import classes from './CourseReading.module.css'
import Toast from '../../Components/Toast/Toast';
import Button from '../../Components/Button/Button';
import AcceptedModal from '../../Components/Modals/AcceptedModal/AcceptedModal';
import DiscardModalBody from '../CreatingCourseModulePageContainer/DiscardModalBody';
import DeleteModalBody from '../CreatingCourseModulePageContainer/DeleteModalBody';
import AddLessonResourcesOptional from '../../Components/AddLessonResourcesOptional/AddLessonResourcesOptional';

const BuildFromScratch = () => {
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

            <div className={classes.bulkUpload}>
                <h1>Text Editor</h1>
            </div>

            {(saveLessonAndContinue === 2 || saveLessonAndContinue === 3) && <AddLessonResourcesOptional />}
            {(saveLessonAndContinue === 3 && showToast) && (
                <Toast
                    onClick={() => setShowToast(false)}
                    toastTeaxt="Lesson successfully saved!"
                />
            )}

            <div className={`${classes.addLesson} ${classes.buttonContainer}`}>
                <Button
                    onClick={() => {
                        setSaveLessonAndContinue(prevValue => (prevValue < 3) ? prevValue + 1 : prevValue);
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
        </>
    )
}

export default BuildFromScratch