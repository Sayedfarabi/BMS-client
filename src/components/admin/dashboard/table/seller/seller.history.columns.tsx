import { Avatar, TableProps } from "antd";
import { TSellerHistoryDataType } from "./seller.history.interface";

export const columns: TableProps<TSellerHistoryDataType>["columns"] = [
  {
    title: "Image",
    dataIndex: "sellerInfo",
    key: "profileImage",
    render: (sellerInfo) => (
      <Avatar src={sellerInfo?.profileImage} size="large" alt="product" />
    ),
  },
  {
    title: "Name",
    dataIndex: "sellerInfo",
    key: "name",
    render: (sellerInfo) => (
      <>
        <p>{`${sellerInfo?.name?.firstName} ${sellerInfo?.name?.lastName}`}</p>
      </>
    ),
  },
  {
    title: "Gender",
    dataIndex: "sellerInfo",
    key: "gender",
    render: (sellerInfo) => <p>{sellerInfo?.gender}</p>,
  },
  {
    title: "Total Sale",
    key: "totalSalesTime",
    dataIndex: "totalSalesTime",
  },
];
