import EndMenu from "../end-menu";
import styles from "./style.module.css";

const FootBar = () => {
   return (
      <div className={`${styles[`foot-bar`]} foot__bar`}>
         <EndMenu />
      </div>
   )
}

export default FootBar;