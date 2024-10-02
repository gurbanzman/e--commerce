import { Link } from "react-router-dom";

const SideBarMenu = () => {
  return (
    <ul className="text-base flex flex-col gap-4 text-black">
      <li>
        <Link>Woman’s Fashion</Link>
      </li>
      <li>
        <Link>Men’s Fashion</Link>
      </li>
      <li>
        <Link>Electronics</Link>
      </li>
      <li>
        <Link>Home & Lifestyle</Link>
      </li>
      <li>
        <Link>Medicine</Link>
      </li>
      <li>
        <Link>Sports & Outdoor</Link>
      </li>
      <li>
        <Link>Baby’s & Toys</Link>
      </li>
      <li>
        <Link>Groceries & Pets</Link>
      </li>
      <li>
        <Link>Health & Beauty</Link>
      </li>
    </ul>
  );
};

export default SideBarMenu;
