import React from 'react'
import classes from "./LiveClassSessions.module.css"
import googleMeet from "../../Assets/Images/google-meet.png"
import ScheduleCard from '../../Components/ScheduleCard/ScheduleCard'

const LiveClassSessions = () => {
  const liveSession = [
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      meetingType: googleMeet,
      link: ""
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      meetingType: googleMeet,
      link: ""
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      meetingType: googleMeet,
      link: ""
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      meetingType: googleMeet,
      link: ""
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      meetingType: googleMeet,
      link: ""
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      meetingType: googleMeet,
      link: ""
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      meetingType: googleMeet,
      link: ""
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      meetingType: googleMeet,
      link: ""
    },
  ];

  return (
    <div className={classes.container}>
      <ul>
        {liveSession.map((data, i) => {
          return (
            <ScheduleCard
              time={data.time}
              title={data.title}
              meetingType={data.meetingType}
              link={data.link}
            />
          );
        })}
      </ul>
    </div>
  )
}

export default LiveClassSessions
