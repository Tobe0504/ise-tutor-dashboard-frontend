import { useState } from "react";
import CourseLessonModuleList from "../CourseLessonModuleList/CourseLessonModuleList";
import classes from "./CourseLessonsContainer.module.css";
import Button from "../../Components/Button/Button";

export const modulesArray = [
  {
    title: " UI frameworks",
    isActive: true,
    weeks: [
      {
        subTitle: " Intro to UI frameworks",
        videos: [
          {
            title: "Working with library",
            type: "Video",
            duration: "5 min",
          },
          {
            title: "Bootstrap documentation",
            type: "Reading",
            duration: "5 min",
          },
          {
            title: "Getting started with Bootstrap",
            type: "Video",
            duration: "5 min",
          },
          {
            title: "Bootstrap components",
            type: "Video",
            duration: "5 min",
          },
          {
            title: "Self review: Working with bootstrap grid",
            type: "Quiz",
            duration: "5 questions",
          },
        ],
      },
    ],
  },
];

const CourseLessonsContainer = () => {
  // States
  const [modules, setModules] = useState(modulesArray);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Button type="secondary">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.2008 3.29917L15.9079 2.59207L15.9079 2.59207L15.2008 3.29917ZM4.875 16.2766V17.2766C5.14022 17.2766 5.39457 17.1713 5.58211 16.9837L4.875 16.2766ZM2.25 16.2766H1.25C1.25 16.8289 1.69772 17.2766 2.25 17.2766V16.2766ZM2.25 13.5983L1.54289 12.8912C1.35536 13.0787 1.25 13.3331 1.25 13.5983H2.25ZM13.2562 4.00628C13.5979 3.66457 14.152 3.66457 14.4937 4.00628L15.9079 2.59207C14.7851 1.46931 12.9648 1.46931 11.842 2.59207L13.2562 4.00628ZM14.4937 4.00628C14.8354 4.34799 14.8354 4.90201 14.4937 5.24372L15.9079 6.65793C17.0306 5.53517 17.0306 3.71483 15.9079 2.59207L14.4937 4.00628ZM14.4937 5.24372L4.16789 15.5695L5.58211 16.9837L15.9079 6.65793L14.4937 5.24372ZM4.875 15.2766H2.25V17.2766H4.875V15.2766ZM11.842 2.59207L1.54289 12.8912L2.95711 14.3054L13.2562 4.00628L11.842 2.59207ZM1.25 13.5983V16.2766H3.25V13.5983H1.25ZM10.717 5.13128L13.3687 7.78293L14.7829 6.36872L12.1312 3.71707L10.717 5.13128Z" fill="#664EFE" />
          </svg>
          <span>Edit curriculum</span>
        </Button>
        <Button type="secondary">
          <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2501 6.5C11.2501 7.74264 10.2427 8.75 9.00006 8.75C7.75742 8.75 6.75006 7.74264 6.75006 6.5C6.75006 5.25736 7.75742 4.25 9.00006 4.25C10.2427 4.25 11.2501 5.25736 11.2501 6.5Z" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.84375 6.49997C2.79946 3.45716 5.64217 1.25 9.00039 1.25C12.3586 1.25 15.2014 3.45719 16.157 6.50003C15.2013 9.54284 12.3586 11.75 9.00041 11.75C5.64217 11.75 2.79944 9.54282 1.84375 6.49997Z" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>Preview curriculum</span>
        </Button>
      </div>
      <div className={classes.body}>
        <CourseLessonModuleList modules={modules} setModules={setModules} />
      </div>
    </div>
  );
};

export default CourseLessonsContainer;
