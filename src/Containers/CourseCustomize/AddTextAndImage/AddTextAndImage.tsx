import classes from './AddTextAndImage.module.css'

type AddTextAndImageProps = {
    onClick?: () => void;
    onClick2?: () => void;
}

const AddTextAndImage = ({ onClick, onClick2 }: AddTextAndImageProps) => {
    return (
        <div className={classes.container}>AddTextAndImage</div>
    )
}

export default AddTextAndImage