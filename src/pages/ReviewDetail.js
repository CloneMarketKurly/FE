import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { actionCreators as reviewActions } from "../redux/modules/review";



const ReviewDetail = (props) => {
  const dispatch = useDispatch();
  const [clickComment, setClickComment] = useState(false);
  const [count, setCount] = useState(0);

  // console.log("리뷰 상세정보", props.item)

  let commentId = props.item.commentId
  // console.log(commentId)

  const deleteReview = () => {
    dispatch(reviewActions.deleteReviewAC(
      commentId
    ))
  }

  return (
    <>
      <OneComment
        onClick={() => {
          setClickComment(!clickComment);
        }}
      >
        <CommentData
          style={{
            width: "65px",
            textAlign: "center",
            paddingRight: "18px",
          }}
        >
          1
        </CommentData>
        <CommentData
          style={{
            paddingLeft: "50px",
            paddingRight: "250px",
            width: "300px",
            textAlign: "left",
          }}
        >
          {props.item.title}
        </CommentData>
        <CommentData
          style={{
            width: "51px",
            textAlign: "center",
          }}
        ></CommentData>
        <CommentData
          style={{
            width: "77px",
            textAlign: "left",
          }}
        >
          {props.item.userId}
        </CommentData>
        <CommentData
          style={{
            paddingRight: "14px",
            width: "100px",
            textAlign: "center",
          }}
        >
          2021.02.02
        </CommentData>
        <CommentData
          style={{
            paddingRight: "4px",
            width: "40px",
            textAlign: "center",
          }}
        >
          0
        </CommentData>
        <CommentData
          style={{
            width: "80px",
            textAlign: "center",
          }}
        >
          0
        </CommentData>
      </OneComment>
      {clickComment && (
        <CommentDetail>
          <DetailWrap>
            <DetailTitle>{props.item.title}</DetailTitle>
            <DetailImage src="https://img-cf.kurly.com/shop/data/review/20211010/60d32b656996fbf65521863d010c395f.jpg" />
            {/* {props.file ? <DetailImage src={props.file} /> : null} */}
            <Detail>
              {props.item.comment}
            </Detail>
          </DetailWrap>

          <HelpWrap>
            <HelpButton
              onClick={() => {
                setCount(+1);
              }}
            >
              도움이 돼요{count}
            </HelpButton>
          </HelpWrap>
          <DeleteWrap>
            <DeleteButton
              onClick={deleteReview}
            >
              삭제하기
            </DeleteButton>
          </DeleteWrap>
        </CommentDetail>
      )}
    </>
  );
};

const OneComment = styled.div`
  color: #4c4c4c;
  display: flex;
  /* align-items: center; */
  border-top: 1px solid #e2e2e2;
  font-weight: 400;
  font-size: 12px;
`;

const CommentData = styled.div`
  padding: 25px 0px 23px 0;
  /* line-height: 140%;
  letter-spacing: 0px;
  vertical-align: middle; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CommentDetail = styled.div`
  padding: 10px;
`;

const DetailWrap = styled.div`
  padding: 0px 9px 9px 9px;
`;

const DetailTitle = styled.p`
  margin: 12px 0 20px;
  display: block;
  font-weight: 700;
  font-size: 14px;
  color: #514859;
  line-height: 18px;
  text-align: left;
`;

const DetailImage = styled.img`
  margin: 0 auto;
  display: block;
  max-width: 600px;
`;

const Detail = styled.p`
  line-height: 16px;
  text-align: left;
  margin: 30px 0 12px;
`;

const DeleteWrap = styled.div`
  text-align: right;
`;

const DeleteButton = styled.button`
  padding: 0px 15px;
  min-width: 105px;
  height: 30px;
  font-size: 12px;
  font-weight: 300;
  line-height: 28px;
  color: #5f0080;
  border: 1px solid #5f0080;
  background: none;
  cursor: pointer;
`;

const HelpWrap = styled.div`
  text-align: right;
  margin-bottom: 5px;
`;

const HelpButton = styled.button`
  padding: 0px 15px;
  min-width: 105px;
  height: 30px;
  font-size: 12px;
  font-weight: 300;
  line-height: 28px;
  color: #5f0080;
  border: 1px solid #5f0080;
  background: none;
  cursor: pointer;
`;

export default ReviewDetail;
