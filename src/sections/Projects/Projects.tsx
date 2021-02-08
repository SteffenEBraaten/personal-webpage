import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.workExperienceContainer}>
      <h2 className={styles.centerH2}>Projects</h2>
      <section className={styles.projectList}>
        <ProjectCard
          title={"Lightning buddy"}
          description={
            'A project related to the course "IN2000 - Software Engineering ' +
            'with project work". Our agile team developed an Android ' +
            'application which was called "Lightning Buddy". The app had ' +
            "functionality for seeing live lightning strikes on a map and " +
            "see a history of where lightning had struck within a choosen " +
            "timeframe. To realize this project we had to gather data, " +
            "prototype and use the Google Maps API and the MET Norway Weather API."
          }
        />
        <ProjectCard
          title={"Download sorter"}
          description={
            "Made a python script which sorts the files inside the downloads " +
            "folder of the users system. It sorts the files based on it's " +
            "extension type and puts it into an category which that extension " +
            "has been assigned."
          }
        />
      </section>
    </section>
  );
};

export default Projects;
