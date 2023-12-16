import React from 'react'
import classes from './TutorProfileProfileCertifications.module.css';
import ProfileSectionContainer from '../../Components/ProfileSectionContainer/ProfileSectionContainer';
import Input from '../../Components/Input/Input';

const TutorProfileProfileCertifications = () => {
    return (
        <ProfileSectionContainer
            header="Certifications"
            paragraph="Tell us about your educational certifications"
        >
            <div className={classes.container}>
                <Input
                    label="Certifications"
                    placeholder="Enter certification name"
                    isRequired
                />
            </div>
        </ProfileSectionContainer>
    );
}

export default TutorProfileProfileCertifications
