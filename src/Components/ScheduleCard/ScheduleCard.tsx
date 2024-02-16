import React from 'react';
import classes from "./ScheduleCard.module.css"
import ellipses from "../../Assets/Images/ellipses.svg"
import yellowDot from "../../Assets/Images/yellowDot.svg"
import googleMeet from "../../Assets/Images/google-meet.png"


interface ScheduleCardProps {
    time: string;
    title: string;
    link: string;
}

const ScheduleCard = ({ time, title, link }: ScheduleCardProps) => {
    return (
        <li className={classes.list}>
            <div>
                <div>
                    <img src={yellowDot} alt="" />
                    <span>{time}</span>
                </div>
                <img src={ellipses} alt="more options" />
            </div>
            <h4>{title}</h4>
            <div>
                <img src={googleMeet} alt="Meeting Type" />
                <a href={link} target="_blank" rel="noopener noreferrer">Join Now</a>
            </div>
        </li>
    );
};

export default ScheduleCard;
