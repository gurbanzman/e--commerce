import Logo from "../../custom/ui/logo";
import Menu from "../../custom/layouts/menu";
import SearchUser from "../../custom/layouts/search-user";
import EndMenu from "../../custom/layouts/end-menu";
import styles from "./style.module.css";
import Bar from "../../custom/layouts/bar";
import FootBar from "../../custom/layouts/foot-bar";

const MenuBar = () => {
  return (
    <nav className={styles[`navbar`]}>
      <section className={`flex items-center justify-between relative container ${styles[`navbar-section`]}`}>
        <Logo logo={`Exclusive`} />
        <Menu />
        <div className="flex items-center gap-6 bar-full w-full justify-end">
          <SearchUser />
          <EndMenu />
        </div>
        <Bar />
        <FootBar />
      </section>
    </nav>
  );
};

export default MenuBar;
