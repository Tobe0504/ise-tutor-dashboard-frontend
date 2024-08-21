import React, { SetStateAction, Dispatch } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import classes from './QuillComponent.module.css'

type QuillComponentTypes = {
  state: string
  onChange: (e: any) => void
  label?: string
}

const QuillComponent = ({ state, onChange, label }: QuillComponentTypes) => {
  return (
    <div className={classes.container}>
      {label && <label>{label}</label>}
      <ReactQuill
        value={state}
        onChange={onChange}
        className={classes.container}
        theme="snow"
      />
    </div>
  )
}

export default QuillComponent
