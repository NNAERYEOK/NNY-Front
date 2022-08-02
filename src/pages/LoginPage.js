import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import BackBtn from "../components/BackBtn";

const LoginPage = () => {
  const navigate = useNavigate();
  const goRegister = () => {
    navigate("/register");
  };
  return (
    <>
      <GlobalStyle />
      <BackBtn />
      <h3>로그인</h3>
      <div className="formField">
        <input className="idInput" placeholder="아이디" type="login" />
        <input className="pwInput" placeholder="비밀번호" type="password" />
        <Button>로그인</Button>
        <div className="btn">
          <p className="member" onClick={goRegister}>
            회원가입
          </p>
          <p className="find">비밀번호/아이디 찾기</p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

const GlobalStyle = createGlobalStyle`
  body{
    background:#212226;
  }
  h3{
    color:white;
    margin-left:8%;
    font-weight: 400;
    font-size: 20px;
  }
  .formField{
    background: #FFFFFF;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 11px;
    width:78%;
    margin: 0 auto;
    padding: 6%;
    height: 610px;
  }
  .btn{
    margin: 10px auto;
    width:75%;
    max-width: 300px;
    background-color: red;
  }
  p{
    display: inline-block;
    color:rgba(33, 34, 38, 0.7);
    font-family: 'NanumSquareOTF';
    cursor: pointer;
    font-weight: 400;
    font-size: 8px;
  }
  .member{
  float:left;
  }
  .find{
    float:right;
  }
  
  input{
    display: block;
    margin: 0 auto;
    border: none;
    border-bottom: 1px solid #4FE0B6;
    width:75%;
    max-width: 300px;
    height:30px;
    font-weight: 400;
    font-size: 13px;
    text-indent: 10px;;
  }
  .idInput{
    margin-top: 124px;
    margin-bottom:5%;
  }
  .idInput:placeholder-shown{
    margin-top: 124px;
    margin-bottom:5%;
    background-image:url('./image/login.svg'); 
    background-repeat: no-repeat;
    background-position: right;
  }
  .pwInput{
    margin-top: 33px;
  }
  .pwInput:placeholder-shown{
    background-image:url('./image/pw.svg'); 
    margin-top: 33px;
    background-repeat: no-repeat;
    background-position: right;
  }
`;
