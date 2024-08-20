import { Dispatch, SetStateAction } from 'react'
import { assetsType } from '../../Utilities/types'
import classes from './DragAndDropInput.module.css'

type DragAndDropInputPropTypes = {
  state?: assetsType
  setState?: Dispatch<SetStateAction<assetsType>>
  acceptedFileTypes?: any
  type?: string
  multiple?: boolean
}

const DragAndDropInput = ({
  state,
  setState,
  acceptedFileTypes,
  type,
  multiple,
}: DragAndDropInputPropTypes) => {
  const changeHandler = (e: any) => {
    if (type === 'video') {
      const file = e.target.files[0]

      if (file && setState) {
        const videoUrl = URL.createObjectURL(file)

        setState((prevState: any) => {
          return { ...prevState, frontendFile: videoUrl }
        })

        setState((prevState: any) => {
          return { ...prevState, file: file }
        })
      }
    } else {
      if (multiple) {
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
          return { ...prevState, file: e?.target?.files }
        })
      } else {
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
    }
  }

  return (
    <div>
      <label>Attach file </label>
      <div className={classes.dropContainer}>
        {state?.file ? (
          <>
            <span>
              {multiple
                ? `${state?.file[0]?.name} & ${state?.file?.length - 1} others`
                : state?.file?.name}
            </span>
            <span>or</span>
            <span>
              <label htmlFor="file">change file...</label>
              <input
                type="file"
                onChange={changeHandler}
                id="file"
                accept={acceptedFileTypes}
                multiple={multiple}
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
                multiple={multiple}
              />
            </span>{' '}
          </>
        )}
      </div>
    </div>
  )
}

export default DragAndDropInput
