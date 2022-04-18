import React from 'react'
import styled from 'styled-components'

const FixedCard = (props) => {

  // console.log(props.item)
  
  return (
    <React.Fragment>
      <DivSt>
        <CardSt>
          <ImageSt>
            <img style={{width: "267px", height: "320px"}}  src={props.item.src}/>
          </ImageSt>
          <h3 style={{marginLeft: "4px", fontSize: "16px"}}>{props.item.alt}</h3>
          <span style={{marginLeft: "4px", fontSize: "16px", color: "#FA622F"}}>{props.item.sale}</span>
          <span style={{marginLeft: "4px", fontSize: "16px"}}>{props.item.price}원</span>
        </CardSt>
      </DivSt>
    </React.Fragment>
  )
}

const DivSt = styled.div`
  width: 68%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;

`

const CardSt = styled.div`
  /* background-color: gray; */
  width: 267px;
  height: 411px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0px 9px;
  background-repeat: no-repeat;
  background-size: cover;
`

const ImageSt = styled.div`
  /* background-color: yellow; */
  width: 100%;
  height: 320px;
  margin: auto;
`


export default FixedCard;