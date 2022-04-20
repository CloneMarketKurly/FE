import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// 리덕스 관련
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as reviewActions } from "../redux/modules/post";
import { getCookie } from "../shared/Cookie";
import { history } from "../redux/configureStore";


const ReviewDetail = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  // console.log(props.item)

  const [clickComment, setClickComment] = useState(false);
  const [count, setCount] = useState(0);

  // console.log("리뷰 상세정보", props.item)
  // 리뷰작성에서 필요한 commentId는 props로 넘겨받은 item의 commentId
  let commentId = props.item.commentId
  let itemId = params.itemId
  let user = props.item.userId
  let helpCnt = props.item.helpCnt

  // const likeCheck = useSelector((state) => state.post.detail_post.comments);
  // // console.log("도움이돼요", likeCheck)

  // const _helpCheck = likeCheck.find((p) => p.helpCheck === true)
  // console.log("헬프", _helpCheck)

  // const ChangeBtn = _helpCheck !== undefined ? _helpCheck.helpCheck : null;
  // console.log("버튼바꿔", ChangeBtn)

  const userId = getCookie("userId");
  // console.log(user, userId)

  const deleteReview = () => {
    // 리뷰를 삭제할 때 commentId를 찾아 삭제할 예정
    dispatch(reviewActions.deleteReviewAC(
      commentId
    ))
    history.replace(`/detail/${itemId}`)
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
          {props.item.commentId}
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
          {props.item.modifiedAt}
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
            <DetailImage src={props.item.image} />
            {/* {props.file ? <DetailImage src={props.file} /> : null} */}
            <Detail>
              {props.item.comment}
            </Detail>
          </DetailWrap>

        {userId === user ? 
          <div style={{display: "flex", flexDirection: "row", justifyContent: "right", alignItems: "right"}}>
          <DeleteWrap>
              <DeleteButton
                onClick={() => {
                  history.push(`/reviewWrite/${itemId}/${commentId}`)
                }}
              >
                수정
              </DeleteButton>
            </DeleteWrap>
            <DeleteWrap>
              <DeleteButton
                onClick={deleteReview}
              >
                삭제
              </DeleteButton>
            </DeleteWrap>
          </div>
          :
         <HelpWrap>
            <HelpButton
             onClick={() => {
               dispatch(reviewActions.helpReviewAC(itemId, commentId))
             }}
           >
              도움이 돼요&nbsp;{helpCnt}
            </HelpButton>
          </HelpWrap>

          // (ChangeBtn === null ?
          //   <HelpWrap>
          //     <HelpButton
          //     onClick={() => {
          //       dispatch(reviewActions.helpReviewAC(itemId, commentId))
          //     }}
          //   >
          //       도움이 돼요&nbsp;{helpCnt}
          //     </HelpButton>
          //   </HelpWrap>
          //   :
          //   <HelpWrap>
          //     <HelpButton1
          //     onClick={() => {
          //       dispatch(reviewActions.helpReviewAC(itemId, commentId))
          //     }}
          //   >
          //       도움이 돼요&nbsp;{helpCnt}
          //     </HelpButton1>
          //   </HelpWrap>
          //   )

      }
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
  margin-right: 2px;
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

const HelpButton1 = styled.button`
  padding: 0px 15px;
  min-width: 105px;
  height: 30px;
  font-size: 12px;
  font-weight: 300;
  line-height: 28px;
  color: white;
  border: 1px solid #5f0080;
  background: purple;
  cursor: pointer;
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
