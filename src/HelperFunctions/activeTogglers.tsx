import { Dispatch, SetStateAction } from 'react'

export const activeToggler = (
   index: number,
   initState: any[],
   setState: Dispatch<SetStateAction<any[]>>
) => {
   const stateCopy = initState.map((data, i) => {
      if (i === index) {
         return { ...data, isActive: !data.isActive }
      } else {
         return { ...data, isActive: false }
      }
   })

   setState(stateCopy)
}

export const activeTogglerRestAll = (
   index: number,
   initState: any[],
   setState: Dispatch<SetStateAction<any[]>>
) => {
   const stateCopy = initState.map((data, i) => {
      if (i === index) {
         return { ...data, isActive: !data.isActive }
      } else {
         return { ...data }
      }
   })

   setState(stateCopy)
}

export const activeToggleSetAll = (
   initState: any[],
   setState: Dispatch<SetStateAction<any[]>>
) => {
   const stateCopy = initState.map((data, i) => {
      const activeState = initState.filter((data) => {
         return data.isActive
      })

      if (activeState.length !== initState.length) {
         return { ...data, isActive: true }
      } else {
         return { ...data, isActive: false }
      }
   })

   setState(stateCopy)
}
