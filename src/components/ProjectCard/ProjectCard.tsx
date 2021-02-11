import React, { useState } from "react";
import ProjectModal from "../ProjectModal/ProjectModal";
import styles from "./ProjectCard.module.css";

interface projectCard {
  title: string;
  description: string;
  urlToProject?: string;
  urlToGitRepo?: string;
}

const ProjectCard = ({
  title,
  description,
  urlToProject,
  urlToGitRepo,
}: projectCard): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const previewDescription = (description: string): string => {
    return description.substring(0, 50) + "...";
  };

  return (
    <>
      <article className={styles.projectCard} onClick={() => handleShowModal()}>
        <h3>{title}</h3>
        <p>{previewDescription(description)}</p>
      </article>
      <ProjectModal
        open={showModal}
        close={handleShowModal}
        title={title}
        description={description}
        urlToProject={urlToProject}
        urlToGitRepo={urlToGitRepo}
      />
    </>
  );
};

export default ProjectCard;
