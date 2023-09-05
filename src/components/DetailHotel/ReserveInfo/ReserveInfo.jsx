import React from "react";
import styles from "./ReserveInfo.module.css";
import { Form } from "react-router-dom";
import { useSelector } from "react-redux";

function ReserveInfo(props) {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <Form className={styles.container}>
      <h3>Reserve Info</h3>
      <div className={styles.controller}>
        <label>Your full name:</label>
        <input
          defaultValue={currentUser.fullName}
          type="text"
          placeholder="Full name"
        />
      </div>
      <div className={styles.controller}>
        <label>Your Email:</label>
        <input
          defaultValue={currentUser.email}
          type="email"
          placeholder="Email"
        />
      </div>
      <div className={styles.controller}>
        <label>Your phone number:</label>
        <input
          defaultValue={currentUser.phoneNumber}
          type="text"
          placeholder="Phone number"
        />
      </div>
      <div className={styles.controller}>
        <label>Your identity card number:</label>
        <input type="text" placeholder="Card number" />
      </div>
    </Form>
  );
}

export default ReserveInfo;
