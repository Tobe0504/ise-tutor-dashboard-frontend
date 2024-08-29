import { ChangeEvent } from 'react'
import classes from './Checkbox.module.css'

type CheckboxProps = {
  isChecked: boolean
  onChange: (isChecked: boolean) => void
  disabled?: boolean
}

const Checkbox = ({ isChecked, onChange, disabled }: CheckboxProps) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  }

  return (
    <label className={classes.container}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={classes.checkboxInput}
        disabled={disabled}
      />
      <div className={classes.checkmark}></div>
    </label>
  )
}

export default Checkbox
