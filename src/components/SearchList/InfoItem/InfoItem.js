import React from "react";
import styles from "./InfoItem.module.css";

const FreeCancelComponent = (props) => {
  if (props.freeCancel)
    return (
      <div className={`${styles["cancel-description"]}`}>
        <p className={`${styles["is-free-cancel"]}`}>Free cancelation</p>
        <p>You can cancle later, so lock in this great price today!</p>
      </div>
    );
};

function InfoItem(props) {
  return (
    <div className={`${styles["info-container"]}`}>
      <h2>{props.data.name}</h2>
      <p>{props.data.distance} from center</p>
      <span>{props.data.tag}</span>
      <h4>{props.data.shortDesc}</h4>
      <p>{props.data.type}</p>
      <FreeCancelComponent freeCancel={props.data.freeCancel} />
    </div>
  );
}

export default InfoItem;
