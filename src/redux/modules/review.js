import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

// 액션
const SET_REVIEW = "SET_REVIEW";
const ADD_REVIEW = "ADD_REVIEW";
const EDIT_REVIEW = "EDIT_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";

// 초기값
const initialState = {
  comment : [
    {

  }
  ],
};

const initialPost = [{

}]

// 액션 생성 함수
const getReview = createAction(SET_REVIEW, (comment) => ({comment}));
const addReview = createAction(ADD_REVIEW, (comment_list) => ({comment_list}));
const deleteReview = createAction(DELETE_REVIEW, (comment, commentId) => ({ comment, commentId }));
const editReview = createAction(EDIT_REVIEW, (itemId, comment_list) => ({itemId, comment_list}));


// 미들웨어

const addReviewAC = (itemId, title, comment) => {

  console.log("추가하기 itemId" + itemId)
  let myToken = getCookie("Authorization")
  let userId = getCookie("userId")
  return function (dispatch, getState, {history}) {
    axios.post(`http://3.37.89.93/item/details/${itemId}/comments`, {
      userId: userId,
      title: title,
      comment: comment,
    },
    {headers: { 'Authorization' : `Bearer ${myToken}`}}
    )
    .then((res) => {
      console.log(res)
      dispatch(addReview({userId, title, comment}))
    })
    .catch(error => {
      console.log("서버에러", error)
    })
  }
}

const editReviewAC = (title, content, stars ) => {
  return function (dispatch, getState, {history}) {
    axios.post("", {

    },
    // {headers: { 'Authorization' : `Bearer ${myToken}`}}
    )
    .then(
      dispatch(addReview({title, content, stars}))
    )
    .catch(error => {
      console.log("어림없어", error)
    })
  }
}

const deleteReviewAC = (commentId) => {
  let myToken = getCookie("Authorization")
  console.log("코멘트아이디", commentId)
  console.log("코멘트아이디", myToken)

  return function (dispatch, getState, {history}) {
    if (!commentId) window.alert("댓글 정보가 없어요! :(");
    // console.log(commentId);
    axios.delete(`http://3.37.89.93/item/details/comments/${commentId}`,
    {headers: { 'Authorization' : `Bearer ${myToken}`}},
    {
      // commentId: commentId
    },
    
    )
    .then((res) => {
      console.log(res)
      dispatch(deleteReview(commentId))
      
    })
    .catch(error => {
      console.log("어림없어", error)
    })
  }
}

// 리듀서
export default handleActions(
  {
    [SET_REVIEW]: (state, action) =>
    produce(state, (draft) => {
      // draft.todos = action.payload.post;
    }),

    [ADD_REVIEW]: (state, action) =>

    produce(state, (draft) => {
      draft.comment.unshift(action.payload.comment_list);
    }),

    [DELETE_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        // console.log(action.payload.commentId)
        draft.comment = draft.comment.filter((p) =>  p.id !== action.payload.commentId);
        window.location.reload()
      }),

    [EDIT_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        // console.log(action.payload.planId)
        // draft.todos.content = draft.todos.content.filter((p) =>  p.planId === action.payload.planId);
      }),
  },
  initialState
);

const actionCreators = {
// export 할 것들
  getReview,
  addReview,
  editReview,
  deleteReview,
  addReviewAC,
  editReviewAC,
  deleteReviewAC

};

export { actionCreators };