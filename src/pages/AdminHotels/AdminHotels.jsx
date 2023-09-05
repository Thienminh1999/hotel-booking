import React from "react";
import AdminHotelsContainer from "../../components/AdminHotels/AdminHotelsContainer/AdminHotelsContainer";
import { HotelAPI } from "../../apis/hotelAPI";
import { useLoaderData } from "react-router-dom";

function AdminHotels(props) {
  const data = useLoaderData();
  return (
    <div>
      <AdminHotelsContainer hotels={data} />
    </div>
  );
}

export default AdminHotels;
export const loader = async () => {
  const hotels = await HotelAPI.getAllHotels();
  return hotels;
};
