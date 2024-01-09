import React, { useState } from 'react'
import classes from "./LiveClassSessions.module.css"
import googleMeet from "../../Assets/Images/google-meet.png"
import ellipses from "../../Assets/Images/ellipses.svg"
import yellowDot from "../../Assets/Images/yellowDot.svg"
import { Link } from 'react-router-dom'

const LiveClassSessions = () => {
  const [liveSession, setLiveSession] = useState([
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      meetingType: googleMeet,
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      meetingType: googleMeet,
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      meetingType: googleMeet,
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      meetingType: googleMeet,
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      meetingType: googleMeet,
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      meetingType: googleMeet,
    },
    {
      time: "10:00am - 11:00am",
      title: "LIVE sessions with students",
      meetingType: googleMeet,
    },
  ]);

  const filterItems = (id: number) => {
    const liveSessionCopy = liveSession.filter((data, i) => {
      return i !== id;
    });

    setLiveSession(liveSessionCopy);
  };

  return (
    <div className={classes.container}>
      <ul>
        {liveSession.map((data, i) => {
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

export default LiveClassSessions
