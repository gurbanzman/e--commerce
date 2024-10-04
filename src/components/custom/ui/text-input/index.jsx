import React from "react";
import styles from "./style.module.css";

const TextInput = React.memo(({type,placeholder,handleChange,name}) => {
   return <input type={type} className={`${styles[`text-input`]}`} placeholder={placeholder} onChange={handleChange} name={name} required/>
});

TextInput.displayName = "TextInput";
export default TextInput;