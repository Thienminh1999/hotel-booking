import React from "react";
import styles from "./TableContainer.module.css";
import TableHeader from "../TableHeader/TableHeader";

function TableContainer(props) {
  const { headers } = props;
  return (
    <table className={styles.table}>
      <TableHeader data={headers} />
    </table>
  );
}

export default TableContainer;
