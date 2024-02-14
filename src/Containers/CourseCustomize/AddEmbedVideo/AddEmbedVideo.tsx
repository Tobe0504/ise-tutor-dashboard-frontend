import classes from './AddEmbedVideo.module.css'

type AddEmbedVideoProps = {
    onclick?: () => void;
    onclick2?: () => void;
}

const AddEmbedVideo = ({ onclick, onclick2 }: AddEmbedVideoProps) => {
    return (
        <div className={classes.container}>AddEmbedVideo</div>
    )
}

export default AddEmbedVideo