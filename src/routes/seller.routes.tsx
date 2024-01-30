import SellerDashboard from "../pages/seller/SellerDashboard";
import SellerInventory from "../pages/seller/SellerInventory";

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
    element: <SellerInventory />,
  },
];
