import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

/*
    A file to import and export different Font Awesome
    Icons instead of having to import them to each
    individual file that needs them
*/

const githubIcon = <FontAwesomeIcon icon={["fab", "github"]} />;
const globeIcon = <FontAwesomeIcon icon={faGlobe} />;
const linkedinIcon = <FontAwesomeIcon icon={["fab", "linkedin"]} />;
const mailIcon = <FontAwesomeIcon icon={faEnvelope} />;

export { githubIcon, globeIcon, linkedinIcon, mailIcon };
