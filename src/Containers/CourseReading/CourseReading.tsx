import { useEffect, useState } from 'react'
import Input from '../../Components/Input/Input'
import classes from './CourseReading.module.css'
import SectionsNav4 from '../../Components/SectionsNav4/SectionsNav4'
import BulkUploadComponent from './BulkUploadComponent'
import BuildFromScratch from './BuildFromScratch'
import { uploadReadingData } from '../../Utilities/types'
import { inputChangeHandler } from '../../HelperFunctions/inputChangeHandler'

const CourseReading = () => {
  // States
  const [navItems, setNavItems] = useState<any[]>([
    {
      title: 'Bulk Upload',
      isActive: true,
    },
    {
      title: 'Type content',
      isActive: false,
    },
  ])

  const [readingData, setReadingData] = useState<uploadReadingData>({
    title: '',
    reading_contents: '',
    file: null,
    resources: [],
  })

  // Formdata
  const readingFormData = new FormData()

  // Effects
  useEffect(() => {
    readingFormData.append('title', readingData.title)
    readingFormData.append('reading_contents', readingData.reading_contents)
    readingFormData.append('resources', readingData.resources?.toString())

    if (readingData.file) {
      Array.from(readingData?.file as FileList)?.forEach((file) => {
        readingFormData.append('file', file)
      })
    }

    // eslint-disable-next-line
  }, [readingData])

  return (
    <div className={classes.container}>
      <h1>{readingData.title || 'Untitled lesson'}</h1>
      <div className={classes.addLesson}>
        <Input
          isRequired
          label="Add lesson title"
          placeholder="Untitled lesson"
          errorMessage="Please enter a valid lesson name"
          name="title"
          value={readingData.title}
          onChange={(e) => inputChangeHandler(e, setReadingData)}
        />
      </div>
      <div className={`${classes.addLesson} ${classes.body}`}>
        <section className={classes.subContainer}>
          <div className={classes.sectionsNavSection}>
            <h2>Add reading content</h2>
            <SectionsNav4 navItems={navItems} setNavItems={setNavItems} />
          </div>
          <div>
            {navItems[0].isActive && (
              <BulkUploadComponent
                readingData={readingData}
                setReadingData={setReadingData}
                readingFormData={readingFormData}
              />
            )}
            {navItems[1].isActive && (
              <BuildFromScratch
                readingData={readingData}
                setReadingData={setReadingData}
                readingFormData={readingFormData}
              />
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default CourseReading
