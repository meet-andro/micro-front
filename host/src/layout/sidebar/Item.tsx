import { Link } from "react-router-dom";
import { ItemData } from ".";

const Item = ({ data }: { data: ItemData }) => {
  return (
    <li
      style={{
        width: "100%",
        padding: "16px",
        textAlign: "start",
        backgroundColor: "#DFDFDF",
        borderRadius: "8px",
      }}
    >
      <Link to={data.link} style={{ fontSize: "18px", textDecoration: "none" }}>
        {data.name}
      </Link>
    </li>
  );
};

export default Item;
