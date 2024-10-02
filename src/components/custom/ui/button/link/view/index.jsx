import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const ViewAllDatasByButtonLink = React.memo(({url,title}) => {
   return (
      <button type="button">
         <Link to={url} className={`${styles[`view-btn-link`]}`}>View All {title}</Link>
      </button>
   )
});

ViewAllDatasByButtonLink.displayName = "ViewAllDatasByButtonLink";

export default ViewAllDatasByButtonLink;