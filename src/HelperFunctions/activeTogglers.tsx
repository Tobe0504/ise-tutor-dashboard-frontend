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
   setState: React.Dispatch<React.SetStateAction<any[]>>,
   isChecked: boolean
) => {
   const stateCopy = initState.map((data) => ({
      ...data,
      isActive: isChecked,
   }));

   setState(stateCopy);
};