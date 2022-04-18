import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Text } from "../elements/Index";
import styled from "styled-components";

import { actionCreators } from "../redux/modules/user";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [userId, setId] = useState("");
  const [password, setPw] = useState("");

  const login = () => {
    dispatch(actionCreators.loginDB(userId, password));
    if (userId === "" || password === "") {
      window.alert("아이디와 비밀번호를 모두 입력해주세요!");
      return;
    }
    dispatch(actionCreators.loginDB(userId, password));
  };
  const loginId = (e) => {
    setId(e.target.value);
  };
  const loginPw = (e) => {
    setPw(e.target.value);
  };

  return (
    <React.Fragment>
      <LoginWrap>
        <Text
          bold
          margin="70px auto 34px"
          size="22px"
          width="100%"
          center="center"
        >
          로그인
        </Text>

        <LoginInput placeholder="아이디를 입력해주세요" onChange={loginId} />
        <LoginInput placeholder="비밀번호를 입력해주세요" onChange={loginPw} />
        <div
          style={{
            width: "40%",
            margin: "10px auto",
            display: "flex",
            justifyContent: "space-between",
            height: "20px",
          }}
        >
          <div>
            <Check type="checkbox" />
            <div
              style={{
                color: "#4f4f4f",
                size: "13px",
                margin: "0 0 0px 6px",
                fontSize: "14px",
                display: "contents",
              }}
            >
              보안접속
            </div>
          </div>

          <div
            style={{
              color: "#4f4f4f",
              size: "13px",
              margin: "0",
              fontSize: "13px",
              paddingTop: "3px",
            }}
          >
            아이디 찾기 | 비밀번호 찾기
          </div>
        </div>

        <ButtonLogin
          onClick={() => {
            login();
          }}
        >
          <Text color="#ffffff" size="16.5px" margin="1px 0 0 0">
            로그인
          </Text>
        </ButtonLogin>

        <ButtonSignup
          onClick={() => {
            history.push("/signup");
          }}
        >
          <Text color="#5f0081" size="16px" margin="1px 0 0 0">
            회원가입
          </Text>
        </ButtonSignup>
      </LoginWrap>
    </React.Fragment>
  );
};

const LoginWrap = styled.div`
  margin: 0px auto 100px 0px;
  justify-content: center;
  text-align: center;
`;

const Check = styled.input`
  width: 10px;
  height: 12px;
  border-radius: 3px;
  border: 1px solid #8c8c8c;
  background-size: 16px 17px;
  color: #8c8c8c;
`;

const LoginInput = styled.input`
  margin: 10px auto;
  width: 40%;
  height: 54px;
  border-radius: 3px;
  border: 1px solid #5f0081;
  cursor: pointer;
  display: block;
`;

const ButtonLogin = styled.button`
  margin: 10px auto;
  width: 40%;
  height: 54px;
  border-radius: 3px;
  border: 1px solid #5f0081;
  background-color: #5f0080;
  cursor: pointer;
  display: block;
  overflow: hidden;
  text-align: center;
`;

const ButtonSignup = styled.button`
  margin: 10px auto;
  width: 40%;
  height: 54px;
  border-radius: 3px;
  border: 1px solid #5f0081;
  background-color: #ffffff;
  cursor: pointer;
  display: block;
  overflow: hidden;
  text-align: center;
`;

export default Login;
