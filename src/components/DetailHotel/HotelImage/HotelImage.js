import React from "react";
import styles from "./HotelImage.module.css";

function HotelImage(props) {
  return (
    <div className={`${styles["img-container"]}`}>
      {props.data.photos.map((img, index) => (
        <img key={index} src={img} alt={img} />
      ))}
    </div>
  );
}

export default HotelImage;
