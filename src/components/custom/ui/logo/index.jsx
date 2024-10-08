import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Logo = ({className,logo}) => {
   return <Link to={'/'} className={`text-black text-2xl font-semibold ${styles[`logo`]} w-full ${className}`}>{logo}</Link>
}
export default Logo;