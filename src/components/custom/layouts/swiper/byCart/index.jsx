import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import CategoryCarts from "../../cart/category";
import SkeletonLoading from "../../../ui/skeleton";

const SwiperSliderByCart = ({
  spaceBetween,
  slidesPerView,
  navigation,
  swiperRef,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={navigation}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      <SwiperSlide>
        <CategoryCarts
          oldPrice={300}
          newPrice={100}
          time={new Date('2024-09-30T20:46:00')}
          head={`HAVIT HV-G92 Gamepad`}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSliderByCart;
