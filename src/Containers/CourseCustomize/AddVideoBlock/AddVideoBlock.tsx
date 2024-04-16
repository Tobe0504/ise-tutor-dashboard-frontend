import Button from '../../../Components/Button/Button';
import DragAndDropInput from '../../../Components/DragAndDropInput/DragAndDropInput';
import classes from './AddVideoBlock.module.css'

type AddVideoBlockProps = {
    onClick: () => void;
    onClick2: () => void;
}

const AddVideoBlock = ({ onClick, onClick2 }: AddVideoBlockProps) => {
    return (
        <div className={classes.container}>
            <div>
                <h3>Video Block</h3>
                <p>Add video to your contents by uploading the video from your computer</p>
                <svg onClick={onClick} width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13.5L13 1.5M1 1.5L13 13.5" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>

            <ul>
                <li>We suggest a max video size of 200MB and not more than 15 minutes.</li>
                <li>You can compressing your video using HandBrake.</li>
                <li>It’s all about the details- pick your thumbnail image and add closed captions.</li>
            </ul>

            <div>
                <DragAndDropInput acceptedFileTypes=".mov, .movie, .mp4, .mpeg, .vivo, .webm, .m4v" />
                <p className={classes.info}>You can upload files with the extensions: mov, movie, mp4, mpeg, vivo, webm, m4v</p>
            </div>

            <div className={classes.buttonContainer}>
                <Button type='secondary' onClick={onClick}>Cancel</Button>
                <Button type='primary' onClick={onClick2}>Save</Button>
            </div>
        </div>
    )
}

export default AddVideoBlock