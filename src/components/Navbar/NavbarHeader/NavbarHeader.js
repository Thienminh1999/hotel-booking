import React from "react";
import styles from "./NavbarHeader.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../../store/auth";

function NavbarHeader(props) {
  const { currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("CURRENT_USER");
    dispatch(AuthActions.onSaveCurrentUser(null));
    navigate("/login");
  };
  return (
    <div className={styles.navbar}>
      <Link className={styles.title} to="/">
        Booking
      </Link>
      {currentUser && (
        <div className={`${styles["functions-btn"]}`}>
          <p>{currentUser.username}</p>
          <Link to="/transactions">Transactions</Link>
          <button onClick={handleLogout} to="/logout">
            Logout
          </button>
        </div>
      )}
      {!currentUser && (
        <div className={`${styles["functions-btn"]}`}>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
}

export default NavbarHeader;
