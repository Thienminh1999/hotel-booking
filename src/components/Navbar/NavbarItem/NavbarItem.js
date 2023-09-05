import React from "react";
import styles from "./NavbarItem.module.css";

function NavbarItem(props) {
  return (
    <div
      className={`${styles["nav-item"]} ${
        props.data.active ? styles["active"] : ""
      }`}
    >
      <i className={`fa ${props.data.icon}`}></i>
      <h5>{props.data.type}</h5>
    </div>
  );
}

export default NavbarItem;
