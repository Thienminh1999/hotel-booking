import React from "react";
import styles from "./TransactionStatus.module.css";

function TransactionStatus(props) {
  const { status } = props;

  switch (status) {
    case "Booked":
      return <span className={styles.booked}>{status}</span>;
      break;
    case "Checkin":
      return <span className={styles.checkin}>{status}</span>;
      break;
    case "Checkout":
      return <span className={styles.checkout}>{status}</span>;
      break;
    default:
      return { status };
  }
}

export default TransactionStatus;
