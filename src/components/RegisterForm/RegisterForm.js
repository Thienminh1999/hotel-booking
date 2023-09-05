import React from "react";
import styles from "./RegisterForm.module.css";
import button from "../../UI/Button.module.css";

function RegisterForm(props) {
  return (
    <div style={{ backgroundColor: "#003580" }}>
      <div className={`${styles["register-container"]}`}>
        <h2>Save time, save money!</h2>
        <p>Sign up and we will send the best deals to you</p>
        <form>
          <input
            type="text"
            name="emailRegister"
            className={`${styles["email-input"]}`}
            placeholder="Your email"
          />
          <button className={`${button.btn} ${button["primary-color"]}`}>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
