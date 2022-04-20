import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

// 액션
const GET_CART = "GET_CART";
const ADD_ITEM = "ADD_ITEM";
//주소찾기
const SET_POST = "SET_POST";

// 초기값
const initialState = {
  item: [],
};

// 액션 생성 함수
const getCart = createAction(GET_CART, (item) => ({ item }));
const addItem = createAction(ADD_ITEM, (item) => ({ item }));
const setPost = createAction(SET_POST, (address) => ({ address }));

// 미들웨어
// 장바구니에 아이템 받아오기
const getCartDB = () => {
  let myToken = getCookie("Authorization");
  return function (dispatch, getState, { history }) {
    axios
      .get("http://3.37.89.93/item/basketList", {
        headers: { Authorization: `Bearer ${myToken}` },
      })
      .then((res) => {
        console.log("미듈_장바구니를 서버에서 게리겟겟", res.data);
        dispatch(getCart(res.data));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};
//장바구니에 넣기
const addItemDB = (itemId, count) => {
  return function (dispatch, getState, { history }) {
    let userId = getCookie("userId");
    let myToken = getCookie("Authorization");
    console.log("payload:", itemId, count);
    console.log("토큰 :", myToken);
    console.log("유저아이디", userId);
    axios
      .post(
        "http://3.37.89.93/item/basketList",
        {
          itemId: itemId,
          count: count,
        },
        { headers: { Authorization: `Bearer ${myToken}` } }
      )

      .then((res) => {
        console.log(res);
        dispatch(addItem(res.data));
        alert("장바구니에 물품을 담으셨습니다!");
        history.replace(`/cart/${userId}`);
        console.log("카트담기 성공");
      })
      .catch((err) => {
        console.log("카트담기 실패", err);
      });
  };
};

// 리듀서
export default handleActions(
  {
    [GET_CART]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        console.log("안녕!!");
        draft.item = action.payload.item;
      }),
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log("주소", state);
        draft.address = action.payload.address;
      }),
  },
  initialState
);

const actionCreators = {
  // export 할 것들
  getCart,
  getCartDB,
  setPost,
  addItemDB,
  addItem,
};

export { actionCreators };
