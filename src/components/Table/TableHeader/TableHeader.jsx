import React from "react";
import styles from "./TableHeader.module.css";

function TableHeader(props) {
  const { data } = props;
  return (
    <thead className={styles.thead}>
      <tr>
        <input type="checkbox" />
        {data.map((item, index) => (
          <th key={index}>{item}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
