import React from "react";
import styles from "./ContentWrapper.module.css";
import Landing from "../Landing/Landing";
import AboutMe from "../AboutMe/AboutMe";
import WorkExperience from "../WorkExperience/WorkExperience";
import Projects from "../Projects/Projects";

const ContentWrapper = () => {
  return (
    <div className={styles.container}>
      <Landing />
      <AboutMe />
      <WorkExperience />
      <Projects />
    </div>
  );
};

export default ContentWrapper;
