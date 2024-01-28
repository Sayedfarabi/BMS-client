import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateProduct from "../pages/admin/CreateProduct";
import CreateSeller from "../pages/admin/CreateSeller";
// import BuyerDashboard from "../pages/buyer/BuyerDashboard";
// import Inventory from "../pages/seller/Inventory";
// import SellerDashboard from "../pages/seller/SellerDashboard";

// export const adminPaths2 = [
//   {
//     name: "Dashboard",
//     path: "/",
//     element: <AdminDashboard />,
//   },
//   {
//     name: "Admin Management",
//     children: [
//       {
//         name: "Dashboard",
//         path: "/admin/dashboard",
//         element: <AdminDashboard />,
//       },
//       {
//         name: "Create Product",
//         path: "/admin/create-product",
//         element: <CreateProduct />,
//       },
//       {
//         name: "Create Seller",
//         path: "/admin/create-seller",
//         element: <CreateSeller />,
//       },
//     ],
//   },
//   {
//     name: "Seller Management",
//     children: [
//       {
//         name: "Dashboard",
//         path: "/seller/dashboard",
//         element: <SellerDashboard />,
//       },
//       {
//         name: "Inventory",
//         path: "/seller/inventory",
//         element: <Inventory />,
//       },
//     ],
//   },
//   {
//     name: "Buyer Management",
//     children: [
//       {
//         name: "Dashboard",
//         path: "/buyer/dashboard",
//         element: <BuyerDashboard />,
//       },
//     ],
//   },
// ];

export const adminPaths = [
  {
    index: true,
    element: <AdminDashboard />,
  },
  {
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "create-product",
    element: <CreateProduct />,
  },
  {
    path: "create-seller",
    element: <CreateSeller />,
  },
];
