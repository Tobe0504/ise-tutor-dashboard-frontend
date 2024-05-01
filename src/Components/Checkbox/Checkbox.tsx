import { ChangeEvent } from 'react'
import classes from './Checkbox.module.css'

type CheckboxProps = {
  isChecked: boolean
  onChange: (isChecked: boolean) => void
}

const Checkbox = ({ isChecked, onChange }: CheckboxProps) => {
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
      />
      <div className={classes.checkmark}></div>
    </label>
  )
}

export default Checkbox
