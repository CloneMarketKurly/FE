import React from 'react';
import { Image } from "../elements/Index";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../css/styles.css";

// import required modules
import { Navigation } from "swiper";

const Slide = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {Image.map((item) => (
        <SwiperSlide key={item.id}><img src={item.src} alt={item.alt}/></SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default Slide;