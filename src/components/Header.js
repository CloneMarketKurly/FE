import React from 'react';
import styled from 'styled-components';
import { Grid, Button, Text } from '../elements/Index';
import { BsList, BsCart2, BsHeart, BsGeoAlt, BsSearch } from 'react-icons/bs'

const Header = () => {
  return (
    <React.Fragment>
      <Grid width="auto" is_flex>
        <HeaderSt>
          <BodySt>
            <TextSt>
              <Text color="purple">샛별/택배</Text>
              <Text color="black">배송안내 ></Text>
            </TextSt>
            <TextSt>
              <Text color="purple">회원가입 |</Text>
              <Text color="black">&nbsp;로그인 |</Text>
              <Text color="black">&nbsp;고객센터▼</Text>
            </TextSt>
          </BodySt>
          <ImgSt>
            <div>
              <img src='/img/kurly.png'/>
            </div>
          </ImgSt>
          <BottomSt>
            <BsList style={{margin: "0px 0px 0px 20px"}}/>
            <li>전체 카테고리</li>
            <li>신상품</li>
            <li>베스트</li>
            <li>알뜰쇼핑 </li>
            <li> 특가/혜택</li>
            <SearchWrap>
              <Search placeholder="검색어를 입력해주세요."></Search>
              <SearchIcon/>
            </SearchWrap>
            <div>
              <BsGeoAlt style={{margin: "4px 10px 0px 10px"}}/>
              <BsHeart style={{margin: "5px 0px 0px 10px"}}/>
              <BsCart2 style={{margin: "0px 0px 2px 20px"}}/>
            </div>
          </BottomSt>
        </HeaderSt>
      </Grid>
    </React.Fragment>
  )
}

const HeaderSt = styled.div`
  width: 1500px;
  margin: auto;
`

const BodySt = styled.div`
  width: 98.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 10px 0px 10px;
`

const ImgSt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & div {
    width: 7%;
  }
`
const SearchWrap = styled.div`
  position: relative;
`;

const Search = styled.input`
  background-color: #f7f7f7;
  background-image: "https://res.kurly.com/pc/service/common/1908/ico_search_x2.png";

  box-sizing: border-box;
  border: 1px solid #f7f7f7;
  border-radius: 50px;
  outline: none;

  width: 235px;
  height: 35px;
  padding: 0 60px 0 14px;
  margin-bottom: 2px;
  margin-left: -31px;

  letter-spacing: -1px;
  font-family: "Noto Sans";
  font-weight: 400;
  font-size: 12px;
  color: #666;
  line-height: 16px;
`;

const SearchIcon = styled.div`
  background-image: url(https://res.kurly.com/pc/service/common/1908/ico_search_x2.png);
  background-size: 30px;
  position: absolute;
  right: 5px;
  top: 3px;
  width: 30px;
  height: 30px;
`;

const TextSt = styled.div`
  /* width: 18%; */
  display: flex;
  flex-direction: row;
    
`

const BottomSt = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  padding-bottom: 2px;
  height: 33px;
  cursor: pointer;
  list-style-type: none;

  & li {
    padding: 7px 57px 0px 0px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: #333;
    line-height: 20px;
    &:hover {
      color: purple;
      text-decoration: underline;
    }
  }
  
  /* & .all-category::before {
    content: url("https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off.png")
      no-repeat;
    position: relative;
    top: 2px;
    margin-right: 10px;
  } */
`;


export default Header;