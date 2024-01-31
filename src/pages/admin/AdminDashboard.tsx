import { Table } from "antd";
import AdminDashboardCards from "../../components/admin/dashboard/AdminDashboardCards";
import AdminDashboardFilter from "../../components/admin/dashboard/AdminDashboardFilter";
import { columns } from "../../components/admin/dashboard/table/seller/seller.history.columns";
import { useGetSellHistoryQuery } from "../../redux/features/sell/sellApi";
import Loading from "../Loading";
import { useState } from "react";

const AdminDashboard = () => {
  const [queryParam, setQueryParam] = useState("");

  console.log(queryParam);

  const { data, isLoading } = useGetSellHistoryQuery(queryParam, {
    pollingInterval: 1000,
  });
  const historyData = data?.data?.data;

  if (isLoading) {
    return <Loading color="black" />;
  }

  return (
    <section>
      <AdminDashboardFilter setQueryParam={setQueryParam} />
      <AdminDashboardCards data={data.data} />
      <div
        style={{
          marginTop: "100px",
          boxShadow: "2px 4px 20px #d1c1e3",
        }}
      >
        <Table columns={columns} dataSource={historyData} />
      </div>
    </section>
  );
};

export default AdminDashboard;
