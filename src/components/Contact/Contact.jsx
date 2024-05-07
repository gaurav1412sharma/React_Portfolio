import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
       <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
       </div>
       <ul className={styles.link}>
        <li className={styles.link}>
           <img 
              src={getImageUrl("contact/gmailIcon.png")}
               alt="Email icon" 
            />
             <a href="mailto:gaurav1412sharma@gmail.com">gmail.com/Gaurav sharma</a>
        </li>
        <li className={styles.link}>
           <img 
            src={getImageUrl("contact/linkedinIcon.png")} 
            alt="LinkedIn Icon"    
            />
            <a href="https://www.linkedin.com/in/gaurav-sharma-393549217">linkedin.com/Gaurav sharma</a>
        </li>
       </ul>
    </footer>
  );
};
