import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import Error from '../../Components/Error/Error'
import classes from './CoursesCurriculumSetupContainer.module.css'
import AcceptedModal from '../../Components/Modals/AcceptedModal/AcceptedModal'
import SubmissionDisclaimerModalBody from './SubmissionModals/SubmissionDisclaimerModalBody'
import SubmissionSuccessfulModalBody from './SubmissionModals/SubmissionSuccessfulModalBody'
import { useState } from 'react'
import CreateYourCurriculumContainer from '../CreateYourCurriculumContainer/CreateYourCurriculumContainer'
import CourseDetailsContainer from '../CourseDetailsContainer/CourseDetailsContainer'

const CoursesCurriculumSetupContainer = () => {

    const navigate = useNavigate();

    // States
    const [displaySubmissionDisclaimerModal, setDisplaySubmissionDisclaimerModal] = useState(false)
    const [displaySubmissionSuccessfulModal, setDisplaySubmissionSuccessfulModal] = useState(false)

    return (
        <div className={classes.container}>
            {displaySubmissionDisclaimerModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplaySubmissionDisclaimerModal(false);
                    }}
                    body={
                        <SubmissionDisclaimerModalBody
                            onClick={() => {
                                setDisplaySubmissionDisclaimerModal(false);
                            }}
                            onClick2={() => {
                                setDisplaySubmissionDisclaimerModal(false);
                                setDisplaySubmissionSuccessfulModal(true);
                            }}
                        />
                    }
                />
            )}
            {displaySubmissionSuccessfulModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplaySubmissionSuccessfulModal(false);
                    }}
                    body={
                        <SubmissionSuccessfulModalBody
                            onClick={() => {
                                setDisplaySubmissionSuccessfulModal(false);
                            }}
                        />
                    }
                />
            )}
            <div className={classes.header}>
                <h2>Course setup</h2>
            </div>

            <Error notShowIndicator type={'error'} borderRadius='10px'>
                <div className={classes.errorContainer}>
                    <h4>Deadline Approaching! ⏰</h4>
                    <p>Submission deadline is <strong>12th December, 2024</strong>. Please ensure you <strong>upload all module</strong>s and <strong>read the submission guide</strong> before submitting your course.</p>
                    <div className={classes.buttonContainer}>
                        <Button onClick={() => {
                            setDisplaySubmissionDisclaimerModal(true)
                        }} type='black'>Submit for review</Button>
                        <Button onClick={() => {
                            navigate('/courses/courses-curriculum/submission-guide')
                        }} type='invalid'>Read submission guide</Button>
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
