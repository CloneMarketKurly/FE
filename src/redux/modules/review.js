import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// 액션
const SET_REVIEW = "SET_REVIEW";
const ADD_REVIEW = "ADD_REVIEW";
const EDIT_REVIEW = "EDIT_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";

// 초기값
const initialState = {
  review: [{}],
};

const initialReview = [{}];

// 액션 생성 함수
const getReview = createAction(SET_REVIEW, (review) => ({ review }));
const addReview = createAction(ADD_REVIEW, (review_list) => ({ review_list }));
const deleteReview = createAction(DELETE_REVIEW, (reviewId) => ({ reviewId }));
const editReview = createAction(EDIT_REVIEW, (reviewId, review_list) => ({
  reviewId,
  review_list,
}));

// 미들웨어
const addReviewFB = (payload) => {
  return function (dispatch, getState, { history }) {
    axios
      .post(
        "",
        {}
        // {headers: { 'Authorization' : `Bearer ${myToken}`}}
      )
      .then(dispatch(addReview(payload)))
      .catch((error) => {
        console.log("어림없어", error);
      });
  };
};

// 리듀서
export default handleActions(
  {
    [SET_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        // draft.reivews = action.payload.reivew;
      }),

    [ADD_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        // draft.reviews.content.unshift(action.payload.review_list);
      }),

    [DELETE_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        // console.log(action.payload.reviewId)
        // draft.reivews.content = draft.reivews.content.filter((p) =>  p.reviewId !== action.payload.reivewId);
      }),

    [EDIT_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        // console.log(action.payload.reviewId)
        // draft.reivews.content = draft.reivews.content.filter((p) =>  p.reivewId === action.payload.reviewId);
      }),
  },
  initialState
);

const actionCreators = {
  // export 할 것들
};

export { actionCreators };
