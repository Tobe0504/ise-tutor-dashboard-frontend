import classes from './AddPresentation.module.css'

type AddPresentationProps = {
    onClick?: () => void;
    onClick2?: () => void;
}

const AddPresentation = ({ onClick, onClick2 }: AddPresentationProps) => {
    return (
        <div className={classes.container}>AddPresentation</div>
    )
}

export default AddPresentation