import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';


const MiddleHeader = () => {
  return (
    <React.Fragment>
      <Wrap>
        <div>상품설명</div>
        <div>상세정보</div>
        <Link to="1" spy={true} smooth={true}>
          <div>후기</div>
        </Link>
        <div>문의</div>
      </Wrap>
    </React.Fragment>
  )
}

const Wrap = styled.div`
  /* background-color: yellow; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 240px;
    height: 40px;
    border: 1px solid #EEEEEE;
    text-align: center;
    background-color: #FAFAFA;
    color: #666666;
    font-size: 16px;
  }

  & div:hover {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 240px;
    height: 40px;
    border: 1px solid #EEEEEE;
    border-bottom: none;
    text-align: center;
    background-color: white;
    color: purple;
    font-size: 16px;
  }
`

export default MiddleHeader