import Button from '../../../Components/Button/Button';
import Input from '../../../Components/Input/Input';
import classes from './AddEmbedVideo.module.css'

type AddEmbedVideoProps = {
    onClick: () => void;
    onClick2: () => void;
}

const AddEmbedVideo = ({ onClick, onClick2 }: AddEmbedVideoProps) => {
    return (
        <div className={classes.container}>
            <div>
                <div>
                    <h3>Embed video Block</h3>
                    <p>Embed videos from Youtube or Vimeo into your curriculum.</p>
                </div>
                <svg onClick={onClick} width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13.5L13 1.5M1 1.5L13 13.5" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>

            <div>
                <Input
                    isRequired
                    label="Embed  URL"
                    errorMessage='Please choose a file type'
                    placeholder="Embed video URL here"
                />
                <Input
                    label='Alt Text'
                    placeholder='What’s in the embed? Tell Google'
                    errorMessage='Incorrect link. Check and try again'
                />
            </div>

            <div className={classes.buttonContainer}>
                <Button type='secondary' onClick={onClick}>Cancel</Button>
                <Button type='primary' onClick={onClick2}>Embed video</Button>
            </div>
        </div>
    )
}

export default AddEmbedVideo