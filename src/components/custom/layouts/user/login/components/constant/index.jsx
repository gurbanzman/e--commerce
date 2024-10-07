import Title from "../../../../../ui/title";
import image from "../../../../../../../assets/lgin-image.png";
import styles from "./style.module.css";

const ConstantLoginWebPage = ({ title, desc, children, sectionClass }) => {
  return (
    <section className={sectionClass}>
      <div className="w-[90%] flex flex-row items-center justify-between">
        <div className="w-3/5">
          <img src={image} alt="image.png" />
        </div>
        <div className="w-1/4">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <Title title={title} className={styles[`style-title`]}/>
              <Title title={desc} className={styles[`style-desc`]}/>
            </div>
            <form>{children}</form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ConstantLoginWebPage;
