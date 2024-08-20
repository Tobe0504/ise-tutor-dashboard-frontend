import { useEffect, useState } from 'react'
import Input from '../../Components/Input/Input'
import classes from './CourseVideo.module.css'
import SectionsNav4 from '../../Components/SectionsNav4/SectionsNav4'
import VideoUploadComponent from './VideoUploadComponent'
import EmbedVideoComponent from './EmbedVideoComponent'
import { uploadVideoData } from '../../Utilities/types'
import { inputChangeHandler } from '../../HelperFunctions/inputChangeHandler'

const CourseVideo = () => {
  // States
  const [navItems, setNavItems] = useState<any[]>([
    {
      title: 'Upload video',
      isActive: true,
    },
    {
      title: 'Embed video',
      isActive: false,
    },
  ])

  //   States
  const [uploadVideoData, setUploadVideoData] = useState<uploadVideoData>({
    title: '',
    embed_url: '',
    embed_description: '',
    video_file: null,
    thumbnail: null,
  })
  const uploadVideoDataFormData = new FormData()

  //   Effects
  useEffect(() => {
    uploadVideoDataFormData.append('title', uploadVideoData.title)
    uploadVideoDataFormData.append('embed_url', uploadVideoData.embed_url)
    uploadVideoDataFormData.append(
      'embed_description',
      uploadVideoData.embed_description
    )
    uploadVideoDataFormData.append(
      'video_file',
      uploadVideoData?.video_file as File
    )
    uploadVideoDataFormData.append(
      'thumbnail',
      uploadVideoData.thumbnail as File
    )
  }, [uploadVideoData])

  return (
    <div className={classes.container}>
      <h1>Untitled lesson</h1>
      <div className={classes.addLesson}>
        <Input
          isRequired
          label="Add lesson title"
          placeholder="Untitled lesson"
          errorMessage="Please enter a valid lesson name"
          name="title"
          value={uploadVideoData.title}
          onChange={(e) => {
            inputChangeHandler(e, setUploadVideoData)
          }}
        />
      </div>
      {uploadVideoData.title && (
        <div className={`${classes.addLesson} ${classes.body}`}>
          <section className={classes.subContainer}>
            <div className={classes.sectionsNavSection}>
              <h2>Add Video</h2>
              <SectionsNav4 navItems={navItems} setNavItems={setNavItems} />
            </div>
            <div>
              {navItems[0].isActive && (
                <VideoUploadComponent
                  uploadVideoData={uploadVideoData}
                  setUploadVideoData={setUploadVideoData}
                  uploadVideoDataFormData={uploadVideoDataFormData}
                />
              )}
              {navItems[1].isActive && (
                <EmbedVideoComponent
                  uploadVideoData={uploadVideoData}
                  setUploadVideoData={setUploadVideoData}
                  uploadVideoDataFormData={uploadVideoDataFormData}
                />
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default CourseVideo
