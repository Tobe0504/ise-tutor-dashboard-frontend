export type sideNavItemsType = {
  title: string;
  route: string | null;
  keywords?: string[];
  otherOptions: {
    isActive: boolean;
    data: { title: string; route: string; isLive: boolean }[];
  } | null;
  isVisible: boolean;
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
  },

  {
    title: "Collaboration hub",
    route: "/collaboration-hub",
    keywords: ["collaboration-hub"],
    otherOptions: null,
    isVisible: true,
  },

  // {
  //   title: "Resources",
  //   route: "/resources",
  //   keywords: ["resources"],
  //   otherOptions: null,
  //   isVisible: true,
  // },

  {
    title: "Profile",
    route: "/profile",
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

  {
    title: "Referral",
    route: "/referral",
    keywords: ["referral"],
    otherOptions: null,
    isVisible: true,
  },
];
