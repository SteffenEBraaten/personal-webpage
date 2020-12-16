import React from "react";
import styles from "./ContentWrapper.module.css";
import Landing from "../Landing/Landing";

const ContentWrapper = () => {
  return (
    <div className={styles.container}>
      <Landing />
    </div>
  );
};

export default ContentWrapper;
