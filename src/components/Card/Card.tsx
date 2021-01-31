import React from "react";
import styles from "./Card.module.css";

interface card {
  title: string;
  description: string;
  timeperiod?: string;
  image?: JSX.Element;
}

const Card = ({ title, description, timeperiod, image }: card): JSX.Element => {
  return (
    <article className={styles.card}>
      {image ? image : null}
      <h3>{title}</h3>
      {timeperiod ? <p>{timeperiod}</p> : null}
      <p>{description}</p>
    </article>
  );
};

export default Card;
