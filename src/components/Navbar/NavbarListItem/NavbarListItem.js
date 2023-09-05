import React from "react";
import NavbarItem from "../NavbarItem/NavbarItem";
import styles from "./NavbarListItem.module.css";

const data = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
  },
];

function NavbarListItem(props) {
  return (
    <div className={`${styles["list-navbar"]}`}>
      {data.map((item, index) => (
        <NavbarItem key={index} data={item} />
      ))}
    </div>
  );
}

export default NavbarListItem;
