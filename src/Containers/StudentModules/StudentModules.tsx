import { useState } from "react";
import EmptyTabComponent from "../../Components/EmptyTabComponent/EmptyTabComponent";
import classes from "./StudentModules.module.css";
import noResult from "../../Assets/Images/noResult.svg";
import StudentDataTable from "../StudentDataTable/StudentDataTable";


const StudentModules = () => {
  // States
  const [studentGridData] = useState<any[]>([
    {
      isActive: true,
      activeComponent: <StudentDataTable />,
      activeNullStateComponent: (
        <EmptyTabComponent
          image={noResult}
          firstParagraph="You have no schedule at the moment."
          secondParagraph=""
          route="/courses"
          buttontext="Explore classes"
          showButton={true}
        />
      ),
    },
  ]);

  const activeCOmponent = studentGridData.find((data) => {
    return data.isActive;
  });
  return (
    <div className={classes.container}>
      <div>
        {activeCOmponent.activeComponent
          ? activeCOmponent.activeComponent
          : activeCOmponent.activeNullStateComponent}
      </div>
    </div>
  );
};

export default StudentModules;
