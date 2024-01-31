/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Button, Col, Input, Modal, Row, Space, Table } from "antd";
import type { TableProps } from "antd";
import { useProductsQuery } from "../../redux/features/product/productApi";
import Loading from "../../pages/Loading";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  removeSell,
  setBuyer,
  setDate,
  setProductId,
  setQuantity,
} from "../../redux/features/sell/sellSlice";
import { useCreateSellMutation } from "../../redux/features/sell/sellApi";
import { toast } from "sonner";

const SellerProductTable = () => {
  // hooks
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const sellData = useAppSelector((state) => state.sell);
  const [createSell] = useCreateSellMutation();
  const { data, isLoading } = useProductsQuery(undefined, {
    pollingInterval: 1000,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    // refetchOnFocus: true,
  });

  // Fn
  const showModal = (productData: any) => {
    dispatch(setProductId(productData?._id));
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    const toastId = toast.loading("Make selling...");
    try {
      const res = await createSell(sellData).unwrap();
      console.log(res);
      dispatch(removeSell());
      setIsModalOpen(false);
      toast.success(res.message, { id: toastId, duration: 2000 });
    } catch (error) {
      toast.error("Somethig went wrong!", { id: toastId, duration: 2000 });
      console.log(error);
    }
  };

  const handleCancel = () => {
    dispatch(removeSell());
    setIsModalOpen(false);
  };

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
      render: (text) => <Avatar src={text} size="large" alt="product" />,
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
      render: (_: any, record: DataType) => (
        <Space size="middle">
          <Button onClick={() => showModal(record)} type="primary">
            Sell
          </Button>
        </Space>
      ),
    },
  ];

  // console.log(data);
  return (
    <div>
      <Table columns={columns} dataSource={data.data?.result} />
      <Modal
        title="Product Sell"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 28 }}>
            <Col span={24}>
              <Input
                onChange={(e) => dispatch(setBuyer(e.target?.value))}
                type="text"
                placeholder="Buyer name"
                required
              />
              ;
            </Col>

            <Col span={24}>
              <Input
                onChange={(e) => dispatch(setQuantity(e.target?.value))}
                type="number"
                placeholder="Product quantity"
                required
              />
              ;
            </Col>

            <Col span={24}>
              <Input
                onChange={(e) => dispatch(setDate(e.target?.value))}
                type="date"
                placeholder="Date of sale"
                required
              />
              ;
            </Col>
          </Row>
        </div>
      </Modal>
    </div>
  );
};

export default SellerProductTable;
