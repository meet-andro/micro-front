import { useLocation } from "react-router-dom";
import Item from "./Item";

export type ItemData = {
  name: string;
  link: string;
};

type ItemMap = {
  crypto: ItemData[];
  forex: ItemData[];
};

const Sidebar = () => {
  const { pathname } = useLocation();

  const item: ItemMap = {
    crypto: [
      {
        name: "Dashboard",
        link: "/crypto",
      },
      {
        name: "Wallet",
        link: "/crypto/wallet",
      },
      {
        name: "Statement",
        link: "/crypto/statement",
      },
    ],
    forex: [
      {
        name: "Dashboard",
        link: "/forex",
      },
      {
        name: "Strategy",
        link: "/forex/strategy",
      },
      {
        name: "Account",
        link: "/forex/account",
      },
    ],
  };

  const currentMarket = pathname.split("/")[1] as keyof ItemMap;

  return (
    <aside
      style={{
        minWidth: "280px",
        backgroundColor: "#CCC",
        textAlign: "center",
        padding: "80px 20px 0px",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {item[currentMarket].map((data, index) => {
          return <Item key={index} data={data} />;
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
