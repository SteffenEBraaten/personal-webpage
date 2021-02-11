import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.workExperienceContainer}>
      <h2 className={styles.centerH2}>Projects</h2>
      <section className={styles.projectList}>
        <ProjectCard
          title={"Download sorter"}
          description={`Made a python script which sorts the files inside the downloads 
          folder of the users system. It sorts the files based on it's 
          extension type and puts it into an category which that extension 
          has been assigned.`}
          urlToGitRepo={"https://github.com/SteffenEBraaten/Download_Sorter"}
        />
        <ProjectCard
          title={"Lightning buddy"}
          description={`A project related to the course "IN2000 - Software Engineering
          with project work". Our agile team developed an Android 
          application which was called "Lightning Buddy". The app had 
          functionality for seeing live lightning strikes on a map and 
          see a history of where lightning had struck within a choosen 
          timeframe. To realize this project we had to gather data, 
          prototype and use the Google Maps API and the MET Norway Weather API.`}
          urlToGitRepo={"https://github.com/SteffenEBraaten/lightning-buddy"}
        />
        <ProjectCard
          title={"Workinglist"}
          description={`A application made in the course IN5320 - Development in 
          platform ecosystems autumn 2020 at the University of Oslo (UiO). he 
          WorkingList application was made to improve the workflow of health 
          personell and contact tracers when they were going to follow up index cases 
          of COVID-19 and contacts of index cases. Being in the DHIS2 ecosystem we 
          used both resources like API and designsystem realize our app.`}
          urlToGitRepo={"https://github.com/SteffenEBraaten/WorkingList"}
        />
      </section>
    </section>
  );
};

export default Projects;
