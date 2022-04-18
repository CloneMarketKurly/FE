import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Text } from "../elements/Index";
import { actionCreators } from "../redux/modules/user";
import { userIdCHK, passwordCHK, usernameCHK } from "../shared/Common";
import styled from "styled-components";

const Signup = () => {
  const dispatch = useDispatch();
  //아이디, 비밀번호, 비밀번호 확인, 이름
  const [userId, setId] = React.useState("");
  const [password, setPw] = React.useState("");
  const [passwordCheck, setPwChk] = React.useState("");
  const [userName, setUserName] = React.useState("");
  //아이디 중복검사
  const [userId_chk, setUserId_chk] = React.useState(false);
  // const checkUserId = () => {
  //   if (!checkUserId(userId)) {
  //     alert("아이디 형식이 맞지 않습니다!");
  //     return;
  //   }
  //   dispatch(actionCreators.userIdCheckDB(userId));
  // };

  const signup = () => {
    if (
      userId === "" ||
      password === "" ||
      userName === "" ||
      passwordCheck === ""
    ) {
      window.alert("모두 입력해주세요!");
      return;
    }
    // if (!userIdCHK(userId)) {
    //   window.alert("아이디가 맞지 않습니다!");
    //   return;
    // }
    // if (!passwordCHK(password)) {
    //   window.alert("비밀번호 형식이 맞지 않습니다!");
    //   return;
    // }
    // if (password !== passwordCheck) {
    //   window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다!");
    //   return;
    // }
    // if (!usernameCHK(userName)) {
    //   window.alert("이름 형식이 맞지 않습니다!");
    //   return;
    // }
    dispatch(
      actionCreators.signUpDB({
        userId: userId,
        password: password,
        passwordCheck: passwordCheck,
        userName: userName,
      })
    );
  };

  const signUpId = (e) => {
    setId(e.target.value);
    console.log(userId);
  };
  const signUpPw = (e) => {
    setPw(e.target.value);
    console.log(password);
  };
  const signUpPwCHK = (e) => {
    setPwChk(e.target.value);
    console.log(passwordCheck);
  };
  const signUpName = (e) => {
    setUserName(e.target.value);
    console.log(userName);
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <RequiredBox>
        <Text size="12px" color="#666666">
          <CheckSpan>*</CheckSpan>필수입력사항
        </Text>
      </RequiredBox>
      <Line />
      <SignupTable>
        <tbody>
          <tr>
            <td>
              아이디<CheckSpan>*</CheckSpan>
            </td>

            <td style={{ display: "flex" }}>
              <input
                onChange={signUpId}
                placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                style={{
                  placeholder: "6자 이상의 영문 혹은 영문과 숫자를 조합",
                  padding: "14px",
                  width: "332px",
                  height: "15px",
                }}
              />

              <button
                style={{
                  fontWeight: "bold",
                  size: "14px",
                  backgroundColor: "#ffffff",
                  color: "#5f0080",
                  width: "120px",
                  height: "48px",
                  padding: "6px ",
                  margin: "0 0 5px 8px",
                  borderRadius: "3px",
                  paddingTop: "10px",
                  paddingBottom: "5px",
                  border: "1px solid #8c8c8c",
                }}
                disabled={userId_chk ? true : false}
                onClick={() => {}}
              >
                중복확인
              </button>
            </td>
            {userId !== "" && !userIdCHK(userId) && (
              <InfoUl className="checkId" userId_chk={userId_chk}>
                <li>• 6자 이상의 영문 혹은 영문과 숫자를 조합</li>
                <li>• 아이디 중복확인</li>
              </InfoUl>
            )}
          </tr>

          <tr>
            <td>
              비밀번호<CheckSpan>*</CheckSpan>
            </td>

            <td style={{ width: "481px", display: "flex" }}>
              <input
                onChange={signUpPw}
                placeholder="비밀번호를 입력해주세요"
                type="password"
                style={{
                  padding: "14px",
                  width: "332px",
                }}
              />
            </td>
            {password !== "" && !passwordCHK(password) && (
              <InfoUl className="checkPw">
                <li>• 10글자 이상 입력</li>
                <li>• 영문/숫자/특수문자(공백 제외)만 허용, 2개 이상의 조합</li>
                <li>• 동일한 숫자 3개 이상 연속 사용 불가</li>
              </InfoUl>
            )}
            {password !== "" && passwordCHK(password) && (
              <InfoUl className="checkPw">
                <li>• 10글자 이상 입력</li>
                <li>• 영문/숫자/특수문자(공백 제외)만 허용, 2개 이상의 조합</li>
                <li>• 동일한 숫자 3개 이상 연속 사용 불가</li>
              </InfoUl>
            )}
          </tr>
          <tr>
            <td>
              비밀번호확인<CheckSpan>*</CheckSpan>
            </td>
            <td style={{ width: "481px", display: "flex" }}>
              <input
                onChange={signUpPwCHK}
                placeholder="비밀번호를 한번 더 입력해주세요"
                type="password"
                style={{
                  padding: "14px",
                  width: "332px",
                }}
              />
            </td>
            {password !== "" && !passwordCHK(passwordCheck) && (
              <InfoUl className="ReCheckPw">
                <li>• 동일한 비밀번호를 입력해주세요.</li>
              </InfoUl>
            )}
            {password !== "" && passwordCHK(passwordCheck) && (
              <InfoUl className="ReCheckPw">
                <li>• 동일한 비밀번호를 입력해주세요.</li>
              </InfoUl>
            )}
          </tr>
          <tr>
            <td>
              이름<CheckSpan>*</CheckSpan>
            </td>
            <td style={{ width: "481px", display: "flex" }}>
              <input
                onChange={signUpName}
                placeholder="이름을 입력해주세요"
                style={{
                  padding: "14px",
                  width: "332px",
                }}
              />
            </td>
          </tr>
        </tbody>
      </SignupTable>
      <button
        style={{
          width: "240px",
          height: "56px",
          backgroundColor: "#5f0080",
          borderRadius: "3px",
          border: "0 solid #8c8c8c",
        }}
        onClick={() => {
          signup();
        }}
      >
        <Text color="#ffffff" size="16.5px" margin="1px 0 0 0" bold>
          가입하기
        </Text>
      </button>
    </Container>
  );
};

const Container = styled.div`
  width: 640px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  padding: 5px 0px 120px 0px;
`;

const Title = styled.h3`
  font-size: 28px;
  text-align: center;
  margin-top: 10px;
`;

const RequiredBox = styled.div`
  text-align: right;
  width: 100%;
  margin: 10px 0px 0px 0px;
`;

const CheckSpan = styled.span`
  color: #ee6a7b;
`;

const Line = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  background-color: #333333;
  margin-top: -2px;
`;

const SignupTable = styled.table`
  margin-top: 10px;
  padding-bottom: 49px;
  width: 100%;
  & tr {
    text-align: left;
    font-size: 14px;
    font-weight: 500;
  }
  & td {
    position: relative;
    padding-bottom: 16px;
  }
  & td:nth-child(1) {
    box-sizing: border-box;
    padding: 15px 0px 0px 18px;
    width: 152px;
    vertical-align: top;
  }
`;

const InfoUl = styled.ul`
  font-size: 12px;
  color: #666666;
  position: relative;
  left: -37px;
  font-weight: 400;
  list-style: none;
  margin-top: 0px;
  margin-left: 0px;
`;

export default Signup;
