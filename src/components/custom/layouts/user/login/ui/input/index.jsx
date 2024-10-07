import React from "react";
import styles from "./style.module.css";

const LoginInput = React.memo(({type,name,placeholder,handleOnChange}) => {
   return <input type={type} name={name} placeholder={placeholder} onChange={handleOnChange} className={`${styles[`login-input`]}`}/>
});
LoginInput.displayName = "LoginInput";

export default LoginInput;