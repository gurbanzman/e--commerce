import home from "../../../../../../assets/home.png";
import ShoppingBag from "../../../../../../assets/Icon-Shopping bag.png";
import FeaturesBlockCart from "../block-cart";

const HeaderFeauturesCarts = () => {
  return (
    <ul className="flex justify-between">
     <FeaturesBlockCart imgURL={home} title={`10.5K`} desc={`Sallers active our site`} className={`cart-block`}/>
     <FeaturesBlockCart imgURL={ShoppingBag} title={`33K`} desc={`Mopnthly Produduct Salee`} className={`cart-block`}/>
     <FeaturesBlockCart imgURL={home} title={`45.5K`} desc={`Customer active in our site`} className={`cart-block`}/>
     <FeaturesBlockCart imgURL={home} title={`25K`} desc={`Anual gross sale in our site`} className={`cart-block`}/>
    </ul>
  );
};

export default HeaderFeauturesCarts;
