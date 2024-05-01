import React from 'react'
import classes from "./LiveClassSessions.module.css"
import ScheduleCard from '../../Components/ScheduleCard/ScheduleCard'

type LiveClassSessionsProps = {
  height?: string;
  padding?: string;
};


const LiveClassSessions = ({ height, padding }: LiveClassSessionsProps) => {
  const liveSession = [
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      link: ""
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      link: ""
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      link: ""
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      link: ""
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      link: ""
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      link: ""
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      link: ""
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      link: ""
    },
  ];

  return (
    <div className={classes.container} style={{ height, padding }}>
      <ul>
        {liveSession.map((data, index) => {
          return (
            <ScheduleCard
              key={index}
              index={index}
              time={data.time}
              title={data.title}
              link={data.link}
            />
          );
        })}
      </ul>
    </div>
  )
}

export default LiveClassSessions