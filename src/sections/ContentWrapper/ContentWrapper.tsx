import React from "react";
import styles from "./ContentWrapper.module.css";
import Landing from "../Landing/Landing";
import AboutMe from "../AboutMe/AboutMe";
import WorkExperience from "../WorkExperience/WorkExperience";

const ContentWrapper = () => {
  return (
    <div className={styles.container}>
      <Landing />
      <AboutMe />
      <WorkExperience />
    </div>
  );
};

export default ContentWrapper;
