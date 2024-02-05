import { useState } from 'react';
import Input from '../../../Components/Input/Input'
import classes from './CourseReading.module.css'
import SectionsNav4 from '../../../Components/SectionsNav4/SectionsNav4';
import DragAndDropInput from '../../../Components/DragAndDropInput/DragAndDropInput';
import Button from '../../../Components/Button/Button';
import ProgressBar from '../../../Components/ProgressBar/ProgressBar';
import DropdownWithSearch from '../../../Components/DropdownWithSearch/DropdownWithSearch';
import AcceptedModal from '../../../Components/Modals/AcceptedModal/AcceptedModal';
import DiscardModalBody from '../DiscardModalBody';
import DeleteModalBody from '../DeleteModalBody';

const CourseReading = () => {

    // States
    const [displayDiscardModal, setDisplayDiscardModal] =
        useState(false);
    const [displayDeleteModal, setDisplayDeleteModal] = useState(false);

    const fileUpload = [
        {
            fileName: "First reading.doc",
            progressPercentage: 85,
        }
    ]

    // States
    const [navItems, setNavItems] = useState<any[]>([
        {
            title: "Bulk Upload",
            isActive: true,
            activeComponent: (
                <div className={classes.bulkUpload}>
                    <ul>
                        <li>The contents of the file will automatically be used to create the reading content.</li>
                        <li>Keep the file size below 10 MB to ensure quick loading and smooth access for your students.</li>
                    </ul>
                    <DragAndDropInput />
                    <p className={classes.info}>You can upload files with the extensions: doc, pdf</p>
                    <div className={classes.fileUpload}>
                        <h3>File Upload</h3>
                        <div className={classes.file}>
                            {fileUpload.map((data, i) => {
                                return (
                                    <>
                                        <div key={i}>
                                            <p>{data.fileName}</p>
                                            <ProgressBar percentage={data.progressPercentage} color="#fff" />
                                            <span>Uploading({data.progressPercentage}%)</span>
                                        </div>
                                        <Button type='secondary'>Cancel</Button>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Build from scratch",
            isActive: false,
            activeComponent: null,
        },
    ]);


    //   Utils
    const activeComponent = navItems.find((data) => data.isActive);

    return (
        <div className={classes.container}>
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
                            onClick2={() => {
                                setDisplayDeleteModal(false);
                            }}
                        />
                    }
                />
            )}
            <h1>Untitled lesson</h1>
            <div className={classes.addLesson}>
                <Input
                    isRequired
                    label='Add lesson title'
                    placeholder='Untitled lesson'
                />
            </div>
            <div className={classes.addLesson}>
                <h2>Add reading content</h2>
                <section className={classes.subContainer}>
                    <div className={classes.sectionsNavSection}>
                        <SectionsNav4 navItems={navItems} setNavItems={setNavItems} />
                    </div>
                    <div className={classes.body}>{activeComponent.activeComponent}</div>
                </section>
            </div>
            <div className={`${classes.addLesson} ${classes.addResources}`}>
                <h3>Add resources to this lesson (optional)</h3>
                <p>Share relevant documents that provide additional context or support for the lesson.</p>
                <DropdownWithSearch
                    label="Resource type"
                    title="Select the type of resources you want to add"
                    options={[]}
                />
                <Input
                    label='Resource URL'
                    placeholder='Enter the URL of the external resource'
                />
            </div>
            <div className={`${classes.addLesson} ${classes.buttonContainer}`}>
                <Button>
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
        </div>
    )
}

export default CourseReading