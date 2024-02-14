import Button from '../../../Components/Button/Button';
import classes from './AddCodeExample.module.css'

type AddCodeExampleProps = {
    onClick?: () => void;
    onClick2?: () => void;
}

const AddCodeExample = ({ onClick, onClick2 }: AddCodeExampleProps) => {
    return (
        <div className={classes.container}>
            <div>
                <h3>Code example block</h3>
                <p>Code examples display code in your lessons with the appropriate syntax highlighting for the language you choose. This code cannot be executed.</p>
            </div>

            <h1>Text Editor</h1>

            <div className={classes.buttonContainer}>
                <Button type='secondary' onClick={onClick}>Cancel</Button>
                <Button type='primary' onClick={onClick2}>Save</Button>
            </div>
        </div>
    )
}

export default AddCodeExample