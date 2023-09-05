import React from "react";
import styles from "./TransactionItem.module.css";
import TransactionStatus from "../TransactionStatus/TransactionStatus";

function TransactionItem(props) {
  const { data, index } = props;

  const checkinTime = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(data.dateStart));

  const checkoutTime = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(data.dateEnd));

  return (
    <tr className={styles.row}>
      <td>{index + 1}</td>
      <td>{data.hotel.name}</td>
      <td>{data.room.join(",")}</td>
      <td>{`${checkinTime} to ${checkoutTime}`}</td>
      <td>{data.price}</td>
      <td>{data.payment}</td>
      <td>
        <TransactionStatus status={data.status} />
      </td>
    </tr>
  );
}

export default TransactionItem;
