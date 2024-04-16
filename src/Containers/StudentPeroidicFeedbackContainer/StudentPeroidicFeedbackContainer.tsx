import classes from "./StudentPeroidicFeedbackContainer.module.css";
import TextArea from "../../Components/TextArea/TextArea";
import Button from "../../Components/Button/Button";
import StarRating from "../../Components/StarRating/StarRating";

type StudentPeroidicFeedbackContainerProps = {
  onClick: () => void;
};

const StudentPeroidicFeedbackContainer = ({ onClick }: StudentPeroidicFeedbackContainerProps) => {
  return (
    <section className={classes.container}>
      <div className={classes.innerContainer}>
        <h4>How did you do this week?</h4>
        <div className={classes.rateSection}>
          <p>1. How would you rate your overall progress in the past week? </p>

          <div>
            <span>Poor</span>
            <StarRating totalStars={5} initialRating={4} editable={false} width={33} height={33} />
            <span>Excellent</span>
          </div>
        </div>

        <TextArea
          label="2. Did you face any challenges or difficulties while 
studying this week? If yes, please provide details."
          placeholder="Placeholder Text"
          value="I love helping people navigate the UX world – it can be
 tough out there, and we all need some guidance. 
Everyone deserves an opportunity to get 
a step closer to their dreams."
        />

        <div className={classes.rateSection}>
          <p>
            3. On a scale of 1-5, how engaging and interactive did you find the
            course materials?
          </p>
          <div>
            <span>Poor</span>
            <StarRating totalStars={5} initialRating={5} editable={false} width={33} height={33} />
            <span>Excellent</span>
          </div>
        </div>

        <TextArea
          label="4. Is there any specific topic or concept that you found particularly challenging? If yes, please specify."
          placeholder="Placeholder Text"
          value="I love helping people navigate the UX world – it can be
 tough out there, and we all need some guidance. 
Everyone deserves an opportunity to get 
a step closer to their dreams."
        />

        <TextArea
          label="5. Is there any other feedback or suggestion you would like to share with us?"
          placeholder="Placeholder Text"
          value="I love helping people navigate the UX world – it can be
 tough out there, and we all need some guidance. 
Everyone deserves an opportunity to get 
a step closer to their dreams."
        />
        <div className={classes.buttonContainer}>
          <Button onClick={onClick}>
            <span>Close</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudentPeroidicFeedbackContainer;
