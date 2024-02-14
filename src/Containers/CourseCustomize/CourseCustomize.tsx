import Input from '../../Components/Input/Input'
import classes from './CourseCustomize.module.css'
import Button from '../../Components/Button/Button'
import AcceptedModal from '../../Components/Modals/AcceptedModal/AcceptedModal'
import DeleteModalBody from '../CreatingCourseModulePageContainer/DeleteModalBody'
import DiscardModalBody from '../CreatingCourseModulePageContainer/DiscardModalBody'
import { useState } from 'react'
import Toast from '../../Components/Toast/Toast'
import SelectTypeModal from './SelectTypeModal/SelectTypeModal'

import AddVideoBlock from './AddVideoBlock/AddVideoBlock'
import AddEmbedVideo from './AddEmbedVideo/AddEmbedVideo'
import AddCodeExample from './AddCodeExample/AddCodeExample'
import AddPresentation from './AddPresentation/AddPresentation'
import AddTextAndImage from './AddTextAndImage/AddTextAndImage'


const CourseCustomize = () => {
    const [displayDiscardModal, setDisplayDiscardModal] = useState(false);
    const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
    const [displaySelectTypeModal, setDisplaySelectTypeModal] = useState(false);
    const [saveLessonAndContinue, setSaveLessonAndContinue] = useState(1);
    const [showToast, setShowToast] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleItemClick = (itemTitle: string) => {
        setSelectedItem(itemTitle);
        setDisplaySelectTypeModal(false);
    };

    const renderModalBody = () => {
        switch (selectedItem) {
            case "Text and image":
                return <AddTextAndImage
                    onClick={() => {
                        setSelectedItem(null)
                        setDisplaySelectTypeModal(true)
                    }}
                    onClick2={() => {
                        setSelectedItem(null)
                        setDisplaySelectTypeModal(false)
                    }}
                />
            case "Embed Video":
                return <AddEmbedVideo
                    onClick={() => {
                        setSelectedItem(null)
                        setDisplaySelectTypeModal(true)
                    }}
                    onClick2={() => {
                        setSelectedItem(null)
                        setDisplaySelectTypeModal(false)
                    }}
                />
            case "Video":
                return <AddVideoBlock
                    onClick={() => {
                        setSelectedItem(null)
                        setDisplaySelectTypeModal(true)
                    }}
                    onClick2={() => {
                        setSelectedItem(null)
                        setDisplaySelectTypeModal(false)
                    }}
                />
            case "Presentation":
                return <AddPresentation
                    onClick={() => {
                        setSelectedItem(null)
                        setDisplaySelectTypeModal(true)
                    }}
                    onClick2={() => {
                        setSelectedItem(null)
                        setDisplaySelectTypeModal(false)
                    }}
                />
            case "Code Example":
                return <AddCodeExample
                    onClick={() => {
                        setSelectedItem(null)
                        setDisplaySelectTypeModal(true)
                    }}
                    onClick2={() => {
                        setSelectedItem(null)
                        setDisplaySelectTypeModal(false)
                    }}
                />
            default:
                return null;
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

            {displaySelectTypeModal && (
                <>
                    <AcceptedModal
                        onClick={() => {
                            setDisplaySelectTypeModal(false);
                        }}
                        body={
                            <SelectTypeModal onClick={() => setDisplaySelectTypeModal(false)} onItemClick={handleItemClick} />
                        }
                    />
                </>
            )}
            {selectedItem && (
                <AcceptedModal
                    onClick={() => {
                        setSelectedItem(null);
                        setDisplaySelectTypeModal(false);
                    }}
                    body={renderModalBody()}
                />
            )}
            <div className={classes.container}>
                <h1>Untitled lesson</h1>
                <div className={classes.addLesson}>
                    <Input
                        isRequired
                        label='Add lesson title'
                        placeholder='Untitled lesson'
                        errorMessage='Please enter a valid lesson name  '
                    />
                </div>

                <div className={classes.addLesson}>
                    <div className={classes.addBlock}>
                        <p>You have the knowledge, it’s time to share it.</p>
                        <Button
                            type="tertiary"
                            onClick={() => {
                                setDisplaySelectTypeModal(true);
                            }}
                        >
                            <span>Add Block</span>
                        </Button>
                    </div>
                </div>

                {(saveLessonAndContinue === 4 && showToast) && (
                    <Toast
                        onClick={() => setShowToast(false)}
                        toastTeaxt="Lesson successfully saved!"
                    />
                )}

                <div className={`${classes.addLesson} ${classes.buttonContainer}`}>
                    <Button
                        onClick={() => {
                            setSaveLessonAndContinue(prevValue => (prevValue < 4) ? prevValue + 1 : prevValue);
                            setShowToast(true);
                        }}
                        className={saveLessonAndContinue === 4 ? classes.inactivePrimary : ''}
                    >
                        <span>Save lesson</span>
                    </Button>
                    <Button
                        type='secondary'
                        onClick={() => {
                            setDisplayDiscardModal(true);
                        }}
                        className={saveLessonAndContinue === 4 ? classes.inactiveSecondary : ''}
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
            </div>
        </>
    )
}

export default CourseCustomize