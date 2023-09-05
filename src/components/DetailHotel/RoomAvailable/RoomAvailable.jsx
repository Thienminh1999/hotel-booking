import React, { useState } from "react";
import styles from "./RoomAvailable.module.css";
import RoomItem from "../RoomItem/RoomItem";
import button from "../../../UI/Button.module.css";

function RoomAvailable(props) {
  const { data, onBooking, dateAmount } = props;
  const [roomNumbersChecked, setRoomNumbersChecked] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");

  const onChecked = (value, price) => {
    setRoomNumbersChecked((prev) => [...prev, value]);
    setTotalPrice((prev) => prev + price);
  };
  const onUnChecked = (value, price) => {
    setRoomNumbersChecked((prev) => prev.filter((item) => item === value));
    setTotalPrice((prev) => prev - price);
  };

  const handleBooking = () => {
    if (totalPrice > 0) {
      onBooking({
        totalPrice: totalPrice,
        roomNumbers: roomNumbersChecked,
        payment: paymentMethod,
      });
    }
  };

  const handleChangePayment = (event) => {
    setPaymentMethod(event.target.value);
  };

  const canBooking = totalPrice > 0 && paymentMethod !== "";
  return (
    <div className={styles.container}>
      <div className={styles.rooms}>
        {data &&
          data.map((item, index) => (
            <RoomItem
              onChecked={onChecked}
              onUnChecked={onUnChecked}
              key={index}
              room={item}
            />
          ))}
      </div>
      <h2>Total bill: ${totalPrice * dateAmount}</h2>
      <div className={styles.actions}>
        <select onChange={handleChangePayment} name="payment">
          <option value="">Select payment method</option>
          <option value="cash">Cash</option>
          <option value="momo">MOMO</option>
        </select>
        <button
          disabled={!canBooking}
          onClick={handleBooking}
          className={`${button["btn"]} ${button["primary-color"]}`}
        >
          Reserve or book now!
        </button>
      </div>
    </div>
  );
}

export default RoomAvailable;
