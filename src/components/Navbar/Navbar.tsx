import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <ul className={styles.navbar}>
      <li>About me</li>
      <li>Education</li>
      <li>Experiences</li>
      <li>Projects</li>
    </ul>
  );
};

export default Navbar;
