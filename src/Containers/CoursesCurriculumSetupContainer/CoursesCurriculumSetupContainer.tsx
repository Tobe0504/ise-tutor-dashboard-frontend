import CourseDetailsContainer from '../CourseDetailsContainer/CourseDetailsContainer'
import CreateYourCurriculumContainer from '../CreateYourCurriculumContainer/CreateYourCurriculumContainer'
import classes from './CoursesCurriculumSetupContainer.module.css'

const CoursesCurriculumSetupContainer = () => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h2>Course setup</h2>
            </div>
            <div className={classes.subContainer}>
                <CreateYourCurriculumContainer />
                <CourseDetailsContainer />
            </div>
        </div>
    )
}

export default CoursesCurriculumSetupContainer
