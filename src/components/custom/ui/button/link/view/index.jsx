import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const ViewAllDatasByButtonLink = React.memo(({url,title}) => {
   return (
      <button type="button">
         <Link to={url} className={`${styles[`view-btn-link`]} ${styles[`same-btn`]}`}>View All {title}</Link>
      </button>
   );
});

export const Btn = React.memo(({type,handleClick,title,className,customClass}) => {
   return (
      <button type={type} className={`${styles[`${className}`]} ${customClass}`} onClick={handleClick}>{title}</button>
   );
});

ViewAllDatasByButtonLink.displayName = "ViewAllDatasByButtonLink";
Btn.displayName = "Btn";

export default ViewAllDatasByButtonLink;