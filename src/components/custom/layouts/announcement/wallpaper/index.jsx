import styles from "./style.module.css";

const WallPaper = ({children,className}) => {
   return (
      <div className={`${styles[`announcement`]} ${className}`}>
         {children}
      </div>
   )
}

export default WallPaper;