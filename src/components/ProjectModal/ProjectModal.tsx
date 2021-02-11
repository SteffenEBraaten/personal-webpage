import React from "react";
import { githubIcon, globeIcon } from "../../media/FontAwesomeIcons";
import IconWithLink from "../IconWithLink/IconWithLink";

import styles from "./ProjectModal.module.css";

interface projectModal {
  open: boolean;
  close: Function;
  title: string;
  description: string;
  urlToProject?: string;
  urlToGitRepo?: string;
}

const ProjectModal = ({
  open,
  close,
  title,
  description,
  urlToProject,
  urlToGitRepo,
}: projectModal): any => {

  if (open) {
    return (
      <article className={styles.modal} onClick={() => close()}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            <h3>{title}</h3>
          </div>
          <div className={styles.body}>
            <p>{description}</p>
            {urlToProject && urlToGitRepo ? (
              <div className={styles.iconContainer}>
                <IconWithLink url={urlToProject} fontAwesomeIcon={globeIcon} />
                <IconWithLink url={urlToProject} fontAwesomeIcon={githubIcon} />
              </div>
            ) : urlToProject && !urlToGitRepo ? (
              <div className={styles.iconContainer}>
                <IconWithLink url={urlToProject} fontAwesomeIcon={globeIcon} />
              </div>
            ) : !urlToProject && urlToGitRepo ? (
              <div className={styles.iconContainer}>
                <IconWithLink url={urlToGitRepo} fontAwesomeIcon={githubIcon} />
              </div>
            ) : null}
          </div>
          <div className={styles.footer}>
            <button className={styles.button} onClick={() => close()}>
              Close
            </button>
          </div>
        </div>
      </article>
    );
  } else {
    return null;
  }
};

export default ProjectModal;
