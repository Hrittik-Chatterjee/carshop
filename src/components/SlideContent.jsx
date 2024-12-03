/* eslint-disable react/prop-types */

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../index.css";
import { useState } from "react";

const SlideContent = ({ setShow360 }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 "
      >
        <SwiperSlide>
          <div className="relative text-center">
            <img
              src="/src/assets/carview/car1.avif"
              alt="Car Preview"
              className="w-full rounded-lg shadow-lg"
            />
            <button
              onClick={() => setShow360(true)}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
            >
              View 360 Degree
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-gray-200">
          <img src="/src/assets/carview/car5.avif" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-gray-200">
          <img src="/src/assets/carview/car10.avif" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-gray-200">
          <img src="/src/assets/carview/car15.avif" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-gray-300">
          <img src="src/assets/carview/car20.avif" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-gray-200">
          <img src="/src/assets/carview/car25.avif" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-gray-400">
          <img src="src/assets/carview/car30.avif" alt="" />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center bg-gray-500">
          <img src="src/assets/carview/car35.avif" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-gray-600">
          <img src="src/assets/carview/car40.avif" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-gray-200">
          <img src="/src/assets/carview/car42.avif" alt="" />
        </SwiperSlide>
      </Swiper>

      {/* bottom */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/src/assets/carview/car1.avif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/carview/car5.avif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/carview/car10.avif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/carview/car15.avif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/carview/car20.avif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/carview/car25.avif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/carview/car30.avif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/carview/car35.avif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/carview/car30.avif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/carview/car42.avif" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SlideContent;
