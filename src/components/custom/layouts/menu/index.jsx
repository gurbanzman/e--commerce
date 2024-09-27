import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

const Menu = () => {
   return (
      <ul className={`menu flex items-center gap-8 ${styles[`responsive-menu`]} w-full`}>
         <li>
            <NavLink to={`/`} className={`text-black text-base block p-2`}>Home</NavLink>
         </li>
         <li>
            <NavLink to={`/contact`} className={`text-black text-base block p-2`}>Contact</NavLink>
         </li>
         <li>
            <NavLink className={`text-black text-base block p-2`}>About</NavLink>
         </li>
         <li>
            <NavLink className={`text-black text-base block p-2`}>Sign Up</NavLink>
         </li>
      </ul>
   )
}
export default Menu;