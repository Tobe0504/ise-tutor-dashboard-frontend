import { useNavigate } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import classes from './AddTextAndImage.module.css'

type AddTextAndImageProps = {
    onClick?: () => void;
    onClick2?: () => void;
}

const AddTextAndImage = ({ onClick, onClick2 }: AddTextAndImageProps) => {
    const navigate = useNavigate();

    return (
        <div className={classes.container}>
            <div>
                <h3>Text and image block</h3>
                <p>Add text and images to your lesson content</p>
            </div>

            <h1>Text Editor</h1>

            <div className={classes.buttonContainer}>
                <div>
                    <svg onClick={() => navigate('/support')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <Button type='secondary' onClick={onClick}>Cancel</Button>
                <Button type='primary' onClick={onClick2}>Save</Button>
            </div>
        </div>
    )
}

export default AddTextAndImage