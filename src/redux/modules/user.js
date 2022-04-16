import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// 액션
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
// const LOAD_TOKEN = "LOAD_TOKEN";

// 초기값
const initialState = {
  userInfo: {
    userId: "",
    userPw: "",
  },
    is_login: false,
  };

  // 액션 생성 함수
  const logIn = createAction(LOG_IN, (user) => ({user}));
  const logOut = createAction(LOG_OUT, (user) => ({user}));
  // const loadToken = createAction(LOAD_TOKEN, (token) => ({token}));

  // 미들웨어(아시오스 형태)
  const 토큰 = () => {
    return function (dispatch, getState, {history}) {

    }
  }

  const 로그인 = () => {
    return function (dispatch, getState, {history}) {

    }
  }

  const 회원가입 = () => {
    return function (dispatch, getState, {history}) {

    }
  }

  // 리듀서
  export default handleActions(
    {
      [LOG_IN]: (state, action) =>
        produce(state, (draft) => {

        }),
      [LOG_OUT]: (state, action) =>
        produce(state, (draft) => {

        }),
      // [LOAD_TOKEN]: (state, action) =>
      //   produce(state, (draft) => {

      //   }),
    },
    initialState
  );

  const actionCreators = {

  };

  export { actionCreators };