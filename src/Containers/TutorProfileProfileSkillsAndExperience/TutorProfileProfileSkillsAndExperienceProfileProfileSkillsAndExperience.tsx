import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";
import ProfileSectionContainer from "../../Components/ProfileSectionContainer/ProfileSectionContainer";
import TagInput from "../../Components/TagInput/TagInput";
import classes from "./TutorProfileProfileSkillsAndExperience.module.css";

const TutorProfileProfileSkillsAndExperience = () => {
  return (
    <ProfileSectionContainer
      header="Skills and experience"
      paragraph="Tell us more about your work and skillset"
    >
      <div className={classes.container}>
        <DropdownWithSearch
          label="Top skills"
          options={[]}
          isRequired
          title="Select"
        />
        <DropdownWithSearch
          label="Experience level"
          options={[]}
          isRequired
          title="Select"
        />

        <DropdownWithSearch
          label="Years of experience"
          options={[]}
          isRequired
          title="Select"
        />

        <DropdownWithSearch
          label="Technical proficiency"
          options={[]}
          isRequired
          title="Enter proficiency"
        />

        <div className={classes.tag}>
          <TagInput label='Python' />
          <TagInput label='Java' />
          <TagInput label='JavaScript' />
          <TagInput label='C/C++' />
          <TagInput label='Microsoft Azure' />
        </div>
      </div>
    </ProfileSectionContainer>
  );
};

export default TutorProfileProfileSkillsAndExperience
