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
        console.log(res);
        window.alert("회원가입이 완료되었습니다!");
        history.replace("/login");
      })
      .catch((err) => {
        window.alert("회원가입 실패", err);
        console.log(err.response.data.errorMessage);
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
        console.log(response);
        setCookie(
          "Authorization",
          response.headers.authorization.split("BEARER")[1]
        );
        setCookie("userId", userId);
        dispatch(
          logIn({
            is_login: true,
            userId: userId,
          })
        );

        history.replace("/");
        window.alert("로그인에 성공했습니다!");
      })
      .catch((error) => {
        window.alert("로그인에 실패했습니다..");
        console.log("Login Error", error);
      });
  };
};
// 아이디 중복체크
const dupCheckIdDB = (userId) => {
  return function (dispatch, getState, { history }) {
    console.log("중복체크한다!", userId);
    try {
      axios.post("", { userId: userId }).then(function (res) {
        if (res.data == false) {
          return window.alert("사용가능한 아이디입니다.");
        } else {
          window.alert("중복된 아이디가 있습니다.");
        }
      });
    } catch (err) {
      console.log(err);
      window.alert("다시 시도해 주세요.");
    }
  };
};
//로그인 유지
const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    const userId = getCookie("userId");
    console.log(userId);
    const tokenCheck = getCookie("Authorization");
    console.log(tokenCheck);
    if (tokenCheck) {
      dispatch(logIn(userId));
    } else {
      console.log("로그아웃할거야");
      dispatch(logOut());
    }
  };
};
const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    deleteCookie("is_login");
    deleteCookie("Authorization");
    deleteCookie("userId");
    dispatch(logOut());
    history.replace("/");
  };
};
// 리듀서
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        console.log(state, action.payload);
        setCookie("is_login", "success");
        draft.userInfo = action.payload.user;
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
  logIn,
  logOut,
  getUser,
  signUpDB,
  loginDB,
  logoutDB,
  loginCheckDB,
  dupCheckIdDB,
};

export { actionCreators };
