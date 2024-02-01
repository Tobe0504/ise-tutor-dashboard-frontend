import { useState } from "react";
import classes from "./CreatingCourseModulePreviewContainer.module.css";
import EmptyPreviewContainer from "./EmptyPreviewContainer/EmptyPreviewContainer";

const CreatingCourseModulePreviewContainer = () => {
    // States
    const [previewItem] = useState<any[]>([
        {
            title: "Live class Sessions",
            activeComponent: null,
            activeNullStateComponent: <EmptyPreviewContainer />,
        },
    ]);

    const activeComponent = previewItem[0].activeComponent;
    const activeNullStateComponent = previewItem[0].activeNullStateComponent;

    return (
        <div className={classes.container}>
            <div>
                {activeComponent ? activeComponent : activeNullStateComponent}
            </div>
        </div>
    );
};

export default CreatingCourseModulePreviewContainer;