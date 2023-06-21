import React from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <header className={styles.hero + " home"}>
      <h1>Creative</h1>
      <div>
        <h1>Digital</h1>
        <p>
          Ayletec is an agency with hands on experience that has helped small to
          large projects.We also have several projects that can help your
          business
        </p>
      </div>

      <h1>Agency</h1>
    </header>
  );
};

export default Hero;
