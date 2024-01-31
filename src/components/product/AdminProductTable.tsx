/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Col, Input, Modal, Row, Space, Table } from "antd";
import type { TableProps } from "antd";

import {
  useDeleteProductMutation,
  useProductsQuery,
} from "../../redux/features/product/productApi";
import Loading from "../../pages/Loading";
import ProductFilter from "./ProductFilter";
import { useState } from "react";
import { toast } from "sonner";

const AdminProductTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading: fetchIsLoading } = useProductsQuery("", {
    pollingInterval: 1000,
  });
  const [deleteProduct, { isLoading: deleteIsLoading }] =
    useDeleteProductMutation();
  const adminInventory = data?.data?.result;

  if (fetchIsLoading || deleteIsLoading) {
    return <Loading color="black" />;
  }

  // Fn
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const deleteHandler = async (id: string) => {
    const toastId = toast.loading("Product deleting...");
    try {
      const res = await deleteProduct(id).unwrap();
      toast.success(res.message, { id: toastId, duration: 2000 });
      // console.log(res);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message, { id: toastId, duration: 2000 });
    }
  };

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
      key: "adminImage",
      render: (text) => <Avatar src={text} size="large" alt="product" />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "adminProductName",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "adminType",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "adminBrand",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "adminQuantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "adminPrice",
    },
    {
      title: "Action",
      key: "adminAction",
      render: (_: any, record: DataType) => (
        <Space size="middle">
          <button onClick={() => showModal()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              style={{
                height: "20px",
                width: "20px",
                color: "#f0c013",
                cursor: "pointer",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
          <button onClick={() => deleteHandler(record._id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              style={{
                height: "20px",
                width: "20px",
                color: "#f2273b",
                cursor: "pointer",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </Space>
      ),
    },
  ];

  // console.log(data);
  return (
    <div>
      <div>
        <ProductFilter />
      </div>
      <Table columns={columns} dataSource={adminInventory} />
      <Modal
        title="Update Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <p style={{ color: "red" }}>This feature coming soon...</p>
        </div>
      </Modal>
    </div>
  );
};

export default AdminProductTable;
