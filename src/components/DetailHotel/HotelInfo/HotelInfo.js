import React from "react";
import styles from "./HotelInfo.module.css";
import button from "../../../UI/Button.module.css";

function HotelInfo(props) {
  return (
    <div className={`${styles["hotel-container"]}`}>
      <div>
        <h1>{props.data.name}</h1>
        <div className={styles.location}>
          <i className="fa fa-location-dot"></i>
          <p>{props.data.address}</p>
        </div>
        <h3>Excellent location - {props.data.distance}m from center</h3>
        <h3 className={styles.price}>
          Book a stay over {props.data.cheapestPrice} at this property and get a{" "}
          {props.data.tag}
        </h3>
      </div>
      <button className={`${button["btn"]} ${button["primary-color"]}`}>
        Reserve or book now!
      </button>
    </div>
  );
}

export default HotelInfo;
