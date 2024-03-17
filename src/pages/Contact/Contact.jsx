import React from "react";
import styles from "./Contact.module.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import ContactCard from "../../components/ContactCard/ContactCard";
import { IoCallOutline, IoHomeOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import FormData from "../../components/FormData/FormData";

const Contact = () => {
  return (
    <div className={styles.contactSection}>
      <HeroSection pageTitle="Contact Us" />
      <div className={`${styles.cardBox} globalWidth`}>
        <ContactCard
          title="Address"
          decription="Siwan Bihar"
          icon={<IoHomeOutline />}
        />
        <ContactCard
          title="Email"
          decription="mg328790@gmail.com"
          icon={<MdOutlineMail />}
        />
        <ContactCard
          title="Phone"
          decription="+91 8292196144"
          icon={<IoCallOutline />}
        />
      </div>
      <div>
        <FormData title="Get In Touch" />
      </div>
    </div>
  );
};

export default Contact;
