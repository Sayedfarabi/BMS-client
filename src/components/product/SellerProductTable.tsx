import { Avatar, Button, Space, Table } from "antd";
import type { TableProps } from "antd";

import { useProductsQuery } from "../../redux/features/product/productApi";
import Loading from "../../pages/Loading";

const SellerProductTable = () => {
  const { data, isLoading } = useProductsQuery("");

  if (isLoading) {
    return <Loading color="black" />;
  }

  interface DataType {
    _id: string;
    name: string;
    price: number;
    quantity: number;
    releaseDate: string;
    brand: string;
    model: string;
    type: "Road" | "Mountain" | "Hybrid" | "Other";
    size: string;
    color: string;
    frameMaterial: string;
    suspensionType: string;
    image: string;
    isDeleted: boolean;

    age: number;
    address: string;
    tags: string[];
  }

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text) => (
        <Avatar src={text} size="large" icon={text} alt="product" />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Brand",
      key: "brand",
      dataIndex: "brand",
      // render: (_, { tags }) => (
      //   <>
      //     {tags.map((tag) => {
      //       let color = tag.length > 5 ? "geekblue" : "green";
      //       if (tag === "loser") {
      //         color = "volcano";
      //       }
      //       return (
      //         <Tag color={color} key={tag}>
      //           {tag.toUpperCase()}
      //         </Tag>
      //       );
      //     })}
      //   </>
      // ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          {/* <a>Invite {record.name}</a> */}
          <Button type="primary">Sell</Button>
        </Space>
      ),
    },
  ];

  console.log(data);
  return (
    <div>
      <Table columns={columns} dataSource={data.data.result} />
    </div>
  );
};

export default SellerProductTable;
