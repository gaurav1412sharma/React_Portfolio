import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
    <h1 className={styles.title}>Hello!</h1>
    <h1 className={styles.title}> I'm Gaurav Sharma</h1>
    <p className={styles.description}>
    Versatile Full Stack Web Developer here! Equipped with a comprehensive skill set in HTML, CSS, JavaScript, and adept in backend technologies like Node.js and Express, 
    sI thrive on creating seamless web applications. My fervor for React.js and database management ensures dynamic and user-centric solutions.
     Eager to collaborate and embark on the journey of crafting innovative digital solutions together!
    </p>
    <a href="mailto:gaurav1412sharma@gmail.com" className={styles.contactBtn}>
    Contact Me
    </a>
    </div>
    <img 
    src={getImageUrl("hero/heroImage.png")} 
    alt="Hero image of me"
    className={styles.heroImg}
     />   
   <div className={styles.topBlur}/>
   <div className={styles.bottomBlur}/>
  </section>
  );
};
