import React from "react";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <section className={styles.landing}>
      <ProfilePicture
        // TODO: Replace with static picture
        imageURL={
          "https://media-exp1.licdn.com/dms/image/C4D03AQF_w73H0bFgDw/profile-displayphoto-shrink_200_200/0/1589132723701?e=1613606400&v=beta&t=uEZMfjtKeKUpi1LdoovTThkS5bGSbuZXrnd3err5tXI"
        }
        large={true}
      />
      <h1 className={styles.landingH1}>Hi, my name is Steffen!</h1>
      <p className={styles.landingText}>
        I'm a software developer with a passion for great
        user experiences
      </p>
    </section>
  );
};

export default Landing;
