import classes from './AddVideoBlock.module.css'

type AddVideoBlockProps = {
    onclick: () => void;
    onclick2: () => void;
}

const AddVideoBlock = ({ onclick, onclick2 }: AddVideoBlockProps) => {
    return (
        <div className={classes.container}>AddVideoBlock</div>
    )
}

export default AddVideoBlock