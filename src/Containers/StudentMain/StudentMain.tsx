import { useState } from 'react';
import classes from './StudentMain.module.css'
import StudentMainEmtptyTab from './StudentMainEmtptyTab';
import StudentData from '../StudentData/StudentData';

const StudentMain = () => {
  // Context

  // States
  const [studentGridData] = useState<any[]>([
    {
      isActive: true,
      activeComponent: <StudentData />,
      activeNullStateComponent: <StudentMainEmtptyTab />,
    },
  ]);

  const activeCOmponent = studentGridData.find((data) => {
    return data.isActive;
  });

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        {activeCOmponent.activeComponent
          ? activeCOmponent.activeComponent
          : activeCOmponent.activeNullStateComponent}
      </div>
    </div>
  )
}

export default StudentMain
