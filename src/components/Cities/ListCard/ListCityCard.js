import React from "react";
import CityCard from "../CityCard/CityCard";
import styles from "./ListCityCard.module.css";

const citiesImg = [
  "./images/HaNoi.jpg",
  "./images/HCM.jpg",
  "./images/DaNang.jpg",
];

function ListCityCard(props) {
  return (
    <div className={`${styles["list-card-container"]}`}>
      {props.data.map((city, index) => (
        <CityCard key={index} data={city} img={citiesImg[index]} />
      ))}
    </div>
  );
}

export default ListCityCard;
