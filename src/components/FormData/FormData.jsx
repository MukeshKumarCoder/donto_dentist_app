import React from "react";
import styles from "./FormData.module.css";
import Button from "../../components/Button/Button"

const FormData = ({ title }) => {
  return (
    <div className={`${styles.formDataContainer} globalWidth`}>
      <h2 className={styles.formTitle}> {title} </h2>
      <form>
        <div className={styles.inputBox}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <div className={styles.inputBox}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <textarea type="text" placeholder="Message" rows={12}></textarea>
        <Button className={styles.contactBtn}>Contact Us</Button>
      </form>
    </div>
  );
};

export default FormData;
