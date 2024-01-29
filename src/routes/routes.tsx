import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { adminPaths } from "./admin.routes";
import { sellerPaths } from "./seller.routes";
import { buyerPaths } from "./buyer.routes";
import ProtectedRoute from "../components/layout/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: adminPaths,
  },
  {
    path: "/seller",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: sellerPaths,
  },
  {
    path: "/buyer",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: buyerPaths,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
