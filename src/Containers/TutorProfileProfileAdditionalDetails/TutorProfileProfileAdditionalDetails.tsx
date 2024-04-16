import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";
import Input from "../../Components/Input/Input";
import ProfileSectionContainer from "../../Components/ProfileSectionContainer/ProfileSectionContainer";
import TextArea from "../../Components/TextArea/TextArea";
import classes from "./TutorProfileProfileAdditionalDetails.module.css";

const TutorProfileProfileAdditionalDetails = () => {
  return (
    <ProfileSectionContainer
      header="About me"
      paragraph="Share more information with us if you’d like."
    >
      <div className={classes.container}>

        <div className={classes.flex2}>
          <DropdownWithSearch label="Birthday" title="Day" options={[]} />
          <DropdownWithSearch label="Month" title="Day" options={[]} />
          <DropdownWithSearch label="Year" title="Day" options={[]} />
        </div>
        <p className={classes.infoTip}>We’d like to celebrate your birthday with you 🎉
        </p>

        <TextArea label="Bio" placeholder="Tell us about you" isRequired />
        <p className={classes.infoTip}>500 characters remaining</p>

        <Input
          label="Linkedin profile"
          placeholder="Enter profile link"
          isRequired
        />

        <Input
          label="Website link"
          placeholder="Enter website link"
          isRequired
        />

      </div>
    </ProfileSectionContainer>
  );
};

export default TutorProfileProfileAdditionalDetails;
