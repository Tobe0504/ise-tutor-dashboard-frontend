import Button from '../../../Components/Button/Button'
import DragAndDropInput from '../../../Components/DragAndDropInput/DragAndDropInput'
import AcceptedModal from '../../../Components/Modals/AcceptedModal/AcceptedModal'
import ProgressBar from '../../../Components/ProgressBar/ProgressBar'
import DeleteModalBody from '../../CreatingCourseModulePageContainer/DeleteModalBody'
import DiscardModalBody from '../../CreatingCourseModulePageContainer/DiscardModalBody'
import AddLessonResourcesOptional from '../../../Components/AddLessonResourcesOptional/AddLessonResourcesOptional'
import classes from '../CourseReading.module.css'
import { useState } from 'react'

const BulkUploadComponent = () => {

    // States
    const [displayDiscardModal, setDisplayDiscardModal] =
        useState(false);
    const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
    const [saveLessonAndContinue, setSaveLessonAndContinue] = useState(1);

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
                <ul>
                    <li>The contents of the file will automatically be used to create the reading content.</li>
                    <li>Keep the file size below 10 MB to ensure quick loading and smooth access for your students.</li>
                </ul>
                {saveLessonAndContinue === 1 && (
                    <>
                        <DragAndDropInput />
                        <p className={classes.info}>You can upload files with the extensions: doc, pdf</p>
                    </>)}
                {saveLessonAndContinue === 2 && (
                    <div className={classes.fileUpload}>
                        <h3>File Upload</h3>
                        <div className={classes.file}>
                            <div>
                                <p>First reading.doc</p>
                                <ProgressBar percentage={85} color="#fff" />
                                <span>Uploading({85}%)</span>
                            </div>
                            <Button type='secondary'>Cancel</Button>
                        </div>
                    </div>
                )}
            </div>
            {saveLessonAndContinue === 3 && <AddLessonResourcesOptional />}


            <div className={`${classes.addLesson} ${classes.buttonContainer}`}>
                <Button onClick={() => setSaveLessonAndContinue(saveLessonAndContinue + 1)}>
                    <span>Save lesson</span>
                </Button>
                <Button
                    type='secondary'
                    onClick={() => {
                        setDisplayDiscardModal(true);
                    }}
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

export default BulkUploadComponent