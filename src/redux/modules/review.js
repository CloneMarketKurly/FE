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
  review : [
    {

  }
  ],
};

const initialPost = [{

}]

// 액션 생성 함수
const getReview = createAction(SET_REVIEW, (review) => ({review}));
const addReview = createAction(ADD_REVIEW, (review_list) => ({review_list}));
const deleteReview = createAction(DELETE_REVIEW, (itemId) => ({ itemId }));
const editReview = createAction(EDIT_REVIEW, (itemId, review_list) => ({itemId, review_list}));


// 미들웨어
const getReviewAC = (userName, comment, image) => {
  return function (dispatch, getState, {history}) {
    axios.post("", {

    },
    // {headers: { 'Authorization' : `Bearer ${myToken}`}}
    )
    .then(
      dispatch(addReview({userName, comment, image}))
    )
    .catch(error => {
      console.log("어림없어", error)
    })
  }
}

const addReviewAC = (userName, comment, image) => {
  console.log("후기 추가하기" + userName, comment, image)
  let myToken = getCookie("Authorization")
  return function (dispatch, getState, {history}) {
    axios.post('http://3.37.89.93/item/details/{itemId}/comments', {
      userName: userName,
      comment: comment,
      image: image,
    },
    {headers: { 'Authorization' : `Bearer ${myToken}`}}
    )
    .then(
      dispatch(addReview({userName, comment, image}))
    )
    .catch(error => {
      console.log("어림없어", error)
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

const deleteReviewAC = (title, content, stars ) => {
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

// 리듀서
export default handleActions(
  {
    [SET_REVIEW]: (state, action) =>
    produce(state, (draft) => {
      // draft.todos = action.payload.post;
    }),

    [ADD_REVIEW]: (state, action) =>

    produce(state, (draft) => {
      draft.review.unshift(action.payload.review_list);
    }),

    [DELETE_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        // console.log(action.payload.planId)
        // draft.todos.content = draft.todos.content.filter((p) =>  p.planId !== action.payload.planId);
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
  getReviewAC,
  addReviewAC,
  editReviewAC,
  deleteReviewAC

};

export { actionCreators };