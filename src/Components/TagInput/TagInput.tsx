import xSign from '../../Assets/Images/x-sign.svg'
import classes from './TagInput.module.css'

type TagInputProps = {
  label?: string
  onClick?: () => void
}

const TagInput = ({ label, onClick }: TagInputProps) => {
  return (
    <button className={classes.container}>
      <div className={classes.inner}>
        <img src={xSign} alt="remove" title="Remove" onClick={onClick} />
        <span>{label}</span>
      </div>
    </button>
  )
}

export default TagInput
