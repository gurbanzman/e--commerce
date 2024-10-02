import Logo from "../../custom/ui/logo";
import styles from "./style.module.css";
import {Bar, BreadCrumbs, EndMenu, FootBar, Menu, SearchUser} from "../../custom/layouts/index";

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
