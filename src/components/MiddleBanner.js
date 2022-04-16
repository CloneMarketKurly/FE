import React from 'react'
import styled from "styled-components";

const MiddleBanner = (props) => {
  return (
    <React.Fragment>
      <Wrap>
        <A >
         <img src="https://img-cf.kurly.com/banner/random-band/pc/img/ebd3f62c-60f2-4d2f-8f45-1ba47f9985eb"/>
        </A>
      </Wrap>
    </React.Fragment>
  )
}

// MiddleBanner.defaultProps = {
//   Img: "https://img-cf.kurly.com/banner/random-band/pc/img/ebd3f62c-60f2-4d2f-8f45-1ba47f9985eb"
// }

const Wrap = styled.div`
  width: 1050px;
  margin: 50px auto;
`
const A = styled.div`
  position: relative;
    display: block;
    height: 140px;
    overflow: hidden;
    & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: top;
    max-width: 100%;
    }
`


export default MiddleBanner;