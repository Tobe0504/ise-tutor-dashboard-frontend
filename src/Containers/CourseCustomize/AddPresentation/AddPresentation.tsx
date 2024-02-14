import classes from './AddPresentation.module.css'

type AddPresentationProps = {
    onclick?: () => void;
    onclick2?: () => void;
}

const AddPresentation = ({ onclick, onclick2 }: AddPresentationProps) => {
    return (
        <div className={classes.container}>AddPresentation</div>
    )
}

export default AddPresentation