import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import React from "react";
import { countries } from "../data";

const Countries = () => {
  return (
    <div className="h-[130vh] w-full bg-gradient-to-b from-[#0ef18d]/15 to-transparent ">
      <Swiper
        spaceBetween={100}
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={2}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        loop={true}
        dots={true}
        pagination={{ clickable: true }}
        className="h-full w-full px-24 pb-36 pt-36"
      >
        {countries.map((c, i) => (
          <SwiperSlide className="rounded-3xl overflow-hidden space-y-5 shadow-lg shadow-[#0ef18d]/40 h-6/7">
            <img src={c.img} alt="" className=" w-full h-3/5" />
            <div className="h-2/3 px-10 flex flex-col gap-5">
              <h1 className="text-4xl font-semibold text-center">
                {c.cnt.toUpperCase()}
              </h1>
              <p className="text-base font-normal text-center">
                {c.description}
              </p>
              <div className="flex items-center justify-between">
                <button className="px-4 py-3 rounded-lg text-white bg-[#0ef18d] hover:bg-[#0ef18d]/70 tranbsition-all duration-300 hover:shadow-md hover:shadow-[#0ef18d]/20">
                  Book Now
                </button>
                <span className="font-semibold text-4xl text-[#2BD2A4]">
                  {c.price}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Countries;
