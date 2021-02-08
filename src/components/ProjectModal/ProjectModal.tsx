import React from "react";

import styles from "./ProjectModal.module.css";

interface projectModal {
  open: boolean;
  close: Function;
  title: string;
  description: string;
  urlToProject?: string;
}

const ProjectModal = ({ open, close, title, description }: projectModal): any => {

  if (open) {
    return (
      <article className={styles.modal} onClick={() => close()}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            <h3>{title}</h3>
          </div>
          <div className={styles.body}>
            <p>{description}</p>
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
