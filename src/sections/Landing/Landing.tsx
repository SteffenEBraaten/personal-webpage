import React from "react";
import SocialMediaBar from "../../components/SocialMediaBar/SocialMediaBar";

import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <section className={styles.landing}>
      <h1 className={styles.landingH1}>Hi, my name is Steffen!</h1>
      <p className={styles.landingText}>
        A software developer with a passion for great user experiences.
      </p>
      <SocialMediaBar />
    </section>
  );
};

export default Landing;
