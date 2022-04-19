import React, { useState } from 'react'
import styled from 'styled-components';
import Card from '../components/Card';
import FixedCard from './FixedCard';
import { useDispatch, useSelector } from 'react-redux';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import mainImg from '../elements/MainImg'
import MiddleBanner from '../components/MiddleBanner';
import BottomBanner from '../components/BottomBanner';

// Import Swiper styles
// import "swiper/css";
import "swiper/css/navigation";
import "../css/swiperCss.css";


// 카드 리스트 + 아래쪽 카드 고정값
const FixedImg = (props) => {

  // 리덕스에 저장된 post를 가져온다
  const all_list = useSelector((state) => state.post.post)

  return (
    <React.Fragment>
      <Div>이 상품 어때요?</Div>
      <Swiper
        // 카드를 보여주는 개수
        slidesPerView={4}
        // 카드 사이 공백
        spaceBetween={0}
        slidesPerGroup={4}
        // 무한 루프를 돌릴 것인지
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* all_list 안에 있는 정보들을 map 돌려 붙여넣기 */}
        <DivSt>
          {all_list.map((item, idx) => (
          <SwiperSlide key={item.id}><Card item={item}/></SwiperSlide>
          ))}
        </DivSt>
      </Swiper>
      
      {/* 중간배너 */}
      <MiddleBanner/>

      {/* 여기서부터 고정값 */}
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
          {/* 지금 현재는 mainImg 안에 있는 정보들을 map 돌려 붙여넣기 */}
          {mainImg.map((item) => (
          <SwiperSlide key={item.id}><FixedCard key={item.id} item={item}/></SwiperSlide>
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
          {/* 지금 현재는 mainImg 안에 있는 정보들을 map 돌려 붙여넣기 */}
          {mainImg.map((item) => (
          <SwiperSlide key={item.id}><FixedCard key={item.id} item={item}/></SwiperSlide>
          ))}
        </DivSt>
      </Swiper>
      <BottomBanner/>

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