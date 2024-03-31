import React, { useState, useEffect, useRef } from 'react';
import classes from "./ScheduleCard.module.css";
import ellipses from "../../Assets/Images/ellipses.svg"
import yellowDot from "../../Assets/Images/yellowDot.svg";
import googleMeet from "../../Assets/Images/googleMeet.svg";
import ActionsModal from './ActionsModal/ActionsModal';

interface ScheduleCardProps {
    index: number;
    time: string;
    title: string;
    link: string;
}

const ScheduleCard = ({ index, time, title, link }: ScheduleCardProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    const handleEllipsesClick = () => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setActiveIndex(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <li className={classes.list}>
            <div className={classes.top}>
                <img src={yellowDot} alt="" />
                <span>{time}</span>
                <div className={classes.ellipses}>
                    <img
                        src={ellipses}
                        alt="more options"
                        onClick={handleEllipsesClick}
                    />
                    {activeIndex === index && (
                        <div ref={modalRef} className={classes.popover}>
                            <ActionsModal
                                onClick={() => { }}
                                onClick2={() => { }}
                                onClick3={() => { }}
                                onClick4={() => { }}
                                onClick5={() => { }}
                            />
                        </div>
                    )}
                </div>
            </div>
            <h4>{title}</h4>
            <div className={classes.bottom}>
                <img src={googleMeet} alt="Meeting Type" />
                <a href={link} target="_blank" rel="noopener noreferrer">Join Now</a>
            </div>
        </li>
    );
};

export default ScheduleCard;
