import { useContext } from 'react';
import Button from '../../../Components/Button/Button'
import { AppContext } from '../../../Context/AppContext';
import classes from '../CreatingCourseModulePageContainer.module.css';

const AddEngagingModule = () => {
    const { setCurrentStep } = useContext(AppContext);

    return (
        <div className={`${classes.addModules} ${classes.addEngagingContent}`}>
            <h3>Add engaging lesson content</h3>
            <p>Include texts, videos and pictures to engage your students. </p>
            <div className={classes.addModulesBottom}>
                <Button
                    type='primary'
                    onClick={() => setCurrentStep(5)}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4V20M20 12L4 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Add lesson</span>
                </Button>
            </div>
        </div>
    )
}

export default AddEngagingModule