import React, { useState } from "react";
import styles from "./AdminHotelsContainer.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { AdminAPI } from "../../../apis/adminAPI";
import ActionButton from "../../../UI/DeleteButton/ActionButton";

function AdminHotelsContainer(props) {
  const { hotels } = props;
  const [hotelList, setHotelList] = useState(hotels);
  const navigate = useNavigate();
  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 300,
    },
    { field: "type", headerName: "Type", flex: 1 },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      minWidth: 300,
    },
    { field: "city", headerName: "City", flex: 1 },

    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        const handleDelete = async () => {
          const res = await AdminAPI.deleteHotel(params.row._id);
          alert("Delete sucess");
          const listUpdated = hotelList.filter(
            (item) => item._id !== params.row._id
          );
          setHotelList(listUpdated);
        };
        const handleEdit = () => {
          navigate(params.row._id);
        };
        return (
          <div className={styles.actions}>
            <ActionButton action="Delete" onClick={handleDelete} />
            <ActionButton
              style={{ color: "green", border: "1px dashed green" }}
              action="Edit"
              onClick={handleEdit}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.top_bar}>
        <h2>Hotels List</h2>
        <Link to="/admin/hotels/create">Add New</Link>
      </div>
      <DataGrid
        getRowId={(row) => row._id}
        checkboxSelection
        disableRowSelectionOnClick
        rows={hotelList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[8]}
      />
    </div>
  );
}

export default AdminHotelsContainer;
