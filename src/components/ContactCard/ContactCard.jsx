import React from "react";
import styles from "./ContactCard.module.css";
// import { IoHomeOutline } from "react-icons/io5";

const ContactCard = ({title, decription, icon}) => {
  return (
    <div className={`${styles.cardContainer} globalWidth`}>
      <div className={styles.iconBox}>
        {/* <IoHomeOutline /> */}
        {icon}
      </div>
      <div className={styles.cardDetails}>
        <h3>{title}</h3>
        <p>
          {decription}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
