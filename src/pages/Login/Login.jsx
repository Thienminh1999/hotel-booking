import React, { useState } from "react";
import NavbarHeader from "../../components/Navbar/NavbarHeader/NavbarHeader";
import styles from "./Login.module.css";
import { UserAPI } from "../../apis/userAPI";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../store/auth";

function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMess, setErrorMess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const result = await UserAPI.login(formProps.username, formProps.password);
    if (result.status === 200) {
      dispatch(AuthActions.onSaveCurrentUser(result.data));
      localStorage.setItem("CURRENT_USER", JSON.stringify(result.data));
      if (result.data.isAdmin) {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } else {
      setErrorMess(result.data.error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NavbarHeader />
      </div>
      <div className={styles.card}>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit} method="post">
          {errorMess && <p className={styles.error}>{errorMess}</p>}
          <input type="text" name="username" />
          <input type="password" name="password" />
          <button type="submit">Login</button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
