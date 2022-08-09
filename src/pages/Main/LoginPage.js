import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import BackBtn from "../../components/BackBtn";

import loginImage from "../../image/login.svg";
import pwImage from "../../image/pw.svg";

const LoginPage = () => {
  const navigate = useNavigate();
  const goRegister = () => {
    navigate("/register");
  };
  return (
    <>
      <Background />
      <BackBtn />
      <Title>로그인</Title>
      <FormField>
        <input className="idInput" placeholder="아이디" type="login" />
        <input className="pwInput" placeholder="비밀번호" type="password" />
        <Button>로그인</Button>
        <NavDiv>
          <p className="member" onClick={goRegister}>
            회원가입
          </p>
          <p className="find">비밀번호/아이디 찾기</p>
        </NavDiv>
      </FormField>
    </>
  );
};

export default LoginPage;
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
const NavDiv = styled.div`
  margin: 10px auto;
  width: 75%;
  max-width: 300px;
  background-color: red;
  p {
    display: inline-block;
    color: rgba(33, 34, 38, 0.7);
    font-family: "NanumSquareOTF";
    cursor: pointer;
    font-weight: 400;
    font-size: 8px;
  }
  .member {
    float: left;
  }
  .find {
    float: right;
  }
`;

const FormField = styled.div`
  background: #ffffff;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  width: 78%;
  margin: 0 auto;
  padding: 6%;
  height: 610px;

  input {
    display: block;
    margin: 0 auto;
    border: none;
    border-bottom: 1px solid #4fe0b6;
    width: 75%;
    max-width: 300px;
    height: 30px;
    font-weight: 400;
    font-size: 13px;
    text-indent: 10px;
  }
  .idInput {
    margin-top: 124px;
    margin-bottom: 5%;
  }
  .idInput:placeholder-shown {
    margin-top: 124px;
    margin-bottom: 5%;
    background-image: url(${loginImage});
    background-repeat: no-repeat;
    background-position: right;
  }
  .pwInput {
    margin-top: 33px;
  }
  .pwInput:placeholder-shown {
    background-image: url(${pwImage});
    margin-top: 33px;
    background-repeat: no-repeat;
    background-position: right;
  }
`;
