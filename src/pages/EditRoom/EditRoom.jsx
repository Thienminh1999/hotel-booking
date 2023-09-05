import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import NewRoomForm from "../../components/AdminRooms/NewRoomForm/NewRoomForm";
import { AdminAPI } from "../../apis/adminAPI";
import styles from "./EditRoom.module.css";

function EditRoom(props) {
  const navigate = useNavigate();
  const data = useLoaderData();

  const onUpdateRoom = async (data) => {
    console.log("update");
    const res = await AdminAPI.updateRoom(data);
    if (res) {
      alert("Update Room Success");
      navigate("/admin/rooms");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Update Product</h2>
      <NewRoomForm data={data || null} onCreateRoom={onUpdateRoom} />
    </div>
  );
}

export default EditRoom;
export const loader = async ({ params }) => {
  const roomId = params.roomId;
  const result = await AdminAPI.getRoomDetails(roomId);
  return result;
};
