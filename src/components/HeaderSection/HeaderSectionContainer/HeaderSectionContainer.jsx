import React from "react";
import styles from "./HeaderSectionContainer.module.css";
import Navbar from "../../Navbar/NavbarContainer/Navbar";
import HeaderContainer from "../HeaderContainer/HeaderContainer";

function HeaderSectionContainer(props) {
  return (
    <div className={`${styles["section-container"]}`}>
      <div className={styles.container}>
        <Navbar />
        <HeaderContainer {...props} />
      </div>
    </div>
  );
}

export default HeaderSectionContainer;
