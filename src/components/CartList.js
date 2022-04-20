import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements/Index";
import { useHistory } from "react-router-dom";
import Modal from "./Address";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/cart";
import CartListProduct from "./CartListProduct";

const CartList = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(actionCreators.getCartDB());
  }, []);
  //주문한 내용 장바구니에 겟헤오기
  const item_list = useSelector((state) => state.cart.item.buyItemList);
  console.log(item_list);

  const [modal, setModal] = useState(false);
  const [address, setAddress] = useState("검색하고 배송유형 확인하자!");
  const [price, setPrice] = useState("");

  return (
    <>
      <Text bold size="28px" margin="20px">
        장바구니
      </Text>
      {/* 장바구니 물건 리스트 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          width="720px"
          borderBottom="1px solid #f2f2f2"
          borderTop="1px solid #f2f2f2"
          margin="20px"
        >
          {item_list &&
            item_list.map((p, ix) => {
              return (
                <CartListProduct
                  key={ix}
                  {...p}
                  user={p.user}
                  price={price}
                  setPrice={setPrice}
                />
              );
            })}
        </Grid>
        {/* 배송지 나오는 부분 */}

        <Grid width="290px">
          <Grid
            padding="23px 19px 20px"
            // width="100%"
            // height="200px"
            // borderBottom="1px solid #f2f2f2"
            // borderTop="1px solid #f2f2f2"
            // borderLeft="1px solid #f2f2f2"
            // borderRight="1px solid #f2f2f2"
          >
            <Grid height="26px">
              <Map />
              <Text size="16px" bold>
                배송지
              </Text>
            </Grid>
            <Text margin="0" bold size="16px">
              {address}
            </Text>
            <BtnAddress>
              <Text
                margin="0"
                color="#5F0080"
                size="12px"
                bold
                onClick={() => {
                  setModal(!modal);
                }}
              >
                주소 검색
              </Text>
              {modal === true ? (
                <Modal address={address} setAddress={setAddress} />
              ) : null}
            </BtnAddress>
          </Grid>
          <Grid
            bg="#fafafa"
            padding="9px 18px 18px 20px"
            width="100%"
            height="226px"
            borderBottom="1px solid #f2f2f2"
            borderLeft="1px solid #f2f2f2"
            borderRight="1px solid #f2f2f2"
          >
            <Grid is_flex height="40px" padding="9px 0 0">
              <Text size="16px">상품금액</Text>
              <Text size="16px">{price}원</Text>
            </Grid>
            <Grid is_flex height="40px" padding="9px 0 0">
              <Text size="16px">상품할인금액</Text>
              <Text size="16px">0원</Text>
            </Grid>
            <Grid is_flex height="40px" padding="9px 0 0">
              <Text size="16px" margin="0">
                배송비
              </Text>
              <Text size="16px" margin="0">
                +3,000원
              </Text>
            </Grid>
            <Grid
              is_flex
              height="40px"
              padding="30px 0 0"
              margin="20px 0 0"
              borderTop="1px solid #f2f2f2"
            >
              <Text size="16px">결제예정금액</Text>
              <Text size="16px" bold>
                +3,000원 원
              </Text>
            </Grid>
          </Grid>
          <OrderBox>
            <BtnOrder
              onClick={() => {
                alert("주문이 완료되었습니다!!:)");
                history.push("/");
              }}
            >
              <Text bold size="16px" color="#fff">
                주문하기
              </Text>
            </BtnOrder>
            <Grid padding="34px 0 0">
              <Text size="12px" color="#505152" margin="0 0 8px">
                - '입금확인' 상태일 때는 주문 내역 상세에서 직접 주문취소가
                가능합니다.
              </Text>
              <Text size="12px" color="#505152" margin="0 0 16px">
                - '입금확인' 이후 상태에는 고객센터로 문의해주세요.
              </Text>
            </Grid>
          </OrderBox>
        </Grid>
      </div>
    </>
  );
};

const BtnOrder = styled.button`
  width: 100%;
  height: 56px;
  margin: 20px 0 0;
  background-color: #5f0081;
  border: 1px solid #5f0081;
  border: 0;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  max-width: 100%;
  overflow: visible;
`;
const OrderBox = styled.div`
  width: 285px;
  position: relative;
  left: 12px;
`;
const Map = styled.div`
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  background-image: url("https://res.kurly.com/pc/ico/2008/ico_delivery_setting.svg?ver=1");
  background-size: cover;
  background-position: center;
`;

const BtnAddress = styled.button`
  width: 100%;
  height: 36px;
  size: 12px;
  margin: 17px 0 0;
  color: #5f0080;
  background: #ffffff;
  border: 1px solid #5f0080;
  border-radius: 4px;
  cursor: pointer;
`;

export default CartList;
{
  /* <Grid margin="0 auto" width="1035px" borderBottom="1px solid #f2f2f2"></Grid> */
}
