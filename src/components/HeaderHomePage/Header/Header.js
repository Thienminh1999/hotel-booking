import React from "react";
import styles from "./Header.module.css";
import button from "../../../UI/Button.module.css";

function Header(props) {
  return (
    <div className={styles.container}>
      <h1>A life time of discounts? It's Genius</h1>
      <h4>
        Get reward for your travels - unlock instant saving of 10% or more with
        a free account
      </h4>
      <button className={`${button["btn"]} ${button["primary-color"]}`}>
        Sign in / Register
      </button>
    </div>
  );
}

export default Header;
