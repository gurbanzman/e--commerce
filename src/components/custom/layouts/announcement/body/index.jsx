import { Link } from "react-router-dom";
import styles from "./style.module.css";

const AnnouncementBody = ({logo,title,describe,describeStyle,link,src,url,titleStyle,logoStyle,classNameImg,classWall,describeWeight}) => {
  return (
    <ul className="flex items-center">
      <li className={`${styles[`half`]} ${classWall}`}>
        <ul className="text-zinc-50 flex flex-col gap-8">
          <li className="flex flex-col gap-5">
            <ul className="flex flex-row gap-6 items-center">
              <li className={`${styles[`logo`]} ${styles[`${logoStyle}`]}`}>
                <img src={logo} alt="appleLogo"/>
              </li>
              <li className={`text-base ${styles[`${titleStyle}`]}`}>{title}</li>
            </ul>
          </li>
          <li style={{fontSize: describeStyle, fontWeight: describeWeight}} className={`text-6xl font-semibold leading-tight`}>{describe}</li>
          <li>
            <Link to={url} className={`${styles[`${link}`]} text-lg`}>Shop Now</Link>
          </li>
        </ul>
      </li>
      <li className={`${styles[`half`]} ${classNameImg}`}>
         <img src={src} alt="iphone-14" />
      </li>
    </ul>
  );
};

export default AnnouncementBody;
