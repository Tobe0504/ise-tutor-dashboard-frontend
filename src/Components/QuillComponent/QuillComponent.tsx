import React, { SetStateAction, Dispatch } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import classes from './QuillComponent.module.css'

type QuillComponentTypes = {
  state: string
  setState: Dispatch<SetStateAction<string>>
}

const QuillComponent = ({ state, setState }: QuillComponentTypes) => {
  return (
    <ReactQuill
      value={state}
      onChange={setState}
      className={classes.container}
    />
  )
}

export default QuillComponent
