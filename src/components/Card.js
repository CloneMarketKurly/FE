import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

const Card = (props) => {
  // console.log(props.item)

  return (
    <React.Fragment>
      <DivSt
        onClick={() => {
          // CardList에서 props로 넘겨받은 item.id로 상세페이지 이동하기
          history.push(`/detail/${props.item.id}`);
        }}
      >
        <CardSt>
          <ImageSt>
            <img
              style={{ width: "267px", height: "320px" }}
              src={props.item.image}
            />
          </ImageSt>
          <h3 style={{ marginLeft: "4px", fontSize: "16px" }}>
            {props.item.title}
          </h3>
          <span
            style={{ marginLeft: "4px", fontSize: "16px", color: "#FA622F" }}
          >
            7%
          </span>
          &nbsp;
          <span style={{ marginLeft: "4px", fontSize: "16px" }}>
            {" "}
            {Number(props.item.price)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            원
          </span>
        </CardSt>
      </DivSt>
    </React.Fragment>
  );
};

const DivSt = styled.div`
  width: 68%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

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
`;

const ImageSt = styled.div`
  /* background-color: yellow; */
  width: 100%;
  height: 320px;
  margin: auto;
`;

export default Card;
