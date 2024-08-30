import classes from './AddLessonResourcesOptional.module.css'
import DropdownWithSearch from '../DropdownWithSearch/DropdownWithSearch'
import Input from '../Input/Input'
import { Dispatch, SetStateAction, useState } from 'react'
import { inputChangeHandler } from '../../HelperFunctions/inputChangeHandler'
import {
  uploadPresentationData,
  uploadReadingData,
} from '../../Utilities/types'

type AddLessonResourcesOptionalTypes = {
  setReadingData?:
    | Dispatch<SetStateAction<uploadReadingData>>
    | Dispatch<SetStateAction<uploadPresentationData>>
  readingData?: uploadReadingData | uploadPresentationData
}

const AddLessonResourcesOptional = ({
  setReadingData,
  readingData,
}: AddLessonResourcesOptionalTypes) => {
  // States
  const [resource, setResource] = useState('')
  const [resourceType, setResourceType] = useState('')
  return (
    <div className={classes.addResources}>
      <h3>Add resources to this lesson (optional)</h3>
      <p>
        Share relevant documents that provide additional context or support for
        the lesson.
      </p>
      <DropdownWithSearch
        label="Resource type"
        errorMessage="Please choose a file type"
        title="Select the type of resources you want to add"
        options={['URL']}
        selected={resourceType}
        setSelected={setResourceType}
      />
      <Input
        label="Resource URL"
        errorMessage="Incorrect link. Check and try again"
        placeholder="Enter the URL of the external resource"
        tip='Hit "Enter" to save a resource'
        value={resource}
        onChange={(e) => inputChangeHandler(e, setResource, true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (setReadingData) {
              setReadingData((prevState: any) => {
                return {
                  ...prevState,
                  resources: [...prevState.resources, resource],
                }
              })
              setResource('')
            }
          }
        }}
      />

      <div>
        {readingData?.resources?.map((data) => {
          return (
            <a className={classes.files} href={data}>
              {data}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default AddLessonResourcesOptional
