import React from "react";
import styles from "./style.module.css";

const SwiperCustomButton = React.memo(({className,handleClick}) => {
   return <button type="button" onClick={handleClick} className={`${styles['swiper-button']} ${styles[`${className}`]}`}></button>
});

SwiperCustomButton.displayName = "SwiperCustomButton";

export default SwiperCustomButton;
