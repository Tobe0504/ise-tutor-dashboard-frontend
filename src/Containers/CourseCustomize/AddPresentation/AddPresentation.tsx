import Button from '../../../Components/Button/Button';
import classes from './AddPresentation.module.css'

type AddPresentationProps = {
    onClick?: () => void;
    onClick2?: () => void;
}

const AddPresentation = ({ onClick, onClick2 }: AddPresentationProps) => {
    return (
        <div className={classes.container}>
            <div>
                <h3>Presentation block</h3>
                <p>Code examples display code</p>
            </div>

            <div className={classes.buttonContainer}>
                <Button type='secondary' onClick={onClick}>Cancel</Button>
                <Button type='primary' onClick={onClick2}>Save</Button>
            </div>
        </div>
    )
}

export default AddPresentation