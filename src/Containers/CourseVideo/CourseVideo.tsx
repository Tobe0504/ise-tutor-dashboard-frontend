import { useState } from 'react';
import Input from '../../Components/Input/Input'
import classes from './CourseVideo.module.css'
import SectionsNav4 from '../../Components/SectionsNav4/SectionsNav4';
import VideoUploadComponent from './VideoUploadComponent';
import EmbedVideoComponent from './EmbedVideoComponent';

const CourseVideo = () => {

    // States
    const [navItems, setNavItems] = useState<any[]>([
        {
            title: "Upload video",
            isActive: true,
            activeComponent: <VideoUploadComponent />,
        },
        {
            title: "Embed video",
            isActive: false,
            activeComponent: <EmbedVideoComponent />,
        },
    ]);


    //   Utils
    const activeComponent = navItems.find((data) => data.isActive);

    return (
        <div className={classes.container}>
            <h1>Untitled lesson</h1>
            <div className={classes.addLesson}>
                <Input
                    isRequired
                    label='Add lesson title'
                    placeholder='Untitled lesson'
                    errorMessage='Please enter a valid lesson name'
                />
            </div>
            <div className={`${classes.addLesson} ${classes.body}`}>
                <section className={classes.subContainer}>
                    <div className={classes.sectionsNavSection}>
                        <h2>Add Video</h2>
                        <SectionsNav4 navItems={navItems} setNavItems={setNavItems} />
                    </div>
                    <div>{activeComponent.activeComponent}</div>
                </section>
            </div>
        </div>
    )
}

export default CourseVideo