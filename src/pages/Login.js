import React from "react";
import styled from "styled-components";
import { Text, Input, Grid } from "../elements/Index";

const Login = () => {
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

        <LoginInput />
        <LoginInput />
        <Grid></Grid>
        <div
          style={{
            width: "27%",
            margin: "10px auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
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
        <ButtonLogin>
          <Text color="#ffffff" size="16.5px" margin="1px 0 0 0">
            로그인
          </Text>
        </ButtonLogin>

        <ButtonSignup onClick={() => {}}>
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

const CheckWrap = styled.div``;

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
  /* background-color: #5f0080; */
  cursor: pointer;
  display: block;
  /* overflow: hidden; */
  /* text-align: center; */
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
