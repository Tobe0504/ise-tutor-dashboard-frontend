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
                    <div className={classes.addedBlock}>
                        <div className={classes.addedBlockHeader}>
                            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.00041 19.6414C1.54912 19.6414 1.1628 19.4808 0.841441 19.1594C0.520063 18.838 0.359375 18.4517 0.359375 18.0004C0.359375 17.5491 0.520063 17.1628 0.841441 16.8414C1.1628 16.5201 1.54912 16.3594 2.00041 16.3594C2.4517 16.3594 2.83802 16.5201 3.15938 16.8414C3.48075 17.1628 3.64144 17.5491 3.64144 18.0004C3.64144 18.4517 3.48075 18.838 3.15938 19.1594C2.83802 19.4808 2.4517 19.6414 2.00041 19.6414ZM10.0004 19.6414C9.54912 19.6414 9.1628 19.4808 8.84144 19.1594C8.52006 18.838 8.35937 18.4517 8.35937 18.0004C8.35937 17.5491 8.52006 17.1628 8.84144 16.8414C9.1628 16.5201 9.54912 16.3594 10.0004 16.3594C10.4517 16.3594 10.838 16.5201 11.1594 16.8414C11.4808 17.1628 11.6414 17.5491 11.6414 18.0004C11.6414 18.4517 11.4808 18.838 11.1594 19.1594C10.838 19.4808 10.4517 19.6414 10.0004 19.6414ZM2.00041 11.6414C1.54912 11.6414 1.1628 11.4808 0.841441 11.1594C0.520063 10.838 0.359375 10.4517 0.359375 10.0004C0.359375 9.54912 0.520063 9.1628 0.841441 8.84144C1.1628 8.52007 1.54912 8.35938 2.00041 8.35938C2.4517 8.35938 2.83802 8.52007 3.15938 8.84144C3.48075 9.1628 3.64144 9.54912 3.64144 10.0004C3.64144 10.4517 3.48075 10.838 3.15938 11.1594C2.83802 11.4808 2.4517 11.6414 2.00041 11.6414ZM10.0004 11.6414C9.54912 11.6414 9.1628 11.4808 8.84144 11.1594C8.52006 10.838 8.35937 10.4517 8.35937 10.0004C8.35937 9.54912 8.52006 9.1628 8.84144 8.84144C9.1628 8.52007 9.54912 8.35938 10.0004 8.35938C10.4517 8.35938 10.838 8.52007 11.1594 8.84144C11.4808 9.1628 11.6414 9.54912 11.6414 10.0004C11.6414 10.4517 11.4808 10.838 11.1594 11.1594C10.838 11.4808 10.4517 11.6414 10.0004 11.6414ZM2.00041 3.64144C1.54912 3.64144 1.1628 3.48075 0.841441 3.15938C0.520063 2.83802 0.359375 2.4517 0.359375 2.00041C0.359375 1.54912 0.520063 1.1628 0.841441 0.841443C1.1628 0.520065 1.54912 0.359375 2.00041 0.359375C2.4517 0.359375 2.83802 0.520065 3.15938 0.841443C3.48075 1.1628 3.64144 1.54912 3.64144 2.00041C3.64144 2.4517 3.48075 2.83802 3.15938 3.15938C2.83802 3.48075 2.4517 3.64144 2.00041 3.64144ZM10.0004 3.64144C9.54912 3.64144 9.1628 3.48075 8.84144 3.15938C8.52006 2.83802 8.35937 2.4517 8.35937 2.00041C8.35937 1.54912 8.52006 1.1628 8.84144 0.841443C9.1628 0.520065 9.54912 0.359375 10.0004 0.359375C10.4517 0.359375 10.838 0.520065 11.1594 0.841443C11.4808 1.1628 11.6414 1.54912 11.6414 2.00041C11.6414 2.4517 11.4808 2.83802 11.1594 3.15938C10.838 3.48075 10.4517 3.64144 10.0004 3.64144Z" fill="black" />
                            </svg>
                            <h4>Text and Image</h4>
                            <Button type='secondary'>Edit</Button>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.2677 1.73223L18.9748 1.02513V1.02513L18.2677 1.73223ZM4.5 19.0355V20.0355C4.76522 20.0355 5.01957 19.9301 5.20711 19.7426L4.5 19.0355ZM1 19.0355H0C0 19.5878 0.447715 20.0355 1 20.0355L1 19.0355ZM1 15.4644L0.292893 14.7573C0.105357 14.9448 0 15.1992 0 15.4644H1ZM15.4393 2.43934C16.0251 1.85355 16.9748 1.85355 17.5606 2.43934L18.9748 1.02513C17.608 -0.341709 15.3919 -0.341709 14.0251 1.02513L15.4393 2.43934ZM17.5606 2.43934C18.1464 3.02513 18.1464 3.97487 17.5606 4.56066L18.9748 5.97487C20.3417 4.60804 20.3417 2.39196 18.9748 1.02513L17.5606 2.43934ZM17.5606 4.56066L3.79289 18.3284L5.20711 19.7426L18.9748 5.97487L17.5606 4.56066ZM4.5 18.0355H1V20.0355H4.5V18.0355ZM14.0251 1.02513L0.292893 14.7573L1.70711 16.1715L15.4393 2.43934L14.0251 1.02513ZM0 15.4644V19.0355H2V15.4644H0ZM12.5251 3.93934L16.0606 7.47487L17.4748 6.06066L13.9393 2.52513L12.5251 3.93934Z" fill="#664EFE" />
                            </svg>
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 5L15.1327 17.1425C15.0579 18.1891 14.187 19 13.1378 19H4.86224C3.81296 19 2.94208 18.1891 2.86732 17.1425L2 5M7 9V15M11 9V15M12 5V2C12 1.44772 11.5523 1 11 1H7C6.44772 1 6 1.44772 6 2V5M1 5H17" stroke="#DC362E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className={classes.addedBlockBody}></div>
                    </div>
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