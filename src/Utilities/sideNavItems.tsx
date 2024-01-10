export type sideNavItemsType = {
  title: string;
  route: string | null;
  keywords?: string[];
  otherOptions: {
    isActive: boolean;
    data: { title: string; route: string; isLive: boolean }[];
  } | null;
  isVisible: boolean;
  children?: {
    title: string; route: string;
  }[]
}[];

export const sideNavItems: sideNavItemsType = [
  {
    title: "Dashboard",
    route: "/dashboard",
    keywords: ["dashboard", ""],
    otherOptions: null,
    isVisible: true,
  },

  {
    title: "Courses",
    route: "/courses",
    keywords: ["courses", "courses/"],
    otherOptions: null,
    isVisible: true,
    children: [{ title: "Courses curriculum", route: "/courses/courses-curriculum" }]
  },

  {
    title: "Student",
    route: "/student",
    keywords: ["student"],
    otherOptions: null,
    isVisible: true,
    children: [{ title: "Quiz", route: "/student/quiz" }, { title: "Assignment", route: "/student/assignment" }]

  },
  {
    title: "Resources",
    route: "/resources",
    keywords: ["resources"],
    otherOptions: null,
    isVisible: true,
    children: [{ title: "Uploads", route: "/resources/uploads" }, { title: "Drafts", route: "/resources/drafts" }]

  },

  {
    title: "Schedule",
    route: "/schedule",
    keywords: ["schedule"],
    otherOptions: null,
    isVisible: true,
  },

  {
    title: "Profile",
    route: "/profile-info",
    keywords: ["profile"],
    otherOptions: null,
    isVisible: true,
  },

  {
    title: "Support",
    route: "/support",
    keywords: ["support"],
    otherOptions: null,
    isVisible: true,
  },
];
