import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./SocialMediaBar.module.css";

export const SocialMediaBar = () => {
  return (
    <ul className={styles.socialMediaBar}>
      <li>
        <a href="https://www.linkedin.com/in/steffen-ekeberg-braaten-942908156/">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
      </li>
      <li>
        <a href="https://github.com/SteffenEBraaten">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </li>
      <li>
        <a href="mailto:steffen.e.braaten@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
    </ul>
  );
};

export default SocialMediaBar;
