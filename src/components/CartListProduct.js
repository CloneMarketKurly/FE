import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements/Index";
import { useParams } from "react-router-dom";

const CartListProduct = (props) => {
  console.log(props);
  console.log(props.user);

  const params = useParams();
  console.log(params);
  return (
    <React.Fragment>
      <Grid
        is_flex
        width="100%"
        minHeight="128px"
        borderTop="1px solid #949494"
      >
        <Grid flex_start>
          <BtnCheck></BtnCheck>
          <image src={props.item.image} />
          <Text bold size="15px">
            {props.item.title}
          </Text>
        </Grid>

        <Grid flex_end>
          <SpanBox>
            <BtnMinus onClick={() => {}}></BtnMinus>
            <InputBox>{props.count}</InputBox>
            <BtnPlus onClick={() => {}}></BtnPlus>
          </SpanBox>
          <Text center="right" size="16px" bold width="82px">
            {Number(props.item.price)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            원
          </Text>
          <Del
          // onClick={(e) => {
          //   e.preventDefault();
          //   e.stopPropagation();
          //   dispatch(cartActions.deleteProdDB(props.id));
          // }}
          ></Del>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const BtnCheck = styled.button`
  width: 24px;
  height: 24px;
  max-width: 100%;
  display: inline-block;
  text-align: center;
  text-transform: none;
  background-image: url("https://res.kurly.com/mobile/service/common/2006/ico_checkbox_checked.svg");
  background-size: cover;
  background-position: center;
  background-color: #fff;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  margin: 0 30px 0 0;
  padding: 0;
  &: hover {
    cursor: pointer;
  }
`;

const Del = styled.button`
  width: 30px;
  height: 30px;
  max-width: 100%;
  display: inline-block;
  text-align: center;
  text-transform: none;
  background-image: url("https://res.kurly.com/pc/service/cart/2007/ico_delete.svg");
  background-size: 30px 30px;
  background-position: center;
  background-color: #fff;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  margin: 0 0 0 16px;
  padding: 0;
  &: hover {
    cursor: pointer;
  }
`;

const BtnMinus = styled.button`
  width: 28px;
  height: 28px;
  max-width: 100%;
  display: inline-block;
  text-align: center;
  text-transform: none;
  background-image: url("https://res.kurly.com/pc/ico/2010/ico_minus_on.svg");
  background-size: 30px 30px;
  background-position: center;
  background-color: #fff;
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
  &: hover {
    cursor: pointer;
  }
`;

const BtnPlus = styled.button`
  width: 28px;
  height: 28px;
  max-width: 100%;
  display: inline-block;
  text-align: center;
  text-transform: none;
  background-image: url("https://res.kurly.com/pc/ico/2010/ico_plus_on.svg");
  background-size: 30px 30px;
  background-position: center;
  background-color: #fff;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  &: hover {
    cursor: pointer;
  }
`;

const InputBox = styled.p`
  width: 28px;
  height: 20px;
  margin: 5px 0 0;
  // margin-right: -1px;
  padding: 0;
  border: 0;
  background-color: #fff;
  font-size: 14px;
  color: #000;
  line-height: 18px;
  text-align: center;
  max-width: 100%;
  box-sizing: border-box;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline;
  cursor: text;
`;

const SpanBox = styled.button`
  overflow: hidden;
  display: flex;
  float: left;
  width: 85px;
  height: 30px;
  border: 1px solid #dddfe1;
  border-radius: 3px;
  background-color: #fff;
  color: #333;
  letter-spacing: 0;
  box-sizing: border-box;
  margin: 0 50px 0 0;
  padding: 0;
`;

export default CartListProduct;
