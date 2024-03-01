import { Dispatch, SetStateAction } from 'react'
import classes from './DragAndDropInput.module.css'

type DragAndDropInputPropTypes = {
  state?: any
  setState?: Dispatch<SetStateAction<any>>
  acceptedFileTypes?: any
}

const DragAndDropInput = ({
  state,
  setState,
  acceptedFileTypes,
}: DragAndDropInputPropTypes) => {
  const changeHandler = (e: any) => {
    const reader = new FileReader()

    reader.onload = () => {
      if (reader?.readyState === 2) {
        ;(setState as any)((prevState: any) => {
          return { ...prevState, frontendFile: reader?.result }
        })
      }
    }
    reader?.readAsDataURL(e.target.files[0])
    ;(setState as any)((prevState: any) => {
      return { ...prevState, file: e?.target?.files[0] }
    })
  }

  return (
    <div>
      <label>Attach file </label>
      <div className={classes.dropContainer}>
        {state?.file?.name ? (
          <>
            <span>{state?.file?.name}</span>
            <span>or</span>
            <span>
              <label htmlFor="file">change file...</label>
              <input
                type="file"
                onChange={changeHandler}
                id="file"
                accept={acceptedFileTypes}
              />
            </span>
          </>
        ) : (
          <>
            <span>Drag and drop file to attach it </span>
            <span>or</span>
            <span>
              <label htmlFor="file">browse for a file...</label>
              <input
                type="file"
                onChange={changeHandler}
                id="file"
                accept={acceptedFileTypes}
              />
            </span>{' '}
          </>
        )}
      </div>
    </div>
  )
}

export default DragAndDropInput
