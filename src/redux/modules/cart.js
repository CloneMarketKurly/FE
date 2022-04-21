import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

// 액션
const GET_CART = "GET_CART";
const ADD_ITEM = "ADD_ITEM";
const EDIT_ITEM = "EDIT_ITEM";
const DEL_ITEM = "DEL_ITEM";

// 초기값
const initialState = {
  item: [],
};

// 액션 생성 함수
const getCart = createAction(GET_CART, (item) => ({ item }));
const addItem = createAction(ADD_ITEM, (item) => ({ item }));
const editItem = createAction(EDIT_ITEM, (buyItemListId, count) => ({
  buyItemListId,
  count,
}));
const delItem = createAction(DEL_ITEM, (buyItemListId) => ({ buyItemListId }));
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

//장바구니 수량 수정하기
const editItemDB = (buyItemListId, count) => {
  console.log("아이템수정미들웨어", buyItemListId, count);
  let myToken = getCookie("Authorization");
  return function (dispatch, getState, { history }) {
    axios
      .put(
        `http://3.37.89.93/item/basketList/${buyItemListId}`,
        { count },
        {
          headers: { Authorization: `Bearer ${myToken}` },
        }
      )
      .then((res) => {
        console.log(res.data.buyItemList);
        dispatch(editItem(res.data.buyItemList));
      })
      .catch((error) => {
        console.log("아이템수량변경오류", error);
      });
  };
};
//장바구니에서 물품 삭제
const delItemDB = (buyItemListId, cartList) => {
  let myToken = getCookie("Authorization");
  console.log("장바구니삭제미들웨어", buyItemListId, cartList);
  return function (dispatch, getState, { history }) {
    axios
      .delete(
        `http://3.37.89.93/item/basketList/${buyItemListId}`,
        { headers: { Authorization: `Bearer ${myToken}` } },
        {}
      )
      .then((res) => {
        console.log(res);
        // const id = cartList.findIndex((c) => {
        //   return parseInt(c.buyItemListId) === parseInt(buyItemListId);
        // });
        // console.log(id);
        dispatch(delItem(buyItemListId));
      })
      .catch((error) => {
        console.log("장바구니 삭제에러", error);
      });
  };
};

// 리듀서
export default handleActions(
  {
    [GET_CART]: (state, action) =>
      produce(state, (draft) => {
        console.log("리듀서", action.payload);
        draft.item = action.payload.item;
      }),
    [DEL_ITEM]: (state, action) =>
      produce(state, (draft) => {
        console.log("장바구니 삭제 리듀서", state, action);
        draft.item.buyItemList = draft.item.buyItemList.filter(
          (p) => p.buyItemListId !== action.payload.buyItemListId
        );
      }),
    [EDIT_ITEM]: (state, action) => {
      produce(state, (draft) => {
        console.log("state", state);
        console.log(action.payload.buyItemListId);
        draft.item = action.payload.buyItemListId;
      });
    },
  },
  initialState
);

const actionCreators = {
  // export 할 것들
  getCart,
  getCartDB,
  addItemDB,
  addItem,
  editItemDB,
  editItem,
  delItem,
  delItemDB,
};

export { actionCreators };
