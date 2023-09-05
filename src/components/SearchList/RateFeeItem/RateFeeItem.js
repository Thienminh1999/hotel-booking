import React from "react";
import styles from "./RateFeeItem.module.css";
import button from "../../../UI/Button.module.css";
import { Link } from "react-router-dom";

function RateFeeItem(props) {
  return (
    <div className={`${styles["fee-container"]}`}>
      <div className={styles.rate}>
        <h4>{props.data.rateText}</h4>
        <span>{props.data.rating}</span>
      </div>
      <div className={styles.price}>
        <h1>${props.data.cheapestPrice || 0}</h1>
        <p>Include tax and fees</p>
        <Link
          to={`/detail/${props.data._id}`}
          className={`${button["btn"]} ${button["primary-color"]}`}
        >
          See availability
        </Link>
      </div>
    </div>
  );
}

export default RateFeeItem;
