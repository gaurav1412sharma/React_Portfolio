import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return( 
  <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
     <div className={styles.content}>
         <img
           src={getImageUrl("about/aboutImage.png")}
           alt="Me setting with a laptop"
           className={styles.aboutImage}
         />
         <ul className={styles.aboutItems}>
             <li className={styles.aboutItem}>
                 <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                 <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>
                    As a frontend Developer enthusiast, 
                    I have designed and implemented projects like a landing page resembling Amazon's website layout, 
                    a portfolio showcasing my work, and interactive games like a dice game and a drum kit simulator, 
                    showcasing my dedication to mastering frontend developments.
                    </p>
                 </div>
             </li>
             <li className={styles.aboutItem}>
                 <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                 <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>
                    As a Backend Developer,
                    I have developing fast and optimised Backend system and APIs.
                    </p>
                 </div>
             </li>
             <li className={styles.aboutItem}>
                 <img src={getImageUrl("about/UiIcon.png")} alt="UI icon" />
                 <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>
                    As a UI Designer, 
                    I have designed and implemented projects like a landing page resembling Amazon's website layout as well. 
                    </p>
                 </div>
             </li>
         </ul>
     </div>
  </section>
  );
};
