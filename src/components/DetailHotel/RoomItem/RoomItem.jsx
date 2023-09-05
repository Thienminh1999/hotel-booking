import React from "react";
import styles from "./RoomItem.module.css";

function RoomItem(props) {
  const { room, onChecked, onUnChecked } = props;
  const handleChange = (event) => {
    if (event.target.checked) {
      onChecked(event.target.value, Number(room.price));
    } else {
      onUnChecked(event.target.value, Number(room.price));
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.room_info}>
        <h3>{room.title}</h3>
        <p className={styles.desc}>{room.desc}</p>
        <p className={styles.max_people}>
          Max people: <strong>{room.maxPeople}</strong>
        </p>
        <h3>${room.price}</h3>
      </div>
      <div className={styles.room_numbers}>
        {room.roomNumbers.map((item, index) => (
          <div className={styles.room_checkbox} key={index}>
            {item}
            <input onChange={handleChange} type="checkbox" value={item} />
          </div>
        ))}
        {room.roomNumbers.length === 0 && (
          <p className={styles.unavailable}>No rooms available</p>
        )}
      </div>
    </div>
  );
}

export default RoomItem;
