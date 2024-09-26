import { Link } from "react-router-dom";
import styles from "./style.module.css";

const AdminMenu = () => {
  return (
    <ul className={`${styles[`admin-menu`]} admin`}>
      <li>
        <button className="w-full">
          <Link className="flex items-center gap-4 p-2">
            <span className="icon-user1 text-white text-2xl"></span>
            <span className="text-white">Manage My Account</span>
          </Link>
        </button>
      </li>
      <li>
        <button className="w-full">
          <Link className="flex items-center gap-4 p-2">
            <span className="icon-shopping-bag text-white text-2xl"></span>
            <span className="text-white">My Order</span>
          </Link>
        </button>
      </li>
      <li>
        <button className="w-full">
          <Link className="flex items-center gap-4 p-2">
            <span className="icon-cancel1 text-white text-2xl"></span>
            <span className="text-white">My Cancellations</span>
          </Link>
        </button>
      </li>
      <li>
        <button className="w-full">
          <Link className="flex items-center gap-4 p-2">
            <span className="icon-star-o text-white text-2xl"></span>
            <span className="text-white">My Reviews</span>
          </Link>
        </button>
      </li>
      <li>
        <button className="w-full">
          <Link className="flex items-center gap-4 p-2">
            <span className="icon-sign-out text-white text-2xl"></span>
            <span className="text-white">Logout</span>
          </Link>
        </button>
      </li>
    </ul>
  );
};

export default AdminMenu;
