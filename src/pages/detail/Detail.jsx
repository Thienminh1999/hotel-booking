import { useLoaderData } from "react-router-dom";
import { HotelAPI } from "../../apis/hotelAPI";
import HotelDescription from "../../components/DetailHotel/HotelDescription/HotelDescription";
import HotelImage from "../../components/DetailHotel/HotelImage/HotelImage";
import HotelInfo from "../../components/DetailHotel/HotelInfo/HotelInfo";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import styles from "./Details.module.css";
import BookingFormContainer from "../../components/DetailHotel/BookingFormContainer/BookingFormContainer";
import { useState } from "react";
import { useSelector } from "react-redux";

const Detail = () => {
  const data = useLoaderData();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const { currentUser } = useSelector((state) => state.auth);

  const onShowForm = () => {
    if (currentUser) {
      setShowBookingForm(true);
    } else {
      alert("You must be logged in to book a room");
    }
  };

  return (
    <div>
      <div className={`${styles["detail-container"]}`}>
        <HotelInfo data={data} />
        <HotelImage data={data} />
        <HotelDescription onShowForm={onShowForm} data={data} />
        {showBookingForm && <BookingFormContainer hotelId={data._id} />}
      </div>
      <RegisterForm />
    </div>
  );
};

export default Detail;

export const loader = async ({ params }) => {
  const hotelId = params.hotelId;
  const res = await HotelAPI.getDetails(hotelId);
  return res;
};
