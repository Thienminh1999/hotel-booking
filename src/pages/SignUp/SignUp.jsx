import React from "react";
import NavbarHeader from "../../components/Navbar/NavbarHeader/NavbarHeader";
import styles from "./SignUp.module.css";
import { Form, redirect } from "react-router-dom";
import { UserAPI } from "../../apis/userAPI";

function SignUp(props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NavbarHeader />
      </div>
      <div className={styles.card}>
        <h1>SignUp</h1>
        <Form action="/sign-up" method="post">
          <input placeholder="Username" type="text" name="username" required />
          <input
            placeholder="Password"
            type="password"
            name="password"
            required
          />
          <input placeholder="Full name" type="text" name="fullName" />
          <input placeholder="Phone Number" type="text" name="phoneNumber" />
          <button type="submit">Create account</button>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;

export const action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  const result = await UserAPI.signup(data);
  if (result.status === 200) {
    alert("Sign up success");
    return redirect("/login");
  }
  return null;
};
