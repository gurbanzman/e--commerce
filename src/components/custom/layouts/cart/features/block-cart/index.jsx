import styles from "./style.module.css";

const FeaturesBlockCart = ({imgURL,title,desc,className,width}) => {
   return (
      <li className={`${styles[`${className}`]}`} style={{width:`${width}`}}>
        <div className="flex flex-col gap-6 items-center">
          <div>
            <div className={`${styles[`head-block`]}`}>
              <div className={`${styles[`img-block`]}`}>
                <img src={imgURL} alt="" />
              </div>
            </div>
          </div>
          <ul className="flex flex-col gap-3 items-center">
            <li className="font-semibold text-2xl">{title} </li>
            <li className="font-medium text-base">{desc} </li>
          </ul>
        </div>
      </li>
   )
};

export default FeaturesBlockCart;