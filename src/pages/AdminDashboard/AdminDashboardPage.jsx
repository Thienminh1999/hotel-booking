import React, { Suspense } from "react";
import styles from "./AdminDashboardPage.module.css";
import { AdminAPI } from "../../apis/adminAPI";
import { Await, defer, useLoaderData } from "react-router-dom";
import CommonInfo from "../../components/AdminDashboard/CommonInfo/CommonInfo";
import LatestTransactions from "../../components/AdminDashboard/LatestTransactions/LatestTransactions";
import LoadingPage from "../Loader/LoadingPage";

function AdminDashboardPage(props) {
  const { data } = useLoaderData();
  return (
    <Suspense fallback={<LoadingPage />}>
      <Await resolve={data}>
        {(data) => (
          <div className={styles.container}>
            <CommonInfo data={data.commonInfo} />
            <LatestTransactions data={data.latestTransaction} />
          </div>
        )}
      </Await>
    </Suspense>
  );
}

export default AdminDashboardPage;

async function loadInfo() {
  const commonInfo = await AdminAPI.getDashboardInfo();
  const latestTransaction = await AdminAPI.getLatestTransactions();
  const result = {
    commonInfo,
    latestTransaction,
  };
  return result;
}

export const loader = async () => {
  return defer({
    data: loadInfo(),
  });
};
