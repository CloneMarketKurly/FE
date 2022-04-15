import React from 'react';
import Grid from '../elements/Grid';
import styled from 'styled-components';

const Footer = () => {
  return (
    <React.Fragment>
      <hr style={{width: "98%", border: "1px solid lightgray"}}/>
      <Grid>
        <GridSt>
          <WrapSt>
            <p style={{fontSize: "20px", fontWeight: "bold"}}>고객 행복 센터</p>
            <p style={{fontSize: "40px", fontWeight: "bold"}}>1644-1107</p>
            <p>고객 행복 ㅇㅇ</p>
          </WrapSt>
          <WrapSt>
            <UlSt>
              <li>컬리소개</li>
              <li>컬리소개영상</li>
              <li>인재채용</li>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>이용안내</li>
            </UlSt>
            <p style={{fontSize: "20px", fontWeight: "bold"}}>고객 행복 센터</p>
            <p style={{fontSize: "40px", fontWeight: "bold"}}>1644-1107</p>
            <UlSt1>
              <li><img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt="마켓컬리 인스타그램 바로가기"/></li>
              <li><img src="https://res.kurly.com/pc/ico/1810/ico_fb.png" alt="마켓컬리 페이스북 바로가기"/></li>
              <li><img src="https://res.kurly.com/pc/ico/1810/ico_blog.png" alt="마켓컬리 블로그 바로가기"/></li>
              <li><img src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt="마켓컬리 포스트 바로가기"/></li>
              <li><img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt="마켓컬리 유튜브 바로가기"/></li>
              
            </UlSt1>
          </WrapSt>
        </GridSt>
      </Grid>
    </React.Fragment>
  )
}

const GridSt = styled.div`
  background-color: green;
  width: 98%;
  display: flex;
  flex-direction: row;
`

const WrapSt = styled.div`
  background-color: yellow;
  width: 850px;
  height: 500px;
  margin: auto;
`

const UlSt = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px;
  padding-bottom: 2px;
  height: 33px;
  list-style-type: none;
`

const UlSt1 = styled.ul`
  display: flex;
  align-items: center;
  justify-content: left;
  /* margin: 2px; */
  padding: 0px;
  padding-bottom: 2px;
  height: 33px;
  list-style-type: none;

  & li {
    margin-right: 5px;
  }
`
export default Footer;