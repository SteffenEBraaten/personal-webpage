import React, { useState } from "react";
import ProjectModal from "../ProjectModal/ProjectModal";
import styles from "./ProjectCard.module.css";

interface projectCard {
  title: string;
  description: string;
  urlToProject?: string;
}

const ProjectCard = ({
  title,
  description,
  urlToProject,
}: projectCard): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <article className={styles.projectCard} onClick={() => handleShowModal()}>
        <h3>{title}</h3>
      </article>
      <ProjectModal
        open={showModal}
        close={handleShowModal}
        title={title}
        description={description}
        urlToProject={urlToProject}
      />
    </>
  );
};

export default ProjectCard;
