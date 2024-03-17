import React from "react";
import styles from "./About.module.css";
import HeroSectsection from "../../components/HeroSection/HeroSection";
import FormData from "../../components/FormData/FormData";
import IMAGES from "../../constants/Images";
import Button from "../../components/Button/Button";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <HeroSectsection pageTitle="About Us" />
      <div className={`${styles.aboutContainer} globalWidth`}>
        <div className={styles.ourDental}>
          <h2>Our Dental Practice</h2>
          <p>
            Since 1998, Donto Dentistry has been proud to combine modern
            techniques and high-tech equipment. Dr. John Dae, Micha and his team
            deliver a personalized and comfortable dental care experience unlike
            any other Mason dentist.
          </p>
        </div>
        <div className={styles.exprencesDr}>
          <div className={styles.exprencesDrLeft}>
            <img src={IMAGES.experienceddentist} alt="Experienced Dentist" />
          </div>
          <div className={styles.exprencesDrRight}>
            <h2>Experienced Dentist</h2>
            <p>
              Smiling comes naturally to Dr. Harrie, author of ‘Donto’. He has
              embraced Cosmetic Dentistry and has redesigned the smiles for thev
              thousands of patients.
            </p>
            <p>
              Dr. Harrie believes in providing her patients with more than just
              world class dental care. He also helps patients recognize the
              vital connection between dental health and whole body health. A
              graduate of the University of California’s School of Dentistry,
              Dr. Harrie is a leader in the movement to bring environmental
              sanity and well-being into the dental world for future.
            </p>
          </div>
        </div>
      </div>
      <div>
        <FormData title="Request Appointment" />
      </div>
    </section>
  );
};

export default About;
