import React from "react";
import styles from "./AdminLayout.module.css";
import AdminNavigation from "../AdminNavigation/AdminNavigation";
import { Outlet } from "react-router-dom";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import { useSelector } from "react-redux";

function AdminLayout(props) {
  const { currentUser } = useSelector((state) => state.auth);
  console.log("AdminLayout");
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.nav}>
          <h3 className={styles.page_title}>Admin page</h3>
          <AdminNavigation />
        </div>

        <div className={styles.main}>
          <ProtectedRoute isAdmin={currentUser?.isAdmin}>
            <Outlet />
          </ProtectedRoute>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
