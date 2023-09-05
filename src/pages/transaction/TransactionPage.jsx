import React from "react";
import styles from "./TransactionPage.module.css";
import TransactionTable from "../../components/TransactionPage/TransactionTable/TransactionTable";
import { UserAPI } from "../../apis/userAPI";
import { useLoaderData } from "react-router-dom";

function TransactionPage(props) {
  const data = useLoaderData();
  return (
    <div className={styles.container}>
      <h2>Your transactions</h2>
      {data.length === 0 && <p>you don't have any transactions</p>}
      {data.length > 0 && <TransactionTable transactions={data} />}
    </div>
  );
}

export default TransactionPage;

export const loader = async () => {
  const transactions = await UserAPI.getTransactions();
  return transactions;
};
