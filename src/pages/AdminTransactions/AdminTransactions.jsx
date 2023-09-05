import React from "react";
import { AdminAPI } from "../../apis/adminAPI";
import { useLoaderData } from "react-router-dom";
import AdminTransactionsContainer from "../../components/AdminTransactions/AdminTransactionsContainer/AdminTransactionsContainer";

function AdminTransactions(props) {
  const data = useLoaderData();
  return (
    <div>
      <AdminTransactionsContainer transactions={data} />
    </div>
  );
}

export default AdminTransactions;
export const loader = async () => {
  const transactions = await AdminAPI.getAllTransactions();
  return transactions;
};
