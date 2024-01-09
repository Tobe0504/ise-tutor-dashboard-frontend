import { useState } from "react";
import amirahTemi from "../../Assets/Images/amirahTemi.svg";
import classes from "./StudentsPerformance.module.css";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";

const StudentsPerformance = () => {
  // Utils
  const [aheadStudent, setAheadStudent] = useState([
    {
      name: "Amirah Oyegoke",
      image: amirahTemi,
      percent: 80.7,
      text: "ahead other learners.",
    },
    {
      name: "Amirah Oyegoke",
      image: amirahTemi,
      percent: 75.7,
      text: "ahead other learners.",
    },
    {
      name: "Amirah Oyegoke",
      image: amirahTemi,
      percent: 50.7,
      text: "ahead other learners.",
    },
  ]);

  const [behindStudent, setBehindStudent] = useState([
    {
      name: "Amirah Oyegoke",
      image: amirahTemi,
      percent: 40.7,
      text: "behind other learners.",
    },
    {
      name: "Amirah Oyegoke",
      image: amirahTemi,
      percent: 23.7,
      text: "behind other learners.",
    },
  ]);

  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <div>
          <h4>Students Performance</h4>
        </div>
      </div>

      <div className={classes.body}>
        {aheadStudent.map((data, i) => {
          return (
            <div key={Math.random()} className={classes.tableBody}>
              <div>
                <span>{i + 1}</span>
                <span className={classes.user}>
                  <img src={data.image} alt="User" />
                  <span>{data.name}</span>
                </span>
              </div>
              <span className={classes.performanceProgressBar}><ProgressBar percentage={data.percent} color="#fff" /></span>
              <span><span className={classes.aheadPercent}>-{data.percent} </span>{data.text}</span>
            </div>
          );
        })}
        <div className={classes.divider} />
        {behindStudent.map((data, i) => {
          return (
            <div key={Math.random()} className={classes.tableBody}>
              <div>
                <span>{i + 29}</span>
                <span className={classes.user}>
                  <img src={data.image} alt="User" />
                  <span>{data.name}</span>
                </span>
              </div>
              <span className={classes.performanceProgressBar}><ProgressBar percentage={data.percent} color="#fff" /></span>
              <span><span className={classes.behindPercent}>-{data.percent}</span> {data.text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StudentsPerformance;
