import TutorProfileProfileAbout from "../TutorProfileProfileAbout/TutorProfileProfileAbout";
import TutorProfileProfileAdditionalDetails from "../TutorProfileProfileAdditionalDetails/TutorProfileProfileAdditionalDetails";
import TutorProfileProfileCertifications from "../TutorProfileProfileCertifications/TutorProfileProfileCertifications";
import TutorProfileProfileSkillsAndExperience from "../TutorProfileProfileSkillsAndExperience/TutorProfileProfileSkillsAndExperienceProfileProfileSkillsAndExperience";
import classes from "./TutorProfileProfile.module.css";

const TutorProfileProfile = () => {
  return (
    <section className={classes.container}>
      <TutorProfileProfileAbout />
      <TutorProfileProfileAdditionalDetails />
      <TutorProfileProfileSkillsAndExperience />
      <TutorProfileProfileCertifications />
    </section>
  );
};

export default TutorProfileProfile;
