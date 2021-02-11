import React from "react";
import { linkedinIcon, githubIcon, mailIcon } from "../../media/FontAwesomeIcons";
import IconWithLink from "../IconWithLink/IconWithLink";

import styles from "./SocialMediaBar.module.css";

export const SocialMediaBar = () => {

  return (
    <ul className={styles.socialMediaBar}>
      <li>
        <IconWithLink
          url={"https://www.linkedin.com/in/steffen-ekeberg-braaten-942908156/"}
          fontAwesomeIcon={linkedinIcon}
        />
      </li>
      <li>
        <IconWithLink
          url={"https://github.com/SteffenEBraaten"}
          fontAwesomeIcon={githubIcon}
        />
      </li>
      <li>
        <IconWithLink
          url={"mailto:steffen.e.braaten@gmail.com"}
          fontAwesomeIcon={mailIcon}
        />
      </li>
    </ul>
  );
};

export default SocialMediaBar;
