/* eslint-disable react/prop-types */
import IMAGES from "../../constants/Images";
import Image from "../Image/Image";
import styles from "./Navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const handleNavbar = function () {
    setNavActive((prev) => !prev);
  };

  return (
    <nav className={`${styles.navContainer} globalWidth`}>
      <NavLink to="/" className={styles.logoContainer}>
        <Image src={IMAGES.logo} alt="logo-img" className={styles.logoImg} />
      </NavLink>
      <ul
        className={
          navActive ? styles.navItemsContainer : styles.navItemsContainerActive
        }
      >
        <li className={styles.navItem}>
          <NavLink to="/" style={{ textDecoration: "none", color: "#006" }}>
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/about"
            style={{ textDecoration: "none", color: "#006" }}
          >
            About
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/dentist"
            style={{ textDecoration: "none", color: "#006" }}
          >
            Dentist
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/blog" style={{ textDecoration: "none", color: "#006" }}>
            Blog
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/contact"
            style={{ textDecoration: "none", color: "#006" }}
          >
            Contact us
          </NavLink>
        </li>
      </ul>
      {/* <NavItems navItems={navItems} navActive={navActive} /> */}
      <AiOutlineMenu onClick={handleNavbar} className={styles.navbarMenuIcon} />
    </nav>
  );
};

export default Navbar;
