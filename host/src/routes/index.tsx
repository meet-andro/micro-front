import CryptoRoutes from "crypto/App";
import ForexRoutes from "forex/App";
import { createBrowserRouter, Link } from "react-router-dom";
import Layout from "../layout";
import ErrorBoundary from "../pages/ErrorBoundary";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="crypto">
          <button
            type="button"
            style={{ padding: "8px 16px", fontSize: "20px" }}
          >
            Login
          </button>
        </Link>
      </div>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    element: <Layout />,
    children: [CryptoRoutes(), ForexRoutes()],
    errorElement: <ErrorBoundary />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
