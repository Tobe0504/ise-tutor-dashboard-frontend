import Input from '../../Components/Input/Input'
import classes from './CoursePresentation.module.css'
import BulkUploadComponent from './BulkUploadComponent/BulkUploadComponent';

const CoursePresentation = () => {

    return (
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
            <div className={`${classes.addLesson} ${classes.body}`}>
                <section className={classes.subContainer}>
                    <h2>Add presentation content</h2>
                    <div className={classes.sectionsNavSection}>
                        <BulkUploadComponent />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CoursePresentation