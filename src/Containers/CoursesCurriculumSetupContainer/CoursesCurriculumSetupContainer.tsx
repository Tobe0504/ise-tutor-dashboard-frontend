import Button from '../../Components/Button/Button'
import Error from '../../Components/Error/Error'
import CourseDetailsContainer from '../CourseDetailsContainer/CourseDetailsContainer'
import CreateYourCurriculumContainer from '../CreateYourCurriculumContainer/CreateYourCurriculumContainer'
import classes from './CoursesCurriculumSetupContainer.module.css'

const CoursesCurriculumSetupContainer = () => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h2>Course setup</h2>
            </div>

            <Error notShowIndicator type={'error'} borderRadius='10px'>
                <div className={classes.errorContainer}>
                    <h4>Deadline Approaching! ⏰</h4>
                    <p>Submission deadline is <strong>12th December, 2024</strong>. Please ensure you <strong>upload all module</strong>s and <strong>read the submission guide</strong> before submitting your course.</p>
                    <div className={classes.buttonContainer}>
                        <Button type='black'>Submit for review</Button>
                        <Button type='invalid'>Read submission guide</Button>
                    </div>
                </div>
            </Error>
            <div className={classes.subContainer}>
                <CreateYourCurriculumContainer />
                <CourseDetailsContainer />
            </div>
        </div>
    )
}

export default CoursesCurriculumSetupContainer
