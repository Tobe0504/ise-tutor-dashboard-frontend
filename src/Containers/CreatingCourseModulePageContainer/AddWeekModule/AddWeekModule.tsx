import { useContext } from 'react';
import Button from '../../../Components/Button/Button'
import { AppContext } from '../../../Context/AppContext';
import classes from '../CreatingCourseModulePageContainer.module.css';

const AddWeekModule = () => {
    const { setCurrentStep } = useContext(AppContext);

    return (
        <div className={`${classes.addModules} ${classes.addEngagingContent}`}>
            <h3>Add week to your modules</h3>
            <p>Give your course structure with weekly content.</p>
            <div className={classes.addModulesBottom}>
                <Button
                    type='primary'
                    onClick={() => setCurrentStep(2)}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4V20M20 12L4 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Add week</span>
                </Button>
            </div>
        </div>
    )
}

export default AddWeekModule