import React from 'react'
import styled from 'styled-components';
import Card from '../components/Card';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import mainImg from '../elements/MainImg'
import MiddleBanner from '../components/MiddleBanner';

// Import Swiper styles
// import "swiper/css";
import "swiper/css/navigation";
import "../css/swiperCss.css";

const FixedImg = (props) => {
  return (
    <React.Fragment>
        <Div>이 상품 어때요?</Div>
          <Swiper
            slidesPerView={4}
            spaceBetween={0}
            slidesPerGroup={4}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
          <DivSt>
            {mainImg.map((item) => (
            <SwiperSlide key={item.id}><Card key={item.id} item={item}/></SwiperSlide>
            ))}
          </DivSt>
        </Swiper>
        
        <MiddleBanner/>

        <Div>놓치면 후회할 가격 > </Div>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
        <DivSt>
          {mainImg.map((item) => (
          <SwiperSlide key={item.id}><Card key={item.id} item={item}/></SwiperSlide>
          ))}
        </DivSt>
        </Swiper>

        <Div>고객 반응으로 입증된 신상품 ><br/>
          <span style={{fontSize: "17px", color: "gray", marginTop: "15px"}}>최근 한달 간 장바귀니에 많이 담겼어요</span>
        </Div>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
        <DivSt>
          {mainImg.map((item) => (
          <SwiperSlide key={item.id}><Card key={item.id} item={item}/></SwiperSlide>
          ))}
        </DivSt>
        </Swiper>

    </React.Fragment>
  )
}

const BackSt = styled.div`
  width: 1100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
`
const DivSt = styled.div`
  width: 68%;
  margin: auto;
  display: flex;
  flex-direction: row;
`

const Div = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-top: 60px;
  margin-bottom: 20px;
`

export default FixedImg