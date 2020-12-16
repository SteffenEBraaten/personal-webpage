import React from "react";
import styles from "./ProfilePicture.module.css";

interface ProfilePic {
  imageURL: string;
  altText?: string;
  large: boolean;
}

const ProfilePicture = ({ imageURL, altText, large = false }: ProfilePic) => {
  return (
    <img
      src={imageURL}
      className={`${styles.roundedImage} ${
        large ? styles.largeSize : styles.normalSize
      }`}
      alt={altText}
    />
  );
};

export default ProfilePicture;
