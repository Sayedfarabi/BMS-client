import { Avatar, Dropdown, Layout, Menu, MenuProps, Space } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import Logout from "../auth/Logout";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
const { Content, Footer, Header, Sider } = Layout;

const sidebarItems: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: (
      <NavLink to={"/"} style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        Dashboard
      </NavLink>
    ),
  },
  {
    key: "Admin Management",
    label: "Admin Management",
    children: [
      {
        key: "Create Product",
        label: <NavLink to={"/admin/create-product"}>Create Product</NavLink>,
      },
      {
        key: "Product Inventory",
        label: <NavLink to={"/admin/inventory"}>Product Inventory</NavLink>,
      },
      {
        key: "Create Seller",
        label: <NavLink to={"/admin/create-seller"}>Create Seller</NavLink>,
      },
    ],
  },
  {
    key: "Seller Management",
    label: "Seller Management",
    children: [
      {
        key: "Seller Dashboard",
        label: <NavLink to={"/seller/dashboard"}>Dashboard</NavLink>,
      },
      {
        key: "Inventory",
        label: <NavLink to={"/seller/inventory"}>Inventory</NavLink>,
      },
    ],
  },
  {
    key: "Buyer Management",
    label: "Buyer Management",
    children: [
      {
        key: "Buyer Dashboard",
        label: <NavLink to={"/buyer/dashboard"}>Dashboard</NavLink>,
      },
    ],
  },
];
const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <NavLink
        style={{ fontWeight: "bold", textAlign: "center", fontSize: "1rem" }}
        to={""}
      >
        User Name
      </NavLink>
    ),
  },
  {
    key: "2",
    label: <NavLink to={""}>Profile</NavLink>,
  },
  {
    key: "3",
    label: <Logout />,
  },
];

const MainLayout = () => {
  const token = useAppSelector(useCurrentToken);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            background: "linear-gradient(to right, #1f0f42, #8959f0, #19034a)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: "3rem",
            textAlign: "center",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          BMS
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: "0px 28px", color: "white" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex" }}>
              {/* <div style={{ margin: "0px 12px" }}>
                <h1>Log in</h1>
              </div>
              <div style={{ margin: "0px 12px" }}>
                <h1>Log out</h1>
              </div> */}
              <Space direction="horizontal" size={16}>
                {token ? (
                  <Space wrap size={16}>
                    <Dropdown
                      menu={{ items }}
                      placement="bottom"
                      arrow={{ pointAtCenter: true }}
                    >
                      <Avatar size={64} icon={<UserOutlined />} />
                    </Dropdown>
                  </Space>
                ) : (
                  <Space wrap size={16}>
                    <p>Log in</p>
                  </Space>
                )}
              </Space>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflowX: "auto",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Bike Management Software ©{new Date().getFullYear()} Created by Abu
          Sayed
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
