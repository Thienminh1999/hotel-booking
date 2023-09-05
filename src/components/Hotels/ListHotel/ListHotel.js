import React from "react";
import HotelCard from "../HotelCard/HotelCard";
import styles from "./ListHotel.module.css";
import { MenuItemComponent } from "../../../UI/FeaturedItems";

const hotelList = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

function ListHotel(props) {
  return (
    <MenuItemComponent>
      <h3 className="title-menu">Home guest love</h3>
      <div className={`${styles["list-hotel-container"]}`}>
        {props.data.map((hotel, index) => (
          <HotelCard key={index} data={hotel} />
        ))}
      </div>
    </MenuItemComponent>
  );
}

export default ListHotel;
