import Button from '../../../../Components/Button/Button';
import classes from './Modals.module.css'

type ReadyToSubmitModalProps = {
    onClick: () => void;
    onClick2: () => void;
}

const ReadyToSubmitModal = ({ onClick, onClick2 }: ReadyToSubmitModalProps) => {
    return (
        <div className={classes.container}>
            <h4>Ready to submit?</h4>
            <p>Ensure all modules are complete and updated for review.</p>
            <span>Once you submit, your content will undergo the final review process. </span>
            <div className={classes.buttonContainer}>
                <Button
                    type='secondary'
                    onClick={onClick}
                >No, continue editing</Button>
                <Button
                    type='primary'
                    onClick={onClick2}
                >Yes, submit for review</Button>
            </div>
        </div>
    )
}

export default ReadyToSubmitModal