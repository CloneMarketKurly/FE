import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

// import Comment from './Comment';

const ReviewList = (props) => {
  const history = useHistory();
  return (
    <>
      <CommentListWrap>
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
          <div
            onClick={() => {
              history.push("/reviewDetail");
            }}
          >
            안녕!
          </div>
          {/* Commnet List
          { comment_list &&
            comment_list.map((c, i) =>{
              return <Comment key={i} {...c} product_name={props.product_name} />
            })
          } */}
        </CommentTable>
        <ReveiwButtonWrap>
          <ReviewButton
            onClick={() => {
              history.push("/reviewDetail");
            }}
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
  }
`;

const CommentTable = styled.div`
  margin-top: 15px;
  border-top: 2px solid #522772;
  border-bottom: 1px solid #522772;
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
  color: #fff;
  background-color: #795b8f;
  border: 1px solid #5f0080;
  cursor: pointer;
  box-sizing: content-box;
`;

export default ReviewList;
