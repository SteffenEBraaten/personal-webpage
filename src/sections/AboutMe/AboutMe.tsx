import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faCamera,
  faDumbbell,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import ProfileSteffen from "../../components/svgs/ProfileSteffen";

import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.aboutMeSection}>
      <article>
        <h2 className={styles.h2Underline}>About me</h2>
        <ProfilePicture imageURL={<ProfileSteffen />} />
        <p>
          I'm currently doing a masters degree in computer science at the
          University of Oslo while working part time as a operations consultant.
        </p>
      </article>
      <div className={styles.listRow}>
        <div>
          <h3>Some of my hobbies include</h3>
          <ul className={styles.list}>
            <li>
              <FontAwesomeIcon icon={faGamepad} /> Gaming
            </li>
            <li>
              <FontAwesomeIcon icon={faCamera} /> Photography
            </li>
            <li>
              <FontAwesomeIcon icon={faDumbbell} /> Training
            </li>
            <li>
              <FontAwesomeIcon icon={faPlaneDeparture} /> Travelling
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
