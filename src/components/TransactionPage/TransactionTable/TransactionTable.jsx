import React from "react";
import styles from "./TransactionTable.module.css";
import TransactionItem from "../TransactionItem/TransactionItem";

function TransactionTable(props) {
  const { transactions } = props;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>#</th>
          <th>Hotel</th>
          <th>Room</th>
          <th>Date</th>
          <th>Price</th>
          <th>Payment method</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((item, index) => (
          <TransactionItem data={item} key={index} index={index} />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
