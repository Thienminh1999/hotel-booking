import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { format } from "date-fns";
import TransactionStatus from "../../TransactionPage/TransactionStatus/TransactionStatus";
import styles from "./LatestTransactions.module.css";

function LatestTransactions(props) {
  const { data } = props;
  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "user",
      headerName: "User",

      valueFormatter: (params) => {
        return params.value?.fullName;
      },
    },
    {
      field: "hotel",
      headerName: "Hotel",

      valueFormatter: (params) => {
        return params.value?.name;
      },
    },
    { field: "room", headerName: "Room", flex: 1 },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      minWidth: 200,
      renderCell: (params) => {
        const startDate = format(new Date(params.row?.dateStart), "dd/MM/yyyy");
        const endDate = format(new Date(params.row?.dateEnd), "dd/MM/yyyy");
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
        return <TransactionStatus status={params.row?.status} />;
      },
    },
  ];
  return (
    <div className={styles.container}>
      <h2>Latest Transactions</h2>
      <DataGrid
        getRowId={(row) => row._id}
        checkboxSelection
        disableRowSelectionOnClick
        rows={data}
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

export default LatestTransactions;
