import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGamepad,
  faCamera,
  faDumbbell,
  faPlaneDeparture,
  faBookOpen,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

/*
    A file to import and export different Font Awesome
    Icons instead of having to import them to each
    individual file that needs them
*/

const cameraIcon: JSX.Element = <FontAwesomeIcon icon={faCamera} />;
const dumbellIcon: JSX.Element = <FontAwesomeIcon icon={faDumbbell} />;
const gamingIcon: JSX.Element = <FontAwesomeIcon icon={faGamepad} />;
const githubIcon = <FontAwesomeIcon icon={["fab", "github"]} />;
const globeIcon = <FontAwesomeIcon icon={faGlobe} />;
const linkedinIcon = <FontAwesomeIcon icon={["fab", "linkedin"]} />;
const mailIcon = <FontAwesomeIcon icon={faEnvelope} />;
const planeIcon: JSX.Element = <FontAwesomeIcon icon={faPlaneDeparture} />;
const readingIcon: JSX.Element = <FontAwesomeIcon icon={faBookOpen} />;

export {
  cameraIcon,
  dumbellIcon,
  gamingIcon,
  planeIcon,
  readingIcon,
  githubIcon,
  globeIcon,
  linkedinIcon,
  mailIcon,
};
