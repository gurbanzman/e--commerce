// import React from "react";

import React from "react";

const CustomCheckbox = React.memo(({className,handleChangeCheckbox}) => {
   return <input type="checkbox" onChange={handleChangeCheckbox} className={`custom-checkbox cursor-pointer ${className}`}/>
});

CustomCheckbox.displayName = "CustomCheckbox";

// CustomCheckbox.displayName = "CustomCheckbox";
export default CustomCheckbox;