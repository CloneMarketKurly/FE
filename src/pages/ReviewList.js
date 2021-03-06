import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import ReviewDetail from "./ReviewDetail";
import { getCookie } from "../shared/Cookie";

// 리덕스관련
import { useSelector } from "react-redux";

const ReviewList = (props) => {
  const is_token = getCookie("Authorization") 
  const history = useHistory();

  // itemId는 Detail 페이지에서 넘겨받은 props의 itemId
  const itemId = props.itemId;

  // 리덕스에 저장된 상세페이지 가져오기
  const detail_post = useSelector((state) => state.post.detail_post);
  
  // 서버에서 댓글 정보를 보낼 때 상세페이지 로드에 같이 담아 보내줬기 때문에 detail_post에서 꺼내쓴다.
  // review는 리뷰정보들
  const review = detail_post.comments

  const wirte = () => {
    if (!is_token) {
      window.alert("상품후기는 상품을 구매하시고 배송완료된 회원 분만 한 달 내 작성 가능합니다.")
      return;
    } else {
      history.push(`/reviewWrite/${itemId}`);
    }
  }


  return (
    <>
      <CommentListWrap id="1">
        <CommentTitle>PRODUCT REVIEW</CommentTitle>
        <CommentInfo>
          <li>
            <div
              style={{
                width: "4px",
                height: "4px",
                margin: "7px 8px 0 0",
                backgroundColor: "#514859",
                verticalAlign: "2px",
              }}
            ></div>
            상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은
            사전동의 없이 담당 게시판으로 이동될 수 있습니다.
          </li>
          <li>
            <div
              style={{
                width: "4px",
                height: "4px",
                margin: "7px 8px 0 0",
                backgroundColor: "#514859",
                verticalAlign: "2px",
              }}
            ></div>
            배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내
            1:1 문의에 남겨주세요.
          </li>
        </CommentInfo>
        <CommentTable>
          <TableInfo>
            <InfoItem
              style={{
                width: "70px",
                textAlign: "center",
              }}
            >
              번호
            </InfoItem>
            <InfoItem
              style={{
                width: "592px",
                textAlign: "center",
              }}
            >
              제목
            </InfoItem>
            <InfoItem
              style={{
                width: "51px",
                textAlign: "center",
              }}
            ></InfoItem>
            <InfoItem
              style={{
                width: "77px",
                textAlign: "left",
              }}
            >
              작성자
            </InfoItem>
            <InfoItem
              style={{
                width: "100px",
                textAlign: "center",
              }}
            >
              작성일
            </InfoItem>
            <InfoItem
              style={{
                width: "40px",
                textAlign: "center",
              }}
            >
              도움
            </InfoItem>
            <InfoItem
              style={{
                width: "80px",
                textAlign: "center",
              }}
            >
              조회
            </InfoItem>
          </TableInfo>
          {review && review.map((item, idx) => {
            // ReviewDetail 페이지에 item값을 props로 넘겨준다.
            return <ReviewDetail key={idx} item={item}/>
          })}
        </CommentTable>
        <ReveiwButtonWrap>
          <ReviewButton
            onClick={wirte}
          >
            후기쓰기
          </ReviewButton>
        </ReveiwButtonWrap>
      </CommentListWrap>
    </>
  );
};

const CommentListWrap = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 80px;
  padding-right: 40px;
  width: 1050px;
`;

const CommentTitle = styled.h2`
  margin: 0;
  padding-bottom: 5px;
  color: #4c4c4c;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const CommentInfo = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style-type: none;

  & > li {
    padding: 0;
    display: flex;
    color: #666666;
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0px;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const CommentTable = styled.div`
  margin-top: 15px;
  border-top: 2px solid #522772;
  border-bottom: 1px solid #522772;
  font-family: 'Noto Sans KR', sans-serif;
`;

const TableInfo = styled.div`
  width: 100%;
  height: 65.8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
`;

const InfoItem = styled.div`
  padding: 25px 0px 23px 0;
  color: #353535;
  font-size: 12px;
  line-height: 140%;
  font-weight: 300;
  letter-spacing: 0px;
  vertical-align: middle;
`;

const ReveiwButtonWrap = styled.div`
  padding: 10px 0px;
  width: 100%;
  height: 95px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ReviewButton = styled.button`
  padding: 0;
  width: 128px;
  height: 30px;
  font-size: 13px;
  font-weight: 400;
  line-height: 30px;
  font-family: 'Noto Sans KR', sans-serif;
  color: #fff;
  background-color: #795b8f;
  border: 1px solid #5f0080;
  cursor: pointer;
  box-sizing: content-box;
  &:hover {
    background-color: #fff;
    color: #795b8f;
  }
`;

export default ReviewList;
