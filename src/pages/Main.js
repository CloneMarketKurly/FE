import React from 'react';
import styled from 'styled-components';
import Slide from '../components/Slide';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MiddleBanner from '../components/MiddleBanner';
import BottomBanner from '../components/BottomBanner';
import Card from '../components/Card';

const Main = () => {
  return (
    <React.Fragment>
      <Header/>
      <Slide/>
      <Card/>
      <MiddleBanner/>
      <Div/>
      <BottomBanner/>
      <Div/>
      <Footer/>
    </React.Fragment>
  )
}

const Div = styled.div`
  height: 500px;
`

export default Main;