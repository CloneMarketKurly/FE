import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Comment = (props) => {
  const history = useHistory();
  return (
    <>
      리뷰디테일페이지
      <button>삭제하기</button>
    </>
  );
};
// const OneComment = styled.div`
//   color: #4c4c4c;
//   display: flex;
//   /* align-items: center; */
//   border-top: 1px solid #e2e2e2;
//   font-weight: 400;
//   font-size: 12px;
// `;

// const CommentData = styled.div`
//   padding: 25px 0px 23px 0;
//   /* line-height: 140%;
//   letter-spacing: 0px;
//   vertical-align: middle; */
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
// `;

// const CommentDetail = styled.div`
//   padding: 10px;
// `;

// const DetailWrap = styled.div`
//   padding: 0px 9px 9px 9px;
// `;

// const DetailTitle = styled.p`
//   margin: 12px 0 20px;
//   display: block;
//   font-weight: 700;
//   font-size: 14px;
//   color: #514859;
//   line-height: 18px;
//   text-align: left;
// `;

// const DetailImage = styled.img`
//   margin: 0 auto;
//   display: block;
//   max-width: 600px;
// `;

// const Detail = styled.p`
//   line-height: 16px;
//   text-align: left;
//   margin: 30px 0 12px;
// `;

// const DeleteWrap = styled.div`
//   text-align: right;
// `;

// const DeleteButton = styled.button`
//   padding: 0px 15px;
//   min-width: 105px;
//   height: 30px;
//   font-size: 12px;
//   font-weight: 300;
//   line-height: 28px;
//   color: #5f0080;
//   border: 1px solid #5f0080;
//   background: none;
//   cursor: pointer;
// `;

// const HelpWrap = styled.div`
//   text-align: right;
//   margin-bottom: 5px;
// `;

// const HelpButton = styled.button`
//   padding: 0px 15px;
//   min-width: 105px;
//   height: 30px;
//   font-size: 12px;
//   font-weight: 300;
//   line-height: 28px;
//   color: #5f0080;
//   border: 1px solid #5f0080;
//   background: none;
//   cursor: pointer;
// `;

export default Comment;
