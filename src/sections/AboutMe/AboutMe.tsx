import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faCamera,
  faDumbbell,
  faPlaneDeparture,
  faBookOpen
} from "@fortawesome/free-solid-svg-icons";
import profilePicture from "../../media/steffen.jpeg"

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
  const cameraIcon: JSX.Element = <FontAwesomeIcon icon={faCamera} />;
  const dumbellIcon: JSX.Element = <FontAwesomeIcon icon={faDumbbell} />;
  const gamingIcon: JSX.Element = <FontAwesomeIcon icon={faGamepad} />;
  const planeIcon: JSX.Element = <FontAwesomeIcon icon={faPlaneDeparture} />;
  const readingIcon: JSX.Element = <FontAwesomeIcon icon={faBookOpen} />;

  return (
    <section className={styles.aboutMeSection}>
      <article className={styles.profile}>
        <h2 className={styles.h2Underline}>About me</h2>
        <img className={styles.profilePicture} src={profilePicture} alt="Steffen" />
        <p className={styles.profileText}>
          I'm currently pursuing a masters degree in computer science at the
          University of Oslo (UiO), while working part time as a operations consultant.
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
    </section>
  );
};

export default AboutMe;
