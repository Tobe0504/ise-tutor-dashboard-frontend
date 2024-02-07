import { useState } from 'react';
import Input from '../../Components/Input/Input'
import classes from './CourseReading.module.css'
import SectionsNav4 from '../../Components/SectionsNav4/SectionsNav4';
import BulkUploadComponent from './BulkUploadComponent/BulkUploadComponent';

const CourseReading = () => {

    // States
    const [navItems, setNavItems] = useState<any[]>([
        {
            title: "Bulk Upload",
            isActive: true,
            activeComponent: <BulkUploadComponent />,
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
            <h1>Untitled lesson</h1>
            <div className={classes.addLesson}>
                <Input
                    isRequired
                    label='Add lesson title'
                    placeholder='Untitled lesson'
                />
            </div>
            <div className={`${classes.addLesson} ${classes.body}`}>
                <section className={classes.subContainer}>
                    <div className={classes.sectionsNavSection}>
                        <h2>Add reading content</h2>
                        <SectionsNav4 navItems={navItems} setNavItems={setNavItems} />
                    </div>
                    <div>{activeComponent.activeComponent}</div>
                </section>
            </div>
        </div>
    )
}

export default CourseReading