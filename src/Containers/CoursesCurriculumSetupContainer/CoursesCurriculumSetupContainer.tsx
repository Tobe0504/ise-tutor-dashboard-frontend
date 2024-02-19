import classes from './CoursesCurriculumSetupContainer.module.css'
import CreateYourCurriculumContainer from '../CreateYourCurriculumContainer/CreateYourCurriculumContainer'
import CourseDetailsContainer from '../CourseDetailsContainer/CourseDetailsContainer'
import CourseCurriculumFeedbackInformationBanner from '../CourseCurriculumFeedbackInformationBanner/CourseCurriculumFeedbackInformationBanner'

const CoursesCurriculumSetupContainer = () => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h2>Course setup</h2>
            </div>

            <CourseCurriculumFeedbackInformationBanner />

            <div className={classes.subContainer}>
                <CreateYourCurriculumContainer />
                <CourseDetailsContainer />
            </div>
        </div>
    )
}

export default CoursesCurriculumSetupContainer
