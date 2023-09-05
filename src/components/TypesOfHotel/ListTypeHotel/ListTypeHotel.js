import React from "react";
import styles from "./ListTypeHotel.module.css";
import { MenuItemComponent } from "../../../UI/FeaturedItems";
import TypeCard from "../TypeCard/TypeCard";

const typeHotelList = [
  "./images/type_1.webp",
  "./images/type_2.jpg",
  "./images/type_3.jpg",
  "./images/type_4.jpg",
  "./images/type_5.jpg",
];

function ListTypeHotel(props) {
  return (
    <MenuItemComponent>
      <h3 className="title-menu">Browse by property type</h3>
      <div className={`${styles["types-container"]}`}>
        {props.data.map((item, index) => (
          <TypeCard data={item} key={index} img={typeHotelList[index]} />
        ))}
      </div>
    </MenuItemComponent>
  );
}

export default ListTypeHotel;
