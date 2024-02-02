import Input from '../../../Components/Input/Input'
import classes from './CourseReading.module.css'

const CourseReading = () => {
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
            <h1>Untitled lesson</h1>
            <div className={classes.addLesson}>
                <h2>Add reading content</h2>
                <Input
                    isRequired
                    label='Add lesson title'
                    placeholder='Untitled lesson'
                />
            </div>
        </div>
    )
}

export default CourseReading