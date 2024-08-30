import classes from './StudentPeroidicFeedbackContainer.module.css'
import TextArea from '../../Components/TextArea/TextArea'
import Button from '../../Components/Button/Button'
import StarRating from '../../Components/StarRating/StarRating'

type StudentPeroidicFeedbackContainerProps = {
  onClick: () => void
  studentFeedback: any
}

const StudentPeroidicFeedbackContainer = ({
  onClick,
  studentFeedback,
}: StudentPeroidicFeedbackContainerProps) => {
  return (
    <section className={classes.container}>
      <div className={classes.innerContainer}>
        <h4>How did you do this week?</h4>

        {studentFeedback?.questions_and_answers?.map(
          (questions: any, questionIndex: number) => {
            if (
              questionIndex === 1 ||
              questionIndex === 3 ||
              questionIndex === 4
            ) {
              return (
                <TextArea
                  label={questions?.question}
                  placeholder="Placeholder Text"
                  value={questions?.answer}
                />
              )
            } else {
              return (
                <div className={classes.rateSection}>
                  <p>{questions?.question}</p>
                  <div>
                    <span>Poor</span>
                    <StarRating
                      totalStars={5}
                      initialRating={Number(questions?.answer)}
                      editable={false}
                      width={33}
                      height={33}
                    />
                    <span>Excellent</span>
                  </div>
                </div>
              )
            }
          }
        )}

        <div className={classes.buttonContainer}>
          <Button onClick={onClick}>
            <span>Close</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default StudentPeroidicFeedbackContainer
