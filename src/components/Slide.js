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


// 슬라이드 대표배너
const Slide = () => {
  return (
    <React.Fragment>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {/* elements 폴더 안에 있는 Image의 내용을 map 돌려 붙여넣기 */}
      {Image.map((item) => (
        <SwiperSlide key={item.id}><img src={item.src} alt={item.alt}/></SwiperSlide>
          ))}
      </Swiper>
    </React.Fragment>
  );
}

export default Slide;