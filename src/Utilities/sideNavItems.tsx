export type sideNavItemsType = {
  title: string
  route: string | null
  keywords?: string[]
  otherOptions: {
    isActive: boolean
    data: { title: string; route: string; isLive: boolean }[]
  } | null
  isVisible: boolean
  children?: {
    title: string
    route: string
  }[]
}[]

export const sideNavItems: sideNavItemsType = [
  {
    title: 'Dashboard',
    route: '/dashboard',
    keywords: ['dashboard', ''],
    otherOptions: null,
    isVisible: true,
  },

  {
    title: 'Courses',
    route: '/courses',
    keywords: ['courses', 'courses/'],
    otherOptions: null,
    isVisible: true,
    children: [{ title: 'Feedback', route: '/courses/feedback' }],
  },

  {
    title: 'Student',
    route: '/student',
    keywords: ['student'],
    otherOptions: null,
    isVisible: true,
    children: [
      { title: 'Quiz', route: '/student/quiz' },
      { title: 'Assignment', route: '/student/assignment' },
    ],
  },

  {
    title: 'Schedule',
    route: '/schedule',
    keywords: ['schedule'],
    otherOptions: null,
    isVisible: true,
  },

  {
    title: 'Profile',
    route: '/profile-info/profile',
    keywords: ['profile'],
    otherOptions: null,
    isVisible: true,
  },

  {
    title: 'Support',
    route: '/support',
    keywords: ['support'],
    otherOptions: null,
    isVisible: true,
  },
]
