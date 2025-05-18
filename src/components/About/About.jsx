import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutme.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>📱 Mobile Developer</h3>
              <p>
                I specialize in building cross-platform mobile apps using React
                Native and Flutter, delivering smooth, responsive, and visually
                appealing experiences on both iOS and Android.I've worked on
                live data apps and real-time features like match score updates.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>💻 Web Developer</h3>
              <p>
                With hands-on experience in React.js and Vue.js, I build
                interactive, high-performance web apps. From admin dashboards to
                sports streaming sites, I focus on reusable components, REST API
                integration, and clean, maintainable code.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I design intuitive, user-centric interfaces with a focus on
                accessibility and clean visual hierarchy. I've built design
                systems, designed multilingual layouts (LTR/RTL), and
                contributed to mobile-first UI/UX for job platforms, tourism
                apps, and live sports tracking experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
