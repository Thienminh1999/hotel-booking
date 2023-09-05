import React from "react";
import styles from "./TypeCard.module.css";

function TypeCard(props) {
  return (
    <div className={`${styles["card-container"]}`}>
      <img alt={props.data.name} src={props.img} />
      <h3>{props.data.type}</h3>
      <h5>{props.data.amount} hotels</h5>
    </div>
  );
}

export default TypeCard;
