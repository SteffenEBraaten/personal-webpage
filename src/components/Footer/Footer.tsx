import React from "react";
import styles from "./Footer.module.css";

interface footer {
    text: string;
}

const Footer = ({ text }: footer): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <i>{text}</i>
    </footer>
  );
};

export default Footer;
