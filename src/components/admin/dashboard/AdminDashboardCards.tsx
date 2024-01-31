import { Col, Row } from "antd";
import DashboardCard from "./card/DashboardCard";

type props = {
  data: {
    sellerCount: number;
    totalSell: number;
  };
};

const AdminDashboardCards = ({ data }: props) => {
  const { sellerCount, totalSell } = data;
  return (
    <div style={{ margin: "20px 0px" }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 28 }}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <DashboardCard
            title="Total Seller"
            count={sellerCount}
          ></DashboardCard>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <DashboardCard title="Total Sell" count={totalSell}></DashboardCard>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          {/* <DashboardCard title="Total Seller" count={2}></DashboardCard> */}
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboardCards;
