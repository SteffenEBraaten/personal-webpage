import { title } from "process";
import React from "react";
import Card from "../../components/Card/Card";

import styles from "./WorkExperience.module.css";

const WorkExperience = () => {
  return (
    <>
      <h2>Work expereince</h2>
      <section className={styles.cardList}>
        <Card title={"SpareBank 1 Utvikling"} description={"description"} />
        <Card title={"SpareBank 1 Utvikling"} description={"description"} />
        <Card title={"Proservia ManpowerGroup"} description={"description"} />
      </section>
    </>
  );
};

export default WorkExperience;
