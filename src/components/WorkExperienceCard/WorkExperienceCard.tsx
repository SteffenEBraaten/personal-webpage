import React from "react";
import styles from "./WorkExperienceCard.module.css";

interface WorkExperience {
  title: string;
  description: string;
  timeperiod: string;
  image: JSX.Element;
}

const WorkExperienceCard = ({ title, description, timeperiod, image }: WorkExperience): JSX.Element => {
  return (
    // Need to add a dummy onClick method in order to make
    // touching the card in Safari iOS work properly
    <article className={styles.card} onClick={void(0)}>
      {image}
      <h3>{title}</h3>
      <p>{timeperiod}</p>
      <p>{description}</p>
    </article>
  );
};

export default WorkExperienceCard;
