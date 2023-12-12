import { useState } from "react";
import classes from "./ProfileProfileAbout.module.css";
import { noProfileImage } from "../../Assets/Images";
import { Input, DropdownWithSearch } from "../../Components";

const ProfileProfileAbout = () => {
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

  const removeImage = () => {
    setUserImage((prevState: any) => {
      return { ...prevState, frontendFile: null, file: null };
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.userDetails}>
        <div>
          <div className={classes.profilePhotoHeader}>
            <h4>Upload your profile picture</h4>
          </div>
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
                <label htmlFor="profilePhoto">Browse</label>
                <label onClick={removeImage}>Remove</label>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.inputName}>
          <Input isRequired label="Name" placeholder="Gloria Davis" />
          <p className={classes.infoTip}>You can always edit this later</p>
        </div>

        <Input
          isRequired
          label="Headline"
          placeholder="e.g Top recruiter at Google"
        />

        <DropdownWithSearch
          label="Gender"
          options={[]}
          isRequired
          title="Select"
        />

        <div>
          <DropdownWithSearch
            label="Country"
            options={[]}
            isRequired
            title="Select"
          />
          <p className={classes.infoTip}>Use your current location</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileProfileAbout;
