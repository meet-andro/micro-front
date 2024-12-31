import { Link, Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

const index = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <Sidebar />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <ul
          style={{
            border: "3px solid #CCC",
            borderTop: "0px",
            borderBottom: "0px",
            padding: "10px 0px",
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <li style={{ padding: "10px" }}>
            <Link style={{ fontSize: "18px", color: "black" }} to="/crypto">
              Crypto
            </Link>
          </li>
          <li style={{ padding: "10px" }}>
            <Link style={{ fontSize: "18px", color: "black" }} to="/forex">
              Forex
            </Link>
          </li>
          <li style={{ padding: "10px" }}>
            <Link style={{ fontSize: "18px", color: "black" }} to="/indian">
              Indian
            </Link>
          </li>
        </ul>
        <div
          style={{ width: "100%", height: "100%", border: "3px solid #CCC" }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default index;
