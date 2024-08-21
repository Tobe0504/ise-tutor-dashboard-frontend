import Input from '../../Components/Input/Input'
import classes from './CoursePresentation.module.css'
import BulkUploadComponent from './BulkUploadComponent'
import { useEffect, useState } from 'react'
import { inputChangeHandler } from '../../HelperFunctions/inputChangeHandler'
import { uploadPresentationData } from '../../Utilities/types'

const CoursePresentation = () => {
  // States
  const [uploadPresentationData, setUploadPresentationData] =
    useState<uploadPresentationData>({
      title: '',
      presentation_content: null,
      resources: [],
    })

  // Formdata
  const presentationFormData = new FormData()

  // Effects
  useEffect(() => {
    presentationFormData.append('title', uploadPresentationData.title)
    presentationFormData.append(
      'presentation_content',
      uploadPresentationData?.presentation_content as File
    )
    presentationFormData.append(
      'resources',
      uploadPresentationData.resources.toString()
    )
  }, [uploadPresentationData])

  return (
    <div className={classes.container}>
      <h1>{uploadPresentationData?.title || 'Untitled lesson'}</h1>
      <div className={classes.addLesson}>
        <Input
          isRequired
          label="Add lesson title"
          placeholder="Untitled lesson"
          errorMessage="Please enter a valid lesson name  "
          name="title"
          onChange={(e) => inputChangeHandler(e, setUploadPresentationData)}
          value={uploadPresentationData.title}
        />
      </div>
      <div className={`${classes.addLesson} ${classes.body}`}>
        <section className={classes.subContainer}>
          <h2>Add presentation content</h2>
          <div className={classes.sectionsNavSection}>
            <BulkUploadComponent
              uploadPresentationData={uploadPresentationData}
              setUploadPresentationData={setUploadPresentationData}
              presentationFormData={presentationFormData}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default CoursePresentation
