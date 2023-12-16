import { useState } from "react";
import Input from "../../Components/Input/Input";
import ProfileSectionContainer from "../../Components/ProfileSectionContainer/ProfileSectionContainer";
import classes from "./TutorProfileProfileAbout.module.css";
import noProfileImage from "../../Assets/Images/noProfileImage.svg";
import nigeriaFlag from "../../Assets/Images/nigerianFlag.svg"
import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";

const TutorProfileProfileAbout = () => {
  // States
  const [userImage, setUserImage] = useState<{
    frontendFile: null | string;
    file: null | string;
  }>({
    file: null,
    frontendFile: null,
  });

  // Utils
  const imageHandler = (e: any) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserImage((prevState: any) => {
          return { ...prevState, frontendFile: reader.result };
        });
      }
    };
    reader.readAsDataURL(e.target.files[0]);

    setUserImage((prevState: any) => {
      return { ...prevState, file: e.target.files[0] };
    });
  };

  return (
    <div className={classes.container}>
      <ProfileSectionContainer
        header="Contact Information"
        paragraph="Tell us about yourself so we can know you better"
      >
        <div className={classes.userDetails}>
          <Input isRequired label="Full name" placeholder="Amirah Temitope" />

          <div className={classes.profilePhoto}>
            <div>
              <img
                src={
                  !userImage.frontendFile
                    ? noProfileImage
                    : (userImage?.frontendFile as string)
                }
                alt="Profile"
              />
              <div className={classes.buttonUpper}>
                <input type="file" id="profilePhoto" onChange={imageHandler} />
                <label htmlFor="profilePhoto">Upload photo</label>
              </div>
            </div>
          </div>

          <p className={classes.profilePhotoTip}>
            Maximum size: 1MB. Supported formats: JPG, GIF, or PNG.
          </p>

          <Input isRequired label="Email address" placeholder="Enter Email address" />

          <div className={classes.flex}>
            <DropdownWithSearch label="Phone number" options={[]} title={
              <>
                <img src={nigeriaFlag} alt="nigeria flag" /> <span style={{marginInline: 5}}>NGN</span>
              </>
            }
             />
            <Input isRequired />
          </div>

          <DropdownWithSearch
            label="Gender"
            options={[]}
            isRequired
            title="Select"
          />

          <DropdownWithSearch
            label="Country"
            options={[]}
            isRequired
            title="Select"
          />

          <DropdownWithSearch
            label="Preferred language"
            options={[]}
            title="Select"
          />
        </div>
      </ProfileSectionContainer>
    </div>
  );
};

export default TutorProfileProfileAbout;
