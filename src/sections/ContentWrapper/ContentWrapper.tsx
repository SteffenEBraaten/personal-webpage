import React from "react";
import styles from "./ContentWrapper.module.css";
import Landing from "../Landing/Landing";
import AboutMe from "../AboutMe/AboutMe";

const ContentWrapper = () => {
  return (
    <div className={styles.container}>
      <Landing />
      <AboutMe />
    </div>
  );
};

export default ContentWrapper;
