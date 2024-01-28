import Inventory from "../pages/seller/Inventory";
import SellerDashboard from "../pages/seller/SellerDashboard";

export const sellerPaths = [
  {
    index: true,
    element: <SellerDashboard />,
  },
  {
    path: "dashboard",
    element: <SellerDashboard />,
  },
  {
    path: "inventory",
    element: <Inventory />,
  },
];
