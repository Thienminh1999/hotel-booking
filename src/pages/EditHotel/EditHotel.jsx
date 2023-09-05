import React from "react";
import styles from "./EditHotel.module.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { HotelAPI } from "../../apis/hotelAPI";
import NewHotelForm from "../../components/AdminHotels/NewHotelForm/NewHotelForm";

function EditHotel(props) {
  const navigate = useNavigate();
  const data = useLoaderData();
  const onUpdateHotel = async (data) => {
    const res = await HotelAPI.updateHotel(data);
    if (res) {
      alert("Update New Hotel Success");
      navigate("/admin/hotels");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Update Product</h2>
      <NewHotelForm data={data || null} onCreateHotel={onUpdateHotel} />
    </div>
  );
}

export default EditHotel;

export const loader = async ({ params }) => {
  const hotelId = params.hotelId;
  const result = await HotelAPI.getDetails(hotelId);
  return result;
};
