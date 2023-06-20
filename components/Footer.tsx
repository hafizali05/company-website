import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section>
        <h2>
          Let{"'"}s Collaborate
          <br />
          With us!
        </h2>
        <Image
          className={styles.image}
          src="/lets_talk.svg"
          alt="lets_talk_circle"
          width={100}
          height={100}
          priority
        />
      </section>
      <div className={styles.line} />
      <section>
        <div>
          <Image
            src="/logo.svg"
            alt="Company Logo"
            width={100}
            height={100}
            priority
          />
          <p className={styles.paraOne}>
            Ayletec is an agency with hands on experience
            that has helped small to large projects. We also have several
            projects that can help your business
          </p>
          <p className={styles.paraTwo}>2023 Terke. All rights reserved</p>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
          <ul>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Office</li>
          </ul>
          <ul>
            <li>Social Media</li>
            <li>Dribbble</li>
            <li>Behance</li>
            <li>Linkedin</li>
            <li>Facebook</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
