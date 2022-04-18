import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

// 액션
const GET_POST = "GET_POST";
const GET_DETAIL = "GET_DETAIL";
// const ADD_TODO = "ADD_TODO";
// const EDIT_TODO = "EDIT_TODO";
// const DELETE_TODO = "DELETE_TODO";

// 초기값
const initialState = {
  post : [],
  detail_post : [],
};

const initialPost = [{

}]

// 액션 생성 함수
const getPost = createAction(GET_POST, (post) => ({post}));
const getDetail = createAction(GET_DETAIL, (detail_post) => ({detail_post}));
// const addTodo = createAction(ADD_TODO, (post_list) => ({post_list}));
// const deleteTodo = createAction(DELETE_TODO, (planId) => ({ planId }));
// const editTodo = createAction(EDIT_TODO, (planId, post_list) => ({planId, post_list}));


// 미들웨어
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

const getDetailAC = (itemId) => {
  let myToken = getCookie("Authorization")
  return function (dispatch, getState, {history}) {
    console.log(itemId)
    axios.get(`http://3.37.89.93/item/details/${itemId}`, {

    },
    {headers: { 'Authorization' : `Bearer ${myToken}`}}
    )
    .then((res) => {
      console.log(res)
      // dispatch(getPost(res.data))

    })
    .catch(error => {
      console.log("error", error)
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
      console.log(action.payload)
      // draft.detail_post = action.payload.detail_post;
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
};

export { actionCreators };