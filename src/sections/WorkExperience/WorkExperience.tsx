import React from "react";
import WorkExperienceCard from "../../components/Card/WorkExperienceCard";
import SpareBank1Logo from "../../media/svg/SpareBank1Logo";
import ProserviaLogo from "../../media/svg/ProserviaLogo";

import styles from "./WorkExperience.module.css";

const WorkExperience = () => {
  return (
    <section className={styles.workExperienceContainer}>
      <h2 className={styles.centerH2}>Work expereince</h2>
      <section className={styles.cardList}>
        <WorkExperienceCard
          title={"SpareBank 1 Utvikling"}
          timeperiod={"Jan 2021 - Present"}
          description={
            "Handling incidents of critical IT-solutions as well as support to the banks in the evening."
          }
          image={<SpareBank1Logo />}
        />
        <WorkExperienceCard
          title={"SpareBank 1 Utvikling"}
          timeperiod={"Jun 2020 - Aug 2020"}
          description={
            "Worked in agile teams and developed an web application with React and Typescript in the front end and Kotlin and Spring in the back end."
          }
          image={<SpareBank1Logo />}
        />
        <WorkExperienceCard
          title={"SpareBank 1 Utvikling"}
          timeperiod={"Dec 2018 - Dec 2020"}
          description={
            "Handling incidents of critical IT-solutions as well as support to the banks in the evening."
          }
          image={<SpareBank1Logo />}
        />
        <WorkExperienceCard
          title={"Proservia ManpowerGroup"}
          timeperiod={"Dec 2018 - Dec 2020"}
          description={"Was a consultant rented out to SpareBank 1 Utvikling."}
          image={<ProserviaLogo />}
        />
      </section>
    </section>
  );
};

export default WorkExperience;
