import React from "react";
import styles from "./HotelDescription.module.css";
import button from "../../../UI/Button.module.css";

function HotelDescription(props) {
  const { onShowForm } = props;

  const handleShowForm = () => {
    onShowForm();
  };
  return (
    <div className={`${styles["description-container"]}`}>
      <div className={styles.description}>
        <h2>{props.data.name}</h2>
        <p>{props.data.desc}</p>
      </div>
      <div className={styles.booking}>
        <h2>
          ${props.data.cheapestPrice} <span>(1 nights)</span>
        </h2>
        <button
          onClick={handleShowForm}
          className={`${button["btn"]} ${button["primary-color"]}`}
        >
          Reserve or book now!
        </button>
      </div>
    </div>
  );
}

export default HotelDescription;
