import React from "react";
import styles from "./ActionButton.module.css";

function ActionButton(props) {
  return (
    <button className={styles.container} {...props}>
      {props.action}
    </button>
  );
}

export default ActionButton;
