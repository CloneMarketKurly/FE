import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements/Index";
import { BsList, BsCart2, BsHeart, BsGeoAlt } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { getCookie } from "../shared/Cookie";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux/modules/user";
import "../App.css";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // 리덕스에 저장된 유저 정보 가져오기, 근데 여기서는 사용하지 않음
  const _user = useSelector((state) => state.user.user);

  // 로그인 확인을 위함
  const is_login = getCookie("is_login");
  const is_token = getCookie("Authorization");

  // 메뉴 토글 오픈
  const [isOpen, setMenu] = React.useState(false);  // 메뉴의 초기값을 false로 설정해줌
  
  const toggleMenu = () => {
      setMenu(isOpen => !isOpen);
    }

  if (is_login && is_token) {
    const userName = getCookie("userName");
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
                <Text color="black">
                  <b>{userName}</b>님 환영합니다! |
                </Text>
                <Text
                  color="black"
                  onClick={() => {
                    dispatch(actionCreators.logoutDB());
                  }}
                >
                  &nbsp;로그아웃 |
                </Text>

                <Text color="black">&nbsp;고객센터 ▼</Text>
              </TextSt>
            </BodySt>
            <ImgSt>
              <div>
                <img style={{width : "103px"}}
                  onClick={() => {
                    history.push("/");
                  }}
                  src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png"
                />
              </div>
            </ImgSt>
            <BottomSt>
              <BsList onClick={toggleMenu} style={{ margin: "0px 0px 0px 20px" }} />
              <li>전체 카테고리</li>
              <li>신상품</li>
              <li>베스트</li>
              <li>알뜰쇼핑 </li>
              <li> 특가/혜택</li>
              <SearchWrap>
                <Search placeholder="검색어를 입력해주세요."></Search>
                <SearchIcon />
              </SearchWrap>
              <div>
                <BsGeoAlt style={{ margin: "4px 10px 0px 10px" }} />
                <BsHeart style={{ margin: "5px 0px 0px 10px" }} />
                <BsCart2 style={{ margin: "0px 0px 2px 20px" }} />
              </div>

              {/* 삼항연산자 true 일 때 클래스명 show-menu, false일때 hide-menu */}
              <ul className={isOpen ? "show-menu" : "hide-menu"}> 
                <div >채소</div>
                <div >과일·견과·쌀</div>
                <div >수산·해산·건어물</div>
                <div >정육·계란</div>
                <div >국·반찬·메인요리</div>
                <div >샐러드·간편식</div>
                <div >면·양념·오일</div>
                <div >생수·음료·우유·커피</div>
                <div >간식·과자·떡</div>
                <div >베이커리·치즈·델리</div>
                <div >건강식품</div>
                <div >와인</div>
              </ul>
            </BottomSt>
          </HeaderSt>
        </Grid>
        <Grid margin="50px" />
      </React.Fragment>
    );
  }

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
              <Text
                onClick={() => {
                  history.push("/signup");
                }}
                color="purple"
              >
                회원가입 |
              </Text>
              <Text
                onClick={() => {
                  history.push("/login");
                }}
                color="black"
              >
                &nbsp;로그인 |
              </Text>
              <Text color="black">&nbsp;고객센터▼</Text>
            </TextSt>
          </BodySt>
          <ImgSt>
            <div>
              <img style={{width : "103px"}}
                onClick={() => {
                  history.push("/");
                }}
                src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png"
              />
            </div>
          </ImgSt>
          <BottomSt>
            <BsList onClick={toggleMenu} style={{ margin: "0px 0px 0px 20px" }} />
            <li>전체 카테고리</li>
            <li>신상품</li>
            <li>베스트</li>
            <li>알뜰쇼핑 </li>
            <li> 특가/혜택</li>
            <SearchWrap>
              <Search placeholder="검색어를 입력해주세요."></Search>
              <SearchIcon />
            </SearchWrap>
            <div>
              <BsGeoAlt style={{ margin: "4px 10px 0px 10px" }} />
              <BsHeart style={{ margin: "5px 0px 0px 10px" }} />
              <BsCart2 style={{ margin: "0px 0px 2px 20px" }} />
            </div>

              {/* 삼항연산자 true 일 때 클래스명 show-menu, false일때 hide-menu */}
              <ul className={isOpen ? "show-menu" : "hide-menu"}> 
                <div >채소</div>
                <div >과일·견과·쌀</div>
                <div >수산·해산·건어물</div>
                <div >정육·계란</div>
                <div >국·반찬·메인요리</div>
                <div >샐러드·간편식</div>
                <div >면·양념·오일</div>
                <div >생수·음료·우유·커피</div>
                <div >간식·과자·떡</div>
                <div >베이커리·치즈·델리</div>
                <div >건강식품</div>
                <div >와인</div>
              </ul>
          </BottomSt>
        </HeaderSt>
      </Grid>
      <Grid margin="50px" />
    </React.Fragment>
  );
};

const HeaderSt = styled.div`
  width: 1500px;
  margin: auto;
  font-family: 'Noto Sans KR', sans-serif;
`;

const BodySt = styled.div`
  width: 98.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 10px 0px 10px;
`;

const ImgSt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & div {
    width: 7%;
  }
`;
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
`;

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
`;

export default Header;
