import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import axios from "axios";
import jwtDecode from "jwt-decode";

// 액션
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
// const LOAD_TOKEN = "LOAD_TOKEN";

// 초기값
const initialState = {
  userInfo: {
    userId: "",
    userName: "",
  },
  is_login: false,
};

// 액션 생성 함수
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// 회원가입 미들웨어
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
        console.log(res);
        window.alert("회원가입이 완료되었습니다!");
        history.replace("/login");
      })
      .catch((err) => {
        window.alert("중복된 아이디가 존재합니다.");
        console.log(err.response.data.errorMessage);
      });
  };
};

// 로그인 미들웨어
const loginDB = (userId, password) => {
  console.log(userId, password);
  return function (dispatch, getState, { history }) {
    axios
      .post("http://3.37.89.93/user/login", {
        userId: userId,
        password: password,
      })
      .then((response) => {
        //토큰만 걸러내기
        console.log(response.headers.authorization.split("BEARER")[1]);
        //받아온 토큰 속에서 유저네임 찾아내기!
        const DecodedToken = jwtDecode(
          response.headers.authorization.split("BEARER")[1]
        );
        console.log(DecodedToken.USER_NAME);

        setCookie(
          "Authorization",
          response.headers.authorization.split("BEARER")[1]
        );
        setCookie("userId", userId);
        setCookie("userName", DecodedToken.USER_NAME);
        dispatch(
          logIn({
            is_login: true,
            userId: userId,
            userName: DecodedToken.USER_NAME,
          })
        );

        history.replace("/");
        window.alert(`${DecodedToken.USER_NAME}님 환영합니다.`);
      })
      .catch((error) => {
        window.alert("아이디와 비밀번호를 다시한번 확인해주세요.");
        console.log("Login Error", error);
      });
  };
};

// 로그아웃 미들웨어
const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    deleteCookie("is_login");
    deleteCookie("Authorization");
    deleteCookie("userId");
    deleteCookie("userName");
    dispatch(logOut());
    history.replace("/");
  };
};

// 리듀서
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        console.log("유저정보" ,state, action.payload);
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
  },
  initialState
);

const actionCreators = {
  logIn,
  logOut,
  getUser,
  signUpDB,
  loginDB,
  logoutDB,
};

export { actionCreators };
