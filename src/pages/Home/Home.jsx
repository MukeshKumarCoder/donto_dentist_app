import React from "react";
import styles from "./Home.module.css";
import Home from "../../HomeSections/Home/Home";
import Welcome from "../../HomeSections/Welcome/Welcome";
import Treatment from "../../HomeSections/Treatment/Treatment";
import Dentist from "../../HomeSections/Dentist/Dentist";
import Gallery from "../../HomeSections/Gallery/Gallery";
import Testimonials from "../../HomeSections/Testimonials/Testimonials";
import Blog from "../../HomeSections/Blog/Blog";
import Appointment from "../../HomeSections/Appointment/Appointment";

const HOme = () => {
  return (
    <div className={styles.homeSection}>
      <Home />
      <Welcome />
      <Treatment />
      <Dentist />
      <Gallery />
      <Testimonials />
      <Appointment />
      <Blog />
    </div>
  );
};

export default HOme;
