import Input from "../../Components/Input/Input";
import ProfileSectionContainer from "../../Components/ProfileSectionContainer/ProfileSectionContainer";
import TextArea from "../../Components/TextArea/TextArea";
import classes from "./ProfileProfileAdditionalDetails.module.css";

const ProfileProfileAdditionalDetails = () => {
  return (
    <ProfileSectionContainer
      header="Top skills"
      paragraph=" Let’s be friends. Share more information with us if you’d like."
    >
      <div className={classes.container}>
        <Input
          label="Linkedin profile"
          placeholder="Enter profile link"
          isRequired
        />
        <TextArea label="Bio" placeholder="Tell us about you" isRequired />
      </div>
    </ProfileSectionContainer>
  );
};

export default ProfileProfileAdditionalDetails;
