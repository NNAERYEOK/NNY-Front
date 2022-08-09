import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Button from "../../components/Button";
import BackBtn from "../../components/BackBtn";

import loginImage from "../../image/login.svg";
import pwImage from "../../image/pw.svg";
import pwCImage from "../../image/repw.svg";

const RegisterPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onNameHandler = event => {
    setName(event.currentTarget.value);
  };
  const onPasswordHandler = event => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = event => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호확인은 같아야 합니다.");
    }
  };
  return (
    <>
      <Background />
      <BackBtn />
      <Title>회원가입</Title>
      <FormField>
        <div>
          <Label>아이디</Label>
          <input id="idInput" placeholder="아이디" type="login" />
        </div>
        <div>
          <Label>비밀번호</Label>
          <input id="pwInput" placeholder="비밀번호" type="password" />
        </div>
        <div>
          <Label>비밀번호 확인</Label>
          <input id="RepwInput" placeholder="비밀번호 확인" type="password" />
        </div>
        <div>
          <Label>본인인증</Label>
          <button id="self">인증하기</button>
        </div>
        <Button onClick={onSubmit}>가입하기</Button>
      </FormField>
    </>
  );
};
export default RegisterPage;

const Background = createGlobalStyle`
  body {
  background-color: var( --background-black);
  }
`;
const Title = styled.p`
  color: white;
  margin-left: 8%;
  font-weight: 400;
  font-size: 20px;
`;
const Label = styled.p`
  font-weight: 400;
  font-size: 11px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const FormField = styled.div`
  background: #ffffff;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  width: 78%;
  margin: 0 auto;
  padding: 6%;
  height: 610px;
  div {
    width: 75%;
    max-width: 300px;
    margin: auto;
    margin-bottom: 50px;
  }
  input {
    display: block;
    margin: 0 auto;
    border: none;
    border-bottom: 1px solid #4fe0b6;
    width: 100%;
    height: 30px;
    font-weight: 400;
    font-size: 10px;
    text-indent: 5px;
  }
  #idInput:placeholder-shown {
    background-image: url(${loginImage});
    background-repeat: no-repeat;
    background-position: right;
  }
  #pwInput:placeholder-shown {
    background-image: url(${pwImage});
    background-repeat: no-repeat;
    background-position: right;
  }
  #RepwInput:placeholder-shown {
    background-image: url(${pwCImage});
    background-repeat: no-repeat;
    background-position: right;
  }
  #self {
    width: 82px;
    height: 27px;
    border: 1px solid #4fe0b6;
    border-radius: 10px;
    background: none;
    font-size: 9px;
    cursor: pointer;
  }
`;
