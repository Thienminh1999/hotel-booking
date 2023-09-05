import React from "react";
import styles from "./CityCard.module.css";
import styled from "styled-components";

const CityCardComponent = styled.div`
  background-image: url(${(props) => props.imageUrl});
  position: relative;
  min-height: 20vw;
  background-size: cover;
  border-radius: 10px;
  color: #fff;
  object-fit: cover;

  @media (max-width: 768px) {
    min-height: 35vw;
  }
`;

function CityCard(props) {
  return (
    <CityCardComponent imageUrl={props.img}>
      <div className={`${styles["inner-card"]}`}>
        <h1>{props.data.city}</h1>
        <h3>{props.data.amount} properties</h3>
      </div>
    </CityCardComponent>
  );
}

export default CityCard;
