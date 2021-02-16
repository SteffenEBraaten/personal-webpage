import React from "react";
import {
  cameraIcon,
  dumbellIcon,
  gamingIcon,
  planeIcon,
  readingIcon,
} from "../../media/FontAwesomeIcons";
import profilePicture from "../../media/steffen.jpeg";

import styles from "./AboutMe.module.css";
interface liWithIcon {
  icon: JSX.Element;
  text: string;
}

const ListItemWithIcon = ({ icon, text }: liWithIcon) => {
  return (
    <li className={styles.listItemWithIcon}>
      <div className={styles.listItemWithIconIcon}>{icon}</div>
      <div className={styles.listItemWithIconText}>{text}</div>
    </li>
  );
};

const AboutMe = () => {
  return (
    <>
      <section className={styles.aboutMeSection}>
        <h2>About me</h2>
        <div className={styles.aboutMeSectionContainer}>
          <article className={styles.profile}>
            <img
              className={styles.profilePicture}
              src={profilePicture}
              alt="Steffen"
            />
            <p className={styles.profileText}>
              I'm currently pursuing a masters degree in computer science at the
              University of Oslo (UiO), while working part time as a operations
              consultant.
            </p>
          </article>
          <div className={styles.listRow}>
            <div>
              <h3>Some of my hobbies include</h3>
              <ul className={styles.list}>
                <ListItemWithIcon icon={gamingIcon} text={"Gaming"} />
                <ListItemWithIcon icon={cameraIcon} text={"Photography"} />
                <ListItemWithIcon icon={readingIcon} text={"Reading"} />
                <ListItemWithIcon icon={dumbellIcon} text={"Training"} />
                <ListItemWithIcon icon={planeIcon} text={"Travelling"} />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
