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

export type uploadPresentationData = {
  title: string
  presentation_content: File | null
  resources: string[]
}

export type uploadQuizData = {
  title: string
  instruction: string
  duration: string
  questions: questionTypes[]
}

export type questionTypes = {
  text: string
  options: {
    id: number
    value: string
    is_answer: boolean
  }[]
  point: number
  question_type: 'single-choice' | 'multiple-choice'
  explanation: string
}

export type assessmentType = {
  title: string
  instruction: string
  details: string
  attachment: null | File
}

export type assetsType = {
  frontendFile: any
  file: any | File
}

export type studentRequestDataType = {
  from: number
  last_page: number
  next_page_url: null | string
  per_page: number
  prev_page_url: null | string
  to: number
  total: number
  data: studentsType[]
}

export type studentsType = {
  email: string
  enrollment_date: string
  full_name: string
  studentId: number
  isActive?: boolean
}

export type availabilityType = {
  day: string
  isActive?: boolean
  availableTimes: {
    startTime: string
    endTime: string
  }[]
}[]

export type dayTestTypes = {
  dayOfWeek: string
  isActive: boolean
  dayNumber: null | number
  date: string | null
  schedules: number
}

export type createMeetingDataType = {
  date: string
  startTime: string
  endTime: string
  sessionSubject: string
}

export type feedbackDataType = {
  grade: string
  feedback: string
}
