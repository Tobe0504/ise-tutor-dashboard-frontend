import { Dispatch, SetStateAction } from 'react'

export const activeToggler = (
  index: number | null,
  initState: any[],
  setState: Dispatch<SetStateAction<any[]>>,
  id?: string | number
) => {
  const stateCopy = initState.map((data, i) => {
    if (!id) {
      if (i === index) {
        return { ...data, isActive: !data.isActive }
      } else {
        return { ...data }
      }
    } else {
      if (data.id === id) {
        return { ...data, isActive: !data.isActive }
      } else {
        return { ...data }
      }
    }
  })

  setState(stateCopy)
}

export const activeTogglerRestAll = (
  index: number | null,
  initState: any[],
  setState: Dispatch<SetStateAction<any[]>>,
  id?: string | number
) => {
  const stateCopy = initState.map((data, i) => {
    if (!id) {
      if (i === index) {
        return { ...data, isActive: !data.isActive }
      } else {
        return { ...data }
      }
    } else {
      if (data.id === id) {
        return { ...data, isActive: !data.isActive }
      } else {
        return { ...data }
      }
    }
  })

  setState(stateCopy)
}

export const activeToggleSetAll = (
  initState: any[],
  setState: React.Dispatch<React.SetStateAction<any[]>>,
  isChecked: boolean
) => {
  const stateCopy = initState.map((data) => ({
    ...data,
    isActive: isChecked,
  }))

  setState(stateCopy)
}
