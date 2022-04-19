import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

// 액션
const GET_POST = "GET_POST";
const GET_DETAIL = "GET_DETAIL";
const SET_REVIEW = "SET_REVIEW";
const ADD_REVIEW = "ADD_REVIEW";
const EDIT_REVIEW = "EDIT_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";
const HELP_REVIEW = "HELP_REVIEW";

// 초기값
const initialState = {
  post : [],
  detail_post : [],
};

// 액션 생성 함수
const getPost = createAction(GET_POST, (post) => ({post}));
const getDetail = createAction(GET_DETAIL, (detail_post) => ({detail_post}));
const getReview = createAction(SET_REVIEW, (comment_list) => ({comment_list}));
const addReview = createAction(ADD_REVIEW, (comment_list) => ({comment_list}));
const deleteReview = createAction(DELETE_REVIEW, (commentId) => ({commentId}));
const editReview = createAction(EDIT_REVIEW, (itemId, comment_list) => ({itemId, comment_list}));
const helpReview = createAction(HELP_REVIEW, (commentId) => ({commentId}));

// 미들웨어

// 메인페이지 크롤링 로드
const getPostAC = () => {
  let myToken = getCookie("Authorization")
  return function (dispatch, getState, {history}) {
    axios.get("http://3.37.89.93/", {

    },
    {headers: { 'Authorization' : `Bearer ${myToken}`}}
    )
    .then((res) => {
      console.log("메인페이지 리스트", res)
      dispatch(getPost(res.data))

    })
    .catch(error => {
      console.log("error", error)
    })
  }
}

// 상품 상세페이지 크롤링 로드
const getDetailAC = (itemId) => {
  let myToken = getCookie("Authorization")
  return function (dispatch, getState, {history}) {
    // console.log(itemId)
    axios.get(`http://3.37.89.93/item/details/${itemId}`, {

    },
    {headers: { 'Authorization' : `Bearer ${myToken}`}}
    )
    .then((res) => {
      console.log("디테일 로드", res)
      dispatch(getDetail(res.data))

    })
    .catch(error => {
      console.log("error", error)
    })
  }
}


const addReviewAC = (itemId, title, comment) => {
  // console.log(itemId)
  // console.log(title)
  // console.log(comment)

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
      history.replace(`/detail/${itemId}`)
    })
    .catch(error => {
      console.log("서버에러", error)
    })
  }
}

// 리뷰 수정하기
const editReviewAC = (itemId, commentId, title, comment) => {
  console.log(commentId)
  console.log(title)
  console.log(comment)
  let myToken = getCookie("Authorization")
  let userId = getCookie("userId")
  return function (dispatch, getState, {history}) {
    axios.put(`http://3.37.89.93/item/details/comments/${commentId}`, {
      userId: userId,
      title: title,
      comment: comment,
    },
    {headers: { 'Authorization' : `Bearer ${myToken}`}}
    )
    .then((res) => {
      console.log(res)
      dispatch(editReview({userId, title, comment}))
      history.replace(`/detail/${itemId}`)
    })
    .catch(error => {
      console.log("수정노노노", error)
    })
  }
}

// 리뷰 삭제하기
const deleteReviewAC = (commentId) => {
  let myToken = getCookie("Authorization")
  return function (dispatch, getState, {history}) {
    if (!commentId) window.alert("댓글 정보가 없어요! :(");
    axios.delete(`http://3.37.89.93/item/details/comments/${commentId}`,
    {headers: { 'Authorization' : `Bearer ${myToken}`}},
    )
    .then((res) => {
      console.log(res)
      dispatch(deleteReview(commentId))  
    })
    .catch(error => {
      console.log("리뷰삭제하기 에러", error)
    })
  }
}

const helpReviewAC = (itemId, commentId) => {
  console.log("숫자세기", commentId)
  let myToken = getCookie("Authorization")
  // let userId = getCookie("userId")
  return function (dispatch, getState, {history}) {
    axios.post(`http://3.37.89.93/item/details/${itemId}/${commentId}/help`, {

    },
    {headers: { 'Authorization' : `Bearer ${myToken}`}}
    )
    .then((res) => {
      console.log(res)
      dispatch(helpReview(commentId))
      // history.replace(`/detail/${itemId}`)
    })
    .catch(error => {
      console.log("서버에러", error)
    })
  }
}

// 리듀서
export default handleActions(
  {
    [GET_POST]: (state, action) =>
    produce(state, (draft) => {
      // console.log(action.payload)
      draft.post = action.payload.post;
    }),
    [GET_DETAIL]: (state, action) =>
    produce(state, (draft) => {
      console.log("포스트 리듀서", state)
      // console.log(action.payload)
      draft.detail_post = action.payload.detail_post;
    }),
    // [ADD_REVIEW]: (state, action) =>
    //   produce(state, (draft) => {
    //     console.log(action.payload)
    //     draft.comment.unshift(action.payload.comment_list);
    //   }),
  
    [DELETE_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload)
        console.log(action.payload.commentId)
        draft.detail_post.comments = draft.detail_post.comments.filter((p) =>  p.commentId !== action.payload.commentId);
      }),
  
    // [EDIT_REVIEW]: (state, action) =>
    //   produce(state, (draft) => {
    //     // console.log(action.payload.planId)
    //     draft.comment = draft.comment.filter((p) =>  p.commentId === action.payload.commentId);
    //   }),
    [HELP_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.detail_post.comments.findIndex((p) => p.commentId === action.payload.commentId
        );
        console.log("idx", idx)
        draft.detail_post.comments[idx].commentId = draft.detail_post.comments[idx].commentId + 2;
      }),

  },
  initialState
);


const actionCreators = {
// export 할 것들
  getPost,
  getDetail,
  getPostAC,
  getDetailAC,
  getReview,
  addReview,
  editReview,
  deleteReview,
  helpReview,
  addReviewAC,
  editReviewAC,
  deleteReviewAC,
  helpReviewAC,
};

export { actionCreators };