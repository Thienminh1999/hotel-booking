import React from "react";
import styles from "./NavItem.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../store/auth";

function NavItem(props) {
  const { data } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("CURRENT_USER");
    dispatch(AuthActions.onSaveCurrentUser(null));
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <h4>{data.title}</h4>
      <ul>
        {data.item.map((subItem, index) => (
          <li key={index}>
            <NavLink
              end
              to={subItem.link}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              {subItem.icon}
              {subItem.name === "Logout" ? (
                <button className={styles.btn} onClick={handleLogout}>
                  {subItem.name}
                </button>
              ) : (
                <span>{subItem.name}</span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavItem;
