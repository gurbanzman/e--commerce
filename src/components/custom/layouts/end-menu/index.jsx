import { Link } from "react-router-dom";
import styles from "./style.module.css";
import AdminMenu from "../admin/menu";
import { useState } from "react";

const EndMenu = ({like,shop,user}) => {
  const [seem,setSeem] = useState(false);
  return (
    <ul className="flex items-center gap-4 end-menu">
      <li>
        <Link className="icon-heart-o text-2xl relative">
          {+like > 1 && <span className={styles[`count`]}>{Number(like) >= 100 ? "99+" : like}</span>}
        </Link>
      </li>
      <li>
        <Link className="icon-shopping-cart3 text-2xl relative">
          {+shop > 1 && <span className={styles[`count`]}>{Number(shop) >= 100 ? "99+" : shop}</span>}
        </Link>
      </li>
      <li onClick={() => setSeem((prev) => !prev)}>
        <Link className="icon-user1 text-2xl relative user">
          {+user > 1 && <span className={styles[`count`]}>{Number(user) >= 100 ? "99+" : user}</span>}
        </Link>
        {seem && <AdminMenu />}
      </li>
    </ul>
  );
};
export default EndMenu;
