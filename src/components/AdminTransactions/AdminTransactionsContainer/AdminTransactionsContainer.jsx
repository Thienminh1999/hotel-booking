import React from "react";
import styles from "./AdminTransactionsContainer.module.css";
import { format } from "date-fns";
import TransactionStatus from "../../TransactionPage/TransactionStatus/TransactionStatus";
import { DataGrid } from "@mui/x-data-grid";

function AdminTransactionsContainer(props) {
  const { transactions } = props;
  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "user",
      headerName: "User",
      flex: 1,
      minWidth: 200,
      valueFormatter: (params) => {
        return params.value.fullName;
      },
    },
    {
      field: "hotel",
      headerName: "Hotel",
      flex: 1,
      minWidth: 300,
      valueFormatter: (params) => {
        return params.value.name;
      },
    },
    {
      field: "room",
      headerName: "Rooms",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      minWidth: 300,
      renderCell: (params) => {
        const startDate = format(new Date(params.row.dateStart), "dd/MM/yyyy");
        const endDate = format(new Date(params.row.dateEnd), "dd/MM/yyyy");
        return (
          <>
            {startDate}-{endDate}
          </>
        );
      },
    },
    { field: "price", headerName: "Price", flex: 1 },
    { field: "payment", headerName: "Payment method", flex: 1 },

    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => {
        return <TransactionStatus status={params.row.status} />;
      },
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.top_bar}>
        <h2>Hotels List</h2>
      </div>
      <DataGrid
        getRowId={(row) => row._id}
        checkboxSelection
        disableRowSelectionOnClick
        rows={transactions}
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

export default AdminTransactionsContainer;
