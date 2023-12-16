import React from 'react'
import classes from './TutorProfileProfileCertifications.module.css';
import ProfileSectionContainer from '../../Components/ProfileSectionContainer/ProfileSectionContainer';
import Input from '../../Components/Input/Input';
import TagInput from '../../Components/TagInput/TagInput';

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
                <div className={classes.tag}>
                    <TagInput label='Advanced Programming Proficiency Certificate' />
                    <TagInput label='DevOps Mastery Certificate' />
                </div>
            </div>
        </ProfileSectionContainer>
    );
}

export default TutorProfileProfileCertifications
