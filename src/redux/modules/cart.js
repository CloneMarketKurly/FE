import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

// 액션
const GET_ITEM = "GET_ITEM";
// const ADD_TODO = "ADD_TODO";
// const EDIT_TODO = "EDIT_TODO";
// const DELETE_TODO = "DELETE_TODO";

// 초기값
const initialState = {
  item: [],
};

// 액션 생성 함수
const getItem = createAction(GET_ITEM, (item) => ({ item }));

// 미들웨어

// 장바구니 크롤링
const getItemDB = () => {
  let myToken = getCookie("Authorization");
  return function (dispatch, getState, { history }) {
    axios
      .get(
        "http://3.37.89.93/",
        {},
        { headers: { Authorization: `Bearer ${myToken}` } }
      )
      .then((res) => {
        console.log("메인페이지 리스트", res);
        dispatch(getItem(res.data));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

// 리듀서
export default handleActions(
  {
    [GET_ITEM]: (state, action) =>
      produce(state, (draft) => {
        // console.log(action.payload)
        draft.post = action.payload.post;
      }),
  },
  initialState
);

const actionCreators = {
  // export 할 것들
  getItem,
  getItemDB,
};

export { actionCreators };
