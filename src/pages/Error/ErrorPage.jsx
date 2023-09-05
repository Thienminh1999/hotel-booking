import React from "react";
import styles from "./ErrorPage.module.css";
import { useRouteError } from "react-router-dom";

function ErrorPage(props) {
  let error = useRouteError();
  console.error(error.message);
  return <div className={styles.container}>Something went wrong!</div>;
}

export default ErrorPage;
