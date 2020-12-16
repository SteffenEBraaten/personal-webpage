import React from "react";
import styles from "./ProfilePicture.module.css";

interface ProfilePic {
  imageURL: JSX.Element;
  altText?: string;
  small?: boolean;
}

const ProfilePicture = ({ imageURL, small = false }: ProfilePic) => {
  return (
      <div className={`${styles.roundedImage} ${
        small ? styles.smallSize : styles.normalSize}`}>
        {imageURL}  
      </div>
  );
};

export default ProfilePicture;
