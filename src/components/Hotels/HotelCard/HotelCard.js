import React from "react";
import styles from "./HotelCard.module.css";

function HotelCard(props) {
  return (
    <div className={`${styles["hotel-card"]}`}>
      <img src={props.data.photos[0]} />
      <a href="#" className={styles.name}>
        {props.data.name}
      </a>
      <p className={styles.city}>{props.data.city}</p>
      <p className={styles.price}>Starting from ${props.data.cheapestPrice}</p>
      <div className={`${styles["rate-bar"]}`}>
        <p className={styles.rate}>{props.data.rating}</p>
        <p className={styles.type}>{props.data.type}</p>
      </div>
    </div>
  );
}

export default HotelCard;
