import CustomCheckbox from "../../ui/checkbox";
import Menu from "../menu";
import styles from "./style.module.css";

const Bar = () => {
   return (
      <div className="ml-3">
         <CustomCheckbox name={`${styles[`bar`]} bar-menu`}/>
         <Menu />
      </div>
   )
}

export default Bar;