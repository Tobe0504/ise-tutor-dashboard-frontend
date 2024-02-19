import HelloUser from '../../Components/HelloUser/HelloUser'
import CoursesSubmittedForReview from '../CoursesSubmittedForReview/CoursesSubmittedForReview'
import classes from './CoursesFeedbackContainer.module.css'

const CoursesFeedbackContainer = () => {
    return (
        <div className={classes.Container}>
            <HelloUser
                header="Course feedback"
                paragraph="Find insights and recommendations to improve your teaching materials."
                notIncludePay
                notIncludeBg
            />
            <CoursesSubmittedForReview />
        </div>
    )
}

export default CoursesFeedbackContainer