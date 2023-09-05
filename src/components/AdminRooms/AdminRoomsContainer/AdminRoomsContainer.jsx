import React, { useState } from "react";
import styles from "./AdminRoomsContainer.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { AdminAPI } from "../../../apis/adminAPI";
import ActionButton from "../../../UI/DeleteButton/ActionButton";

function AdminRoomsContainer(props) {
  const { rooms } = props;
  const navigate = useNavigate();
  const [roomList, setRoomList] = useState(rooms);
  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      minWidth: 300,
    },
    { field: "desc", headerName: "Description", flex: 1, minWidth: 300 },
    { field: "price", headerName: "Price", flex: 1 },
    { field: "maxPeople", headerName: "Max People", flex: 1 },

    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        const handleDelete = async () => {
          const res = await AdminAPI.deleteRoom(params.row._id);
          if (res.status === 409) {
            alert(`Delete fail, ${res.data.message}`);
          } else {
            alert("Delete sucess");
            const listUpdated = roomList.filter(
              (item) => item._id !== params.row._id
            );
            setRoomList(listUpdated);
          }
        };
        const handleEdit = () => {
          navigate(params.row._id);
        };
        return (
          <div>
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
        <h2>Rooms List</h2>
        <Link to="/admin/rooms/create">Add New</Link>
      </div>
      <DataGrid
        getRowId={(row) => row._id}
        checkboxSelection
        disableRowSelectionOnClick
        rows={roomList}
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

export default AdminRoomsContainer;
