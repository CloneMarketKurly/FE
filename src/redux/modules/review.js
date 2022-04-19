// import { createAction, handleActions } from "redux-actions";
// import { produce } from "immer";
// import axios from "axios";
// import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
// import { useSelector } from "react-redux";
// import { useState } from "react";

// // 액션
// const SET_REVIEW = "SET_REVIEW";
// const ADD_REVIEW = "ADD_REVIEW";
// const EDIT_REVIEW = "EDIT_REVIEW";
// const DELETE_REVIEW = "DELETE_REVIEW";
// const HELP_REVIEW = "HELP_REVIEW";


// // 초기값
// const initialState = {
//   comment : [],
// };

// // 액션 생성 함수
// const getReview = createAction(SET_REVIEW, (comment_list) => ({comment_list}));
// const addReview = createAction(ADD_REVIEW, (comment_list) => ({comment_list}));
// const deleteReview = createAction(DELETE_REVIEW, (comment_list, commentId) => ({ comment_list, commentId }));
// const editReview = createAction(EDIT_REVIEW, (itemId, comment_list) => ({itemId, comment_list}));
// const helpReview = createAction(HELP_REVIEW, (commentId) => ({commentId}));


// // 미들웨어

// // 리뷰 추가하기
// const addReviewAC = (itemId, title, comment) => {
//   // console.log(itemId)
//   // console.log(title)
//   // console.log(comment)

//   console.log("추가하기 itemId" + itemId)
//   let myToken = getCookie("Authorization")
//   let userId = getCookie("userId")
//   return function (dispatch, getState, {history}) {
//     axios.post(`http://3.37.89.93/item/details/${itemId}/comments`, {
//       userId: userId,
//       title: title,
//       comment: comment,
//     },
//     {headers: { 'Authorization' : `Bearer ${myToken}`}}
//     )
//     .then((res) => {
//       console.log(res)
//       dispatch(addReview({userId, title, comment}))
//       history.replace(`/detail/${itemId}`)
//     })
//     .catch(error => {
//       console.log("서버에러", error)
//     })
//   }
// }

// // 리뷰 수정하기
// const editReviewAC = (itemId, commentId, title, comment) => {
//   console.log(commentId)
//   console.log(title)
//   console.log(comment)
//   let myToken = getCookie("Authorization")
//   let userId = getCookie("userId")
//   return function (dispatch, getState, {history}) {
//     axios.put(`http://3.37.89.93/item/details/comments/${commentId}`, {
//       userId: userId,
//       title: title,
//       comment: comment,
//     },
//     {headers: { 'Authorization' : `Bearer ${myToken}`}}
//     )
//     .then((res) => {
//       console.log(res)
//       dispatch(editReview({userId, title, comment}))
//       history.replace(`/detail/${itemId}`)
//     })
//     .catch(error => {
//       console.log("수정노노노", error)
//     })
//   }
// }

// // 리뷰 삭제하기
// const deleteReviewAC = (commentId) => {
//   let myToken = getCookie("Authorization")
//   return function (dispatch, getState, {history}) {
//     if (!commentId) window.alert("댓글 정보가 없어요! :(");
//     axios.delete(`http://3.37.89.93/item/details/comments/${commentId}`,
//     {headers: { 'Authorization' : `Bearer ${myToken}`}},
//     )
//     .then((res) => {
//       console.log(res)
//       dispatch(deleteReview(commentId))  
//     })
//     .catch(error => {
//       console.log("리뷰삭제하기 에러", error)
//     })
//   }
// }

// const helpReviewAC = (commentId) => {
//   console.log("숫자세기", commentId)
//   let myToken = getCookie("Authorization")
//   // let userId = getCookie("userId")
//   return function (dispatch, getState, {history}) {
//     axios.post(`http://3.37.89.93/item/details/${commentId}/help`, {

//     },
//     {headers: { 'Authorization' : `Bearer ${myToken}`}}
//     )
//     .then((res) => {
//       console.log(res)
//       dispatch(helpReview(commentId))
//       // history.replace(`/detail/${itemId}`)
//     })
//     .catch(error => {
//       console.log("서버에러", error)
//     })
//   }
// }

// // 리듀서
// export default handleActions(
//   {
//     [ADD_REVIEW]: (state, action) =>
//     produce(state, (draft) => {
//       console.log(state)
//       // const detail_post = useSelector((state) => state.post.detail_post);
//       // console.log("리듀서", detail_post)

//       // draft.comment = [...detail_post];
//       draft.comment.unshift(action.payload.comment_list);
//     }),

//     [DELETE_REVIEW]: (state, action) =>
//       produce(state, (draft) => {
//         // console.log(action.payload.commentId)
//         draft.detail_post = draft.detail_post.filter((p) =>  p.commentId !== action.payload.commentId);
//         window.location.reload()
//       }),

//     [EDIT_REVIEW]: (state, action) =>
//       produce(state, (draft) => {
//         // console.log(action.payload.planId)
//         draft.comment = draft.comment.filter((p) =>  p.commentId === action.payload.commentId);
//       }),
//     [HELP_REVIEW]: (state, action) =>
//       produce(state, (draft) => {
//         let idx = draft.comment.findIndex((p) => p.commentId === action.payload.commentId
//         );
//         draft.comment[idx] = draft.comment[idx] + 1;
//     }),
//   },
//   initialState
// );

// const actionCreators = {
// // export 할 것들
//   getReview,
//   addReview,
//   editReview,
//   deleteReview,
//   helpReview,
//   addReviewAC,
//   editReviewAC,
//   deleteReviewAC,
//   helpReviewAC,
// };

// export { actionCreators };