import React, { useEffect, useState } from "react";
import styles from "./BookingFormContainer.module.css";
import BookingDatePicker from "../BookingDatePicker/BookingDatePicker";
import ReserveInfo from "../ReserveInfo/ReserveInfo";
import RoomAvailable from "../RoomAvailable/RoomAvailable";
import { HotelAPI } from "../../../apis/hotelAPI";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function BookingFormContainer(props) {
  const { currentUser } = useSelector((state) => state.auth);
  const { hotelId } = props;
  const [selectedDate, setSelectedDate] = useState();
  const [roomAvailable, setRoomAvailble] = useState([]);
  const [dateAmount, setDateAmount] = useState(1);
  const navigate = useNavigate();

  const handleChangeDate = (value) => {
    setSelectedDate({ startDate: value.startDate, endDate: value.endDate });
  };

  const handleBooking = async ({ totalPrice, roomNumbers, payment }) => {
    const params = {
      userId: currentUser._id,
      hotelId: hotelId,
      room: roomNumbers,
      dateStart: selectedDate.startDate,
      dateEnd: selectedDate.endDate,
      price: totalPrice * dateAmount,
      payment: payment,
    };
    const res = await HotelAPI.bookingRoom(params);
    if (res) {
      alert("Booking success");
      navigate("/");
    }
  };

  useEffect(() => {
    const loadRooms = async ({ hotelId, dateStart, dateEnd }) => {
      const res = await HotelAPI.getRoomAvailableByTime({
        hotelId,
        dateStart,
        dateEnd,
      });
      console.log(res);
      if (res) {
        setRoomAvailble(res);
      }
    };

    if (selectedDate?.startDate && selectedDate?.endDate) {
      loadRooms({
        hotelId,
        dateStart: selectedDate.startDate,
        dateEnd: selectedDate.endDate,
      });
      const amountDate = getDateAmount(
        selectedDate.startDate,
        selectedDate.endDate
      );
      setDateAmount(amountDate);
    }
  }, [selectedDate?.startDate, selectedDate?.endDate]);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <BookingDatePicker onSelectDate={handleChangeDate} />
        <ReserveInfo />
      </div>
      {selectedDate?.startDate && selectedDate?.endDate && (
        <RoomAvailable
          dateAmount={dateAmount}
          onBooking={handleBooking}
          data={roomAvailable}
        />
      )}
    </div>
  );
}

const getDateAmount = (start, end) => {
  const startDate = new Date(start).getDate();
  const endDate = new Date(end).getDate();
  return 1 + (endDate - startDate);
};

export default BookingFormContainer;
