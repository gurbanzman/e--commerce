import home from "../../../../../../assets/home.png";
import ShoppingBag from "../../../../../../assets/Icon-Shopping bag.png";
import FeaturesBlockCart from "../block-cart";

const FooterFeauturesCarts = () => {
  return (
    <ul className="flex justify-between">
      <FeaturesBlockCart imgURL={home} title={`FREE AND FAST DELIVERY`} desc={`Free delivery for all orders over $140`} width={`27%`}/>
      <FeaturesBlockCart imgURL={home} title={`10.5k `} desc={`Sallers active our site`} width={`27%`}/>
      <FeaturesBlockCart imgURL={ShoppingBag} title={`10.5k `} desc={`Sallers active our site`} width={`27%`}/>
    </ul>
  );
};

export default FooterFeauturesCarts;
