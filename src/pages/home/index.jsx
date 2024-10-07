import ConstantPage from "../../components/constant";
import {
  AnnouncementBody,
  BreadCrumbs,
  SideBarMenu,
  SwiperSliderByCart,
  WallPaper,
} from "../../components/custom/layouts/index";
import logo from "../../assets/apple-logo.png";
import iphone from "../../assets/iphone-14.png";
import styles from "./style.module.css";
import SwiperCustomButton from "../../components/custom/layouts/swiper/button";
import { useCallback, useRef } from "react";
import Constant from "../../components/custom/ui/constant";
import Title from "../../components/custom/ui/title";
import ViewAllDatasByButtonLink from "../../components/custom/ui/button/link/view";
import Collection from "../../components/custom/layouts/announcement/collection";
import FooterFeauturesCarts from "../../components/custom/layouts/cart/features/footer";
import UserEditForm from "../../components/custom/layouts/user/edit/form";
import UserSign from "../../components/custom/layouts/user/login";

const Home = () => {
  const handleClickNextSlideBtn = useCallback((ref) => {
    ref.current.slideNext();
  });
  const handleClickPrevSlideBtn = useCallback((ref) => {
    ref.current.slidePrev();
  });
  const swiperRef = useRef(null);
  return (
    <ConstantPage title={<BreadCrumbs />}>
      <section className={`container ${styles[`sidebar_section`]} flex`}>
        <div className={styles[`sidebar`]}>
          <div className={styles[`sidebar-menu_section`]}>
            <SideBarMenu />
          </div>
        </div>
        <div className={`w-full ${styles[`announcement-section`]}`}>
          <WallPaper>
            <AnnouncementBody
              logo={logo}
              title={`iPhone 14 Series`}
              describe={`Up to 10% off Voucher`}
              link={`link`}
              src={iphone}
            />
          </WallPaper>
        </div>
      </section>
      <section className={`${styles[`mt-10`]}`}>
        <div className="container">
          <div className="flex items-center justify-between">
            <Constant head={`Today's`} />
            <ul className="flex gap-3">
              <li>
                <SwiperCustomButton
                  handleClick={() => handleClickPrevSlideBtn(swiperRef)}
                  className={`left`}
                />
              </li>
              <li>
                <SwiperCustomButton
                  handleClick={() => handleClickNextSlideBtn(swiperRef)}
                  className={`right`}
                />
              </li>
            </ul>
          </div>
          <div className="my-6">
            <Title title={`Flash Sales`} />
          </div>
          <div>
            <SwiperSliderByCart
              spaceBetween={50}
              slidesPerView={3}
              swiperRef={swiperRef}
            />
            <div className="mt-16 text-center">
              <ViewAllDatasByButtonLink title="Products" />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="container">
          <div>
            <Constant head={`Featured`} />
          </div>
          <div className="mt-5 mb-16">
            <Title title={`New Arrival`} />
          </div>
          <div>
            <Collection />
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="container">
          <div className="container">
            <FooterFeauturesCarts />
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="container">
          <UserEditForm />
        </div>
      </section>
      <UserSign />
    </ConstantPage>
  );
};

export default Home;
