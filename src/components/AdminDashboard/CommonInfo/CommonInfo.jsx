import React from "react";
import styles from "./CommonInfo.module.css";

function CommonInfo(props) {
  const { data } = props;
  return (
    <div className={styles.container}>
      <div className={styles.card_info}>
        <h5>User</h5>
        <h1>{data.amountUser}</h1>
        <div className={styles.bottom}>
          <div className={`${styles.icon_wrapper} ${styles.red}`}>
            <i className="fa-regular fa-user"></i>
          </div>
        </div>
      </div>
      <div className={styles.card_info}>
        <h5>Orders</h5>
        <h1>{data.amountTransaction}</h1>
        <div className={styles.bottom}>
          <div className={`${styles.icon_wrapper} ${styles.yellow}`}>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
      <div className={styles.card_info}>
        <h5>Earnings</h5>
        <h1>{data.earning}</h1>
        <div className={styles.bottom}>
          <div className={`${styles.icon_wrapper} ${styles.green}`}>
            <i className="fa-solid fa-dollar-sign"></i>
          </div>
        </div>
      </div>
      <div className={styles.card_info}>
        <h5>Earnings</h5>
        <h1>{data.earning}</h1>
        <div className={styles.bottom}>
          <div className={`${styles.icon_wrapper} ${styles.purple}`}>
            <i className="fa-solid fa-wallet"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonInfo;
