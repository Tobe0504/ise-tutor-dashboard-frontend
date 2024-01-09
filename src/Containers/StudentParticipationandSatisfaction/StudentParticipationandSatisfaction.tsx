import Calender from "../../Components/Calender/Calender";
import DashboardModules from "../DashboardModules/DashboardModules";
import classes from "./StudentParticipationandSatisfaction.module.css";

const StudentParticipationandSatisfaction = () => {
  return (
    <section className={classes.container}>
      <div className={classes.subContainer}>
        <DashboardModules />
        <Calender />
      </div>
    </section>
  );
};

export default StudentParticipationandSatisfaction;


// import React, { useState } from 'react';

// const BarChart = () => {
//   const [data, setData] = useState({
//     X: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     Y: [10, 20, 50, 60, 80, 100],
//   });

//   const maxDataValue = Math.max(...data.Y);

//   const svgHeight = 200;
//   const svgWidth = 300;
//   const barWidth = svgWidth / data.X.length;

//   return (
//     <svg width={svgWidth} height={svgHeight}>
//       {data.Y.map((value, index) => (
//         <rect
//           key={index}
//           x={index * barWidth}
//           y={svgHeight - (value / maxDataValue) * svgHeight}
//           width={barWidth}
//           height={(value / maxDataValue) * svgHeight}
//           fill="blue"
//         />
//       ))}
//       {data.X.map((day, index) => (
//         <text
//           key={index}
//           x={index * barWidth + barWidth / 2}
//           y={svgHeight + 15}
//           textAnchor="middle"
//           fill="black"
//         >
//           {day}
//         </text>
//       ))}
//     </svg>
//   );
// };

// export default BarChart;
