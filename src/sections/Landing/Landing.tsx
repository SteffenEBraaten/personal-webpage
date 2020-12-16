import React from "react";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import ProfileSteffen from "../../components/svgs/ProfileSteffen";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <section className={styles.landing}>
      <ProfilePicture imageURL={<ProfileSteffen />} />
      <h1 className={styles.landingH1}>Hi, my name is Steffen!</h1>
      <p className={styles.landingText}>
        I'm a software developer with a passion for great user experiences
      </p>
    </section>
  );
};

export default Landing;
