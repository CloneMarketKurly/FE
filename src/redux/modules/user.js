import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import axios from "axios";

// 액션
const LOG_IN = "LOG_IN";
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
// const LOAD_TOKEN = "LOAD_TOKEN";

// 초기값
const initialState = {
  userInfo: {
    userId: "",
    password: "",
  },
  is_login: false,
};

// 액션 생성 함수
const logIn = createAction(LOG_IN, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
// const loadToken = createAction(LOAD_TOKEN, (token) => ({token}));

// 미들웨어(아시오스 형태)
const signUpDB = (payload) => {
  return function (dispatch, getState, { history }) {
    console.log("회원가입미듈웨어:", payload);
    axios
      .post("http:///3.37.89.93/user/join", {
        userId: payload.userId,
        password: payload.password,
        passwordCheck: payload.passwordCheck,
        userName: payload.userName,
      })
      .then((res) => {
        // dispatch(
        //   setUser({
        //     userId: payload.userId,
        //     password: payload.password,
        //     passwordCheck: payload.passwordCheck,
        //     username: payload.username,
        //   })
        // );
        console.log(res);
        window.alert("회원가입이 완료되었습니다!");
        history.replace("/");
      })
      .catch((err) => {
        window.alert("회원가입 실패", err);
        // window.alert(err.response.data.errorMessage);
      });
  };
};
const loginDB = (userId, password) => {
  console.log(userId, password);
  return function (dispatch, getState, { history }) {
    axios
      .post("http://3.37.89.93/user/login", {
        userId: userId,
        password: password,
      })
      .then((response) => {
        console.log(response.headers.authorization.split("BEARER")[1]);
        dispatch(
          setUser({
            is_login: true,
          })
        );
        setCookie(
          "Authorization",
          response.headers.authorization.split("BEARER")[1]
        );
        setCookie("userId", userId);
        history.replace("/");
        window.alert("로그인에 성공했습니다!");
      })
      .catch((error) => {
        window.alert("로그인에 실패했습니다..");
        console.log("Login Error", error);
      });
  };
};
// const 토큰 = () => {
//   return function (dispatch, getState, { history }) {
//     const loadTokenFB = () => {
//       return function (dispatch) {
//         if (getCookie("Authorization")) {
//           dispatch(loadToken());
//         }
//       };
//     };
//   };
// };
const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    // deleteCookie("is_login");
    dispatch(logOut());
    history.replace("/");
  };
};
// 리듀서
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
    // [LOAD_TOKEN]: (state, action) =>
    //   produce(state, (draft) => {

    //   }),
  },
  initialState
);

const actionCreators = {
  setUser,
  logOut,
  getUser,
  signUpDB,
  loginDB,
  logoutDB,
};

export { actionCreators };
