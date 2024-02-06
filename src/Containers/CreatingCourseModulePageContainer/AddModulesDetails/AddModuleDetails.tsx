import { useContext } from 'react';
import Button from '../../../Components/Button/Button'
import { AppContext } from '../../../Context/AppContext';
import classes from '../CreatingCourseModulePageContainer.module.css';
import Input from '../../../Components/Input/Input';
import TextArea from '../../../Components/TextArea/TextArea';

const AddModuleDetails = () => {
    const { setCurrentStepAndSave, currentStep } = useContext(AppContext);

    return (
        <div className={classes.addModules}>
            <h3>Add module details </h3>
            <p>Enhance module clarity with additional details.</p>
            <Input
                isRequired
                label="Add module title"
                placeholder="Untitled module "
            />
            <TextArea
                isRequired
                label="Module description"
                placeholder="Add module description here"
            />
            <TextArea
                isRequired
                label="Module objective"
                placeholder="Add module objective here"
            />
            <div className={classes.addModulesBottom}>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <Button
                    type='secondary'
                    onClick={() => setCurrentStepAndSave(currentStep - 1)}
                >
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18.5L18 6.5M6 6.5L18 18.5" stroke="#664EFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Close</span>
                </Button>
                <Button
                    type='primary'
                    onClick={() => setCurrentStepAndSave(currentStep + 1)}
                >
                    <span>Save and continue</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 8L21 12M21 12L17 16M21 12L3 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Button>
            </div>
        </div>
    )
}

export default AddModuleDetails