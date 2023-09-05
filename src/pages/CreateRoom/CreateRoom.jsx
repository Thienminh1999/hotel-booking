import React from "react";
import styles from "./CreateRoom.module.css";
import { HotelAPI } from "../../apis/hotelAPI";
import { useLoaderData, useNavigate } from "react-router-dom";
import NewRoomForm from "../../components/AdminRooms/NewRoomForm/NewRoomForm";
import { AdminAPI } from "../../apis/adminAPI";

function CreateRoom(props) {
  const hotelsSelection = useLoaderData();
  const navigate = useNavigate();

  const onCreateRoom = async (data) => {
    const res = await AdminAPI.createRooms(data);
    if (res) {
      alert("Create New Room Success");
      navigate("/admin/rooms");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Add New Room</h2>
      <NewRoomForm onCreateRoom={onCreateRoom} hotelsSelect={hotelsSelection} />
    </div>
  );
}

export default CreateRoom;

export const loader = async () => {
  const hotels = await HotelAPI.getAllHotels();
  return hotels;
};
