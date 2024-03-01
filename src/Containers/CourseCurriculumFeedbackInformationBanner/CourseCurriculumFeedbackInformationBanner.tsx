import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Error from '../../Components/Error/Error'
import Button from '../../Components/Button/Button'
import classes from './CourseCurriculumFeedbackInformationBanner.module.css'
import AcceptedModal from '../../Components/Modals/AcceptedModal/AcceptedModal'
import SubmissionSuccessfulModalBody from '../CoursesCurriculumSetupContainer/SubmissionModals/SubmissionSuccessfulModalBody'
import SubmissionDisclaimerModalBody from '../CoursesCurriculumSetupContainer/SubmissionModals/SubmissionDisclaimerModalBody'

const CourseCurriculumFeedbackInformationBanner = () => {
  const navigate = useNavigate()

  // States
  const [
    displaySubmissionDisclaimerModal,
    setDisplaySubmissionDisclaimerModal,
  ] = useState(false)
  const [
    displaySubmissionSuccessfulModal,
    setDisplaySubmissionSuccessfulModal,
  ] = useState(false)

  const [submitRequestError, setSubmitRequestError] = useState(true)
  const [submitRequestError2] = useState(false)
  const [submitRequestProcessing, setSubmitRequestProcessing] = useState(false)
  const [submitRequestApproved] = useState(false)

  return (
    <>
      {displaySubmissionDisclaimerModal && (
        <AcceptedModal
          onClick={() => {
            setDisplaySubmissionDisclaimerModal(false)
          }}
          body={
            <SubmissionDisclaimerModalBody
              onClick={() => {
                setDisplaySubmissionDisclaimerModal(false)
              }}
              onClick2={() => {
                setDisplaySubmissionDisclaimerModal(false)
                setDisplaySubmissionSuccessfulModal(true)
                setSubmitRequestProcessing(true)
                setSubmitRequestError(false)
              }}
            />
          }
        />
      )}
      {displaySubmissionSuccessfulModal && (
        <AcceptedModal
          onClick={() => {
            setDisplaySubmissionSuccessfulModal(false)
          }}
          body={
            <SubmissionSuccessfulModalBody
              onClick={() => {
                setDisplaySubmissionSuccessfulModal(false)
              }}
            />
          }
        />
      )}
      {submitRequestError && (
        <Error notShowIndicator type={'error'} borderRadius="10px">
          <div className={classes.errorContainer}>
            <h4>Deadline Approaching! ⏰</h4>
            <p>
              Submission deadline is <strong>12th December, 2024</strong>.
              Please ensure you <strong>upload all module</strong>s and{' '}
              <strong>read the submission guide</strong> before submitting your
              course.
            </p>
            <div className={classes.buttonContainer}>
              <Button
                onClick={() => {
                  setDisplaySubmissionDisclaimerModal(true)
                }}
                type="black"
              >
                Submit for review
              </Button>
              <Button
                onClick={() => {
                  navigate('/courses/courses-curriculum/submission-guide')
                }}
                type="invalid"
              >
                Read submission guide
              </Button>
            </div>
          </div>
        </Error>
      )}
      {submitRequestProcessing && (
        <Error notShowIndicator type={'processing'} borderRadius="10px">
          <div className={classes.errorContainer}>
            <h4>Revision requested</h4>
            <p>
              Great job with the curriculum 🎉. Some modules need revision. For
              details, select "Feedback". Please revise and resubmit for
              approval.
            </p>
            <div className={classes.buttonContainer}>
              <Button
                onClick={() => {
                  navigate('/courses/courses-curriculum/submission-guide')
                }}
                type="invalid"
              >
                Read submission guide
              </Button>
            </div>
          </div>
        </Error>
      )}
      {submitRequestApproved && (
        <Error notShowIndicator type={'approved'} borderRadius="10px">
          <div className={classes.errorContainer}>
            <h4>Congratulations!</h4>
            <p>
              Course successfully approved. Well done on creating an outstanding
              curriculum! 🌟
            </p>
          </div>
        </Error>
      )}
      {submitRequestError2 && (
        <Error notShowIndicator type={'error'} borderRadius="10px">
          <div className={classes.errorContainer}>
            <h4>Course under review</h4>
            <p>
              Editing is temporarily unavailable for courses under review. You
              can make edits once the review is over.
            </p>
          </div>
        </Error>
      )}
    </>
  )
}

export default CourseCurriculumFeedbackInformationBanner
