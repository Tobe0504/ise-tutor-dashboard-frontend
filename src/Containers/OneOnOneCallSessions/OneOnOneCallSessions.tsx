import React, { useState } from 'react'
import classes from "./OneOnOneCallSessions.module.css"
import googleMeet from "../../Assets/Images/google-meet.png"
import ellipses from "../../Assets/Images/ellipses.svg"
import yellowDot from "../../Assets/Images/yellowDot.svg"
import { Link } from 'react-router-dom'

const OneOnOneCallSessions = () => {
  const [oneOnOneSession, setOneOnOneSession] = useState([
    {
      time: "10:00am - 11:00am",
      title: "1-on-1 session with Kenneth",
      meetingType: googleMeet,
    },
    {
      time: "10:00am - 11:00am",
      title: "1-on-1 session with Kenneth",
      meetingType: googleMeet,
    },
    {
      time: "10:00am - 11:00am",
      title: "1-on-1 session with Kenneth",
      meetingType: googleMeet,
    },
    {
      time: "10:00am - 11:00am",
      title: "1-on-1 session with Kenneth",
      meetingType: googleMeet,
    },
    {
      time: "10:00am - 11:00am",
      title: "1-on-1 session with Kenneth",
      meetingType: googleMeet,
    },
    {
      time: "10:00am - 11:00am",
      title: "1-on-1 session with Kenneth",
      meetingType: googleMeet,
    },
    {
      time: "10:00am - 11:00am",
      title: "1-on-1 session with Kenneth",
      meetingType: googleMeet,
    },
  ]);

  const filterItems = (id: number) => {
    const oneOnOneSessionCopy = oneOnOneSession.filter((data, i) => {
      return i !== id;
    });

    setOneOnOneSession(oneOnOneSessionCopy);
  };

  return (
    <div className={classes.container}>
      <ul>
        {oneOnOneSession.map((data, i) => {
          return (
            <li key={Math.random()} className={classes.list}>
              <div>
                <div>
                  <img src={yellowDot} alt="" />
                  <span>{data.time}</span>
                </div>
                <img onClick={() => {
                  filterItems(i);
                }} src={ellipses} alt="more options" />
              </div>
              <h4>{data.title}</h4>
              <div>
                <img src={data.meetingType} alt="Meeting Type" />
                <Link to="/">Join Now</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default OneOnOneCallSessions
