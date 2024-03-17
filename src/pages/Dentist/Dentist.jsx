import React from "react";
import styles from "./Dentist.module.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import IMAGES from "../../constants/Images";
import FormData from "../../components/FormData/FormData"

const Dentist = () => {
  return (
    <div className={styles.dentistSection}>
        <HeroSection pageTitle="Dr. Nathan Currie" />
      <div className={`${styles.dentistContainer} globalWidth`}>
        <div className={styles.doctorBox}>
          <div className={styles.dentistLeft}>
            <h2>
              Dr. Nathan Currie <span>(DMD, MS, DICOI)</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
              <br /> On the other hand, we denounce with righteous indignation
              and dislike men who are so beguiled and demoralized by the charms
              of pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy.
            </p>
          </div>
          <div className={styles.dentistRight}>
            <img src={IMAGES.drNatham} alt="Dr. Nathan Currie" />
            <div>
              <p>
                Name: <strong>Dr. Nathan Currie</strong>
              </p>
              <p>
                Specialization: <strong>Orthodontics</strong>
              </p>
              <p>
                phone: <strong>8292196144</strong>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.achivmentBox}>
          <div className={styles.achivmentLeft}>
            <img src={IMAGES.achivment} alt="Achivment" />
          </div>
          <div className={styles.achivmentRight}>
            <h2>Achievements</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt labore et dolore magna aliqua. Quis
              ipsum dolor sit suspendisse ultrices gravida <br />
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and fail in
              their duty through weakness These cases are perfectly simple and
              easy.
            </p>
          </div>
        </div>
        <div>
          <FormData title="Request Appointment" />
        </div>
      </div>
    </div>
  );
};

export default Dentist;
