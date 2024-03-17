import React from "react";
import styles from "./HeroSection.module.css";
import Navbar from "../Navbar/Navbar";
import IMAGES from "../../constants/Images";
import Image from "../Image/Image";

const HeroSection = ({ pageTitle }) => {
  return (
    <section className={styles.heroSections}>
      <Navbar />
      <div className={`${styles.heroContainer} globalWidth`}>
        <div className={styles.heroLeft}>
          <h2 className={styles.headingTitle}>{pageTitle}</h2>
          <a href="/">Home page - {pageTitle}</a>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.imageContainer}>
            <Image
              src={IMAGES.teeth4}
              alt="Tooth Image"
              className={styles.toothImg1}
            />
            <Image
              src={IMAGES.teeth1}
              alt="Tooth Image"
              className={styles.TBrush}
            />
            <Image
              src={IMAGES.teeth2}
              alt="Tooth Image"
              className={styles.teeths2}
            />
            <Image
              src={IMAGES.teeth3}
              alt="Tooth Image"
              className={styles.teeths3}
            />
            <Image
              src={IMAGES.teeth5}
              alt="Tooth Image"
              className={styles.teeths5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
