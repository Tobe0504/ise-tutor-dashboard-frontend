import classes from './AddTextAndImage.module.css'

type AddTextAndImageProps = {
    onclick?: () => void;
    onclick2?: () => void;
}

const AddTextAndImage = ({ onclick, onclick2 }: AddTextAndImageProps) => {
    return (
        <div className={classes.container}>AddTextAndImage</div>
    )
}

export default AddTextAndImage