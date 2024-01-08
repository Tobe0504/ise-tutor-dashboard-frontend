import { useState } from "react";
import ProfileSectionContainer from "../../Components/ProfileSectionContainer/ProfileSectionContainer";
import ToggleSwitch from "../../Components/ToggleSwitch/ToggleSwitch";
import { activeTogglerRestAll } from "../../HelperFunctions/activeTogglers";
import classes from "./ProfileAccountNotifications.module.css";

const ProfileAccountNotifications = () => {
  const [notificationSettings, setNotificationSettings] = useState([
    {
      title: "News and Announcements",
      paragraph:
        "Get notified about important news or announcement.",
      isActive: false,
    },
    {
      title: "Session Notifications",
      paragraph:
        "Get notified when students book sessions, request rescheduling, or make cancellations",
      isActive: false,
    },
    {
      title: "Message Notifications",
      paragraph:
        "Receive notifications when students send new messages or inquiries.",
      isActive: false,
    },
    {
      title: "Session Reminders",
      paragraph:
        "Receive reminders on upcoming tutoring sessions, including the date, time, and location",
      isActive: false,
    },
    {
      title: "Feedback",
      paragraph:
        "Receive feedback and reviews from students and be notified when new feedback is posted.",
      isActive: false,
    },
  ]);

  return (
    <ProfileSectionContainer
      header="Manage Notifications"
      paragraph="Customize your email notifications. Easily manage your preferences."
    >
      <div className={classes.container}>
        {notificationSettings.map((data, i) => {
          return (
            <div className={classes.notifications} key={i}>
              <div>
                <h5>{data.title}</h5>
                <p>{data.paragraph}</p>
              </div>
              <div>
                <ToggleSwitch
                  checked={data.isActive}
                  onChange={() => {
                    activeTogglerRestAll(
                      i,
                      notificationSettings,
                      setNotificationSettings
                    );
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </ProfileSectionContainer>
  );
};

export default ProfileAccountNotifications;
