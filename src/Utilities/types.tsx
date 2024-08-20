export type completeProfileType = {
  first_name: string
  last_name: string
  headline: string
  profile_image: string
  gender: string
  country: string
  bio: string
  linkedIn_profile: string
  twitter_profile: string
}

export type moduleDataType = {
  title: string
  objective: string[]
  description: string
}

export type uploadVideoData = {
  title: string
  embed_url: string
  embed_description: string
  video_file: null | File
  thumbnail: null | File
}

export type uploadReadingData = {
  title: string
  reading_contents: string
  file: FileList | null
  resources: string[]
}

export type assetsType = {
  frontendFile: any
  file: any | File
}
