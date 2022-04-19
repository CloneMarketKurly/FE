import React from 'react';
import styled from 'styled-components';
import Slide from '../components/Slide';
import CardList from '../components/CardList';
import { useDispatch } from 'react-redux';
import { actionCreators as postActions } from "../redux/modules/post";

const Main = (props) => {
  const dispatch = useDispatch();

  // 메인페이지 로드
  React.useEffect(() => {
    dispatch(postActions.getPostAC());
  }, []);

  return (
    <React.Fragment>
      <Slide/>
      <BackSt>
        <CardList/>
      </BackSt>
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

export default Main;