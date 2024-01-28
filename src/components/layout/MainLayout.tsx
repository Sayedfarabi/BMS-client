import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const { Content, Footer, Header, Sider } = Layout;

const items: MenuProps["items"] = [
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

const MainLayout = () => {
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
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
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
