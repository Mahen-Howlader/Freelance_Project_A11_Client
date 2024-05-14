import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function Banner() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[40vh] md:h-[50vh] lg:h-[80vh] rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] mt-5 "
      >
        <SwiperSlide>
          <img
            className="rounded-lg h-full w-full    overflow-hidden "
            src="https://i.ibb.co/mNVgY6s/5341942.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-lg h-full w-full    overflow-hidden "
            src="https://i.ibb.co/GVMPvyt/5324682.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-lg h-full w-full    overflow-hidden "
            src="https://i.ibb.co/QdQzw9V/6017748.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-lg h-full w-full    overflow-hidden "
            src="https://i.ibb.co/TtGNhsg/5177890.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-lg h-full w-full    overflow-hidden "
            src="https://i.ibb.co/k2rMhTS/9683568.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
