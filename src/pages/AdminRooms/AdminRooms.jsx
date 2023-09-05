import React from "react";
import { AdminAPI } from "../../apis/adminAPI";
import { useLoaderData } from "react-router-dom";
import AdminRoomsContainer from "../../components/AdminRooms/AdminRoomsContainer/AdminRoomsContainer";

function AdminRooms(props) {
  const data = useLoaderData();
  return (
    <div>
      <AdminRoomsContainer rooms={data} />
    </div>
  );
}

export default AdminRooms;
export const loader = async () => {
  const rooms = await AdminAPI.getAllRooms();
  return rooms;
};
