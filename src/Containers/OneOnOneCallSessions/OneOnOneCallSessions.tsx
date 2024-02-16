import React from 'react'
import classes from "./OneOnOneCallSessions.module.css"
import ScheduleCard from '../../Components/ScheduleCard/ScheduleCard'

type OneOnOneCallSessionsProps = {
  height: string;
  padding: string;
};

const OneOnOneCallSessions = ({ height, padding }: OneOnOneCallSessionsProps) => {
  const oneOnOneSession = [
    {
      time: "10:00am - 11:00am",
      title: "1-on-1 session with Kenneth",
      link: "",
    },
    {
      time: "10:00am - 11:00am",
      title: "1-on-1 session with Kenneth",
      link: "",
    },
    {
      time: "10:00am - 11:00am",
      title: "1-on-1 session with Kenneth",
      link: "",
    },
    {
      time: "10:00am - 11:00am",
      title: "1-on-1 session with Kenneth",
      link: "",
    },
    {
      time: "10:00am - 11:00am",
      title: "1-on-1 session with Kenneth",
      link: "",
    },
    {
      time: "10:00am - 11:00am",
      title: "1-on-1 session with Kenneth",
      link: "",
    },
    {
      time: "10:00am - 11:00am",
      title: "1-on-1 session with Kenneth",
      link: "",
    },
    {
      time: "10:00am - 11:00am",
      title: "1-on-1 session with Kenneth",
      link: "",
    },
    {
      time: "10:00am - 11:00am",
      title: "1-on-1 session with Kenneth",
      link: "",
    },
  ];

  return (
    <div className={classes.container} style={{ height, padding }}>
      <ul>
        {oneOnOneSession.map((data, i) => {
          return (
            <ScheduleCard
              key={i}
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

export default OneOnOneCallSessions
