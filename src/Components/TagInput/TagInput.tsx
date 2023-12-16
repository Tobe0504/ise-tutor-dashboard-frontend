import xSign from '../../Assets/Images/x-sign.svg';
import classes from './TagInput.module.css';

type TagInputProps = {
    label?: string;
};

const TagInput = ({ label }: TagInputProps) => {
    return (
        <button className={classes.container}>
            <div className={classes.inner}>
                <img src={xSign} alt="remove" title="Remove" />
                <span>{label}</span>
            </div>
        </button>
    );
};

export default TagInput;
