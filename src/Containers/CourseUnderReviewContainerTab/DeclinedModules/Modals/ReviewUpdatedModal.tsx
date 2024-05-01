import Button from '../../../../Components/Button/Button';
import classes from './Modals.module.css'

type ReviewUpdatedModalProps = {
    onClick: () => void;
}

const ReviewUpdatedModal = ({ onClick }: ReviewUpdatedModalProps) => {
    return (
        <div className={classes.container}>
            <h4>Review updated successfully</h4>
            <p>Your changes for this part of the review have been submitted successfully.</p>
            <span>Feel free to return to the feedback page to continue updating the rest of the content. Your dedication to improvement is appreciated.</span>
            <div className={classes.buttonContainer}>
                <Button
                    type='primary'
                    onClick={onClick}
                >Proceed</Button>
            </div>
        </div>
    )
}

export default ReviewUpdatedModal