import CustomCheckbox from "../../../ui/checkbox";
import console from "../../../../../assets/konsol.png";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
const CategoryCarts = ({ oldPrice, newPrice, head, degree, count, time }) => {
  const isCurrentTime = new Date(time).getTime() === new Date().getTime();

  return (
    <div className="cart relative">
      <Link className={`flex flex-col gap-4 ${styles[`category-section`]}`}>
        <div className={`p-3 ${styles[`category-head`]}`}>
          <div className="py-9 px-10 z-10">
            <div className={`py-3 px-2 ${styles[`logo`]}`}>
              <img src={console} alt="console" />
            </div>
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li className="text-lg font-medium">{head}</li>
            <li>
              <ul className="flex flex-row gap-3">
                <li className={`${styles[`price`]}`}>${newPrice}</li>
                {newPrice - oldPrice == 0 ? (
                  ""
                ) : (
                  <li className={`${styles[`price-later`]}`}>${+oldPrice}</li>
                )}
              </ul>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <ul className="flex flex-row">
                <li className="icon-star p-1 text-amber-400 text-xl"></li>
                <li className="icon-star p-1 text-amber-400 text-xl"></li>
                <li className="icon-star p-1 text-amber-400 text-xl"></li>
                <li className="icon-star p-1 text-amber-400 text-xl"></li>
                <li className="icon-star p-1 text-amber-400 text-xl"></li>
              </ul>
              <span className="text-black opacity-50 font-semibold">(88)</span>
            </li>
          </ul>
        </div>
        {isCurrentTime ? (
          <p
            className={`absolute left-2 top-3 py-1 px-3 rounded ${
              styles[`new`]
            }`}
          >
            {" "}
            New
          </p>
        ) : (
          <p
            className={`absolute left-2 top-3 py-1 px-3 rounded ${
              styles[`percent`]
            }`}
          >
            {" "}
            {newPrice > oldPrice
              ? "+" + Math.round((Number(newPrice) * 100) / oldPrice)
              : "-" + Math.round((Number(newPrice) * 100) / oldPrice)}
            %{" "}
          </p>
        )}
        <ul className={`flex flex-col gap-2 fixed right-2 top-3 z-50`}>
          <li>
            <CustomCheckbox
              className={`likes`}
              handleChangeCheckbox={() => alert("murad")}
            />
          </li>
          <li>
            <CustomCheckbox className={`eyes`} />
          </li>
        </ul>
      </Link>
      <ul className={`flex flex-col gap-2 fixed right-2 top-3 z-50`}>
        <li>
          <CustomCheckbox
            className={`likes`}
            handleChangeCheckbox={() => alert("murad")}
          />
        </li>
        <li>
          <CustomCheckbox className={`eyes`} />
        </li>
      </ul>
    </div>
  );
};

export default CategoryCarts;
