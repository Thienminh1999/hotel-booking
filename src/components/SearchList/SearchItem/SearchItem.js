import React from "react";
import styles from "./SearchItem.module.css";
import InfoItem from "../InfoItem/InfoItem";
import RateFeeItem from "../RateFeeItem/RateFeeItem";

function SearchItem(props) {
  return (
    <div className={`${styles["item-container"]}`}>
      <div className={styles.img}>
        <img alt={props.data.photos[0]} src={props.data.photos[0]} />
      </div>

      <InfoItem data={props.data} />

      <RateFeeItem data={props.data} />
    </div>
  );
}

export default SearchItem;
