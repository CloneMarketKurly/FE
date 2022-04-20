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
      <Div1>인스타그램 고객 후기<br/>
        <span style={{fontSize: "17px", color: "gray", marginTop: "15px"}}>더 많은 고객 후기가 궁금하다면?</span>
      </Div1>
      <Div2>
        <img style={{width: "175px"}} src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/278200702_1215217722344259_2681432098919205206_n.webp?stp=dst-jpg&_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=I-4v6PzLyIoAX-dw6nc&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9x7fBZ2Ck587SnY6ojfQKKes-4E7ohtvxsQwR00HOM7w&oe=6265289A"/>
        <img style={{width: "175px"}} src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/278267595_719092682593364_9182589427281290481_n.webp?stp=dst-jpg&_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=c3WJlgLD0mUAX87Vj2p&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-SZikmxSejdTTchKRcGFKPRhpDcuPUtgzjpE1BVLJw0A&oe=62646C2A"/>
        <img style={{width: "175px"}} src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/277855206_693803458429263_5082052641160384275_n.webp?stp=dst-jpg&_nc_cat=104&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=gCvjrY8F5wkAX_LhyeT&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-ko4zmTmyJotybTRPyGNsBO5U2M8Eds8-jTMeLpxo67w&oe=62654A9D"/>
        <img style={{width: "175px"}} src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/277627413_708185903691921_7562017771015166186_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=urSlbmo6nxUAX-pZK5L&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8moCwt-n1sWd7Y42URNlfNCPsDDjd-UJjxnK-NcWzGHg&oe=6263FC8B"/>
        <img style={{width: "175px"}} src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/277030649_354979973197770_5167171467336248002_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=bHxOgMh43jQAX-ujaHn&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-37PZ5W1wMfzTBI8Mh6CqX6JZ-PkYk5SyhW4RlprMYoQ&oe=6264E5EB"/>
        <img style={{width: "175px"}} src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/275942525_496775435220230_3074809998731067579_n.webp?stp=dst-jpg&_nc_cat=100&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=bTF7RvyWkzUAX9rwnky&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8bad8ccQ7SiTJQEBn02rauoGa8msp3WZgeMVi2zwfmiw&oe=62643FA6"/>
      </Div2>
      <Div1>
        <span style={{fontSize: "17px", color: "gray", marginTop: "15px", marginBottom: "-50px"}}>더 많은 고객 후기가 궁금하다면?</span><br/>
        <span style={{fontSize: "15px", color: "black", marginTop: "15px", marginBottom: "80px"}} >@marketkurly_regram</span>
      </Div1>
    </React.Fragment>
  )
}

const DivSt = styled.div`
  width: 68%;
  margin: auto;
  display: flex;
  flex-direction: row;
  font-family: 'Noto Sans KR', sans-serif;
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
  font-family: 'Noto Sans KR', sans-serif;
`

const Div1 = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-bottom: -30px;
  font-family: 'Noto Sans KR', sans-serif;
`

const Div2 = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-top: 60px;
  margin-bottom: 20px;
  font-family: 'Noto Sans KR', sans-serif;
`

export default FixedImg