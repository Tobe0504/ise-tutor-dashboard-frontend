import { Dispatch, SetStateAction } from 'react'
import { assetsType } from '../Utilities/types'

export const imageHandler = (
  e: any,
  setState: Dispatch<SetStateAction<assetsType>>
) => {
  const reader = new FileReader()

  reader.onload = () => {
    if (reader.readyState === 2) {
      setState((prevState: any) => {
        return { ...prevState, frontendFile: reader.result }
      })
    }
  }
  reader.readAsDataURL(e.target.files[0])

  setState((prevState: any) => {
    return { ...prevState, file: e.target.files[0] }
  })
}

export const videoHandler = (
  e: any,
  setState: Dispatch<SetStateAction<assetsType>>
) => {
  const file = e.target.files[0]

  if (file) {
    const videoUrl = URL.createObjectURL(file)

    setState((prevState: any) => {
      return { ...prevState, frontendFile: videoUrl }
    })

    setState((prevState: any) => {
      return { ...prevState, file: file }
    })
  }
}
