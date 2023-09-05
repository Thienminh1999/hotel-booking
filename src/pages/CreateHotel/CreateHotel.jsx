import React from "react";
import styles from "./CreateHotel.module.css";
import NewHotelForm from "../../components/AdminHotels/NewHotelForm/NewHotelForm";
import { AdminAPI } from "../../apis/adminAPI";
import { useNavigate } from "react-router-dom";

function CreateHotel(props) {
  const navigate = useNavigate();
  const onCreateHotel = async (data) => {
    const res = await AdminAPI.createHotels(data);
    if (res) {
      alert("Create New Hotel Success");
      navigate("/admin/hotels");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Add New Product</h2>
      <NewHotelForm onCreateHotel={onCreateHotel} />
    </div>
  );
}

export default CreateHotel;
