import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Button from "../components/Button";
import BackBtn from "../components/BackBtn";
const RegisterPage = () => {
  return (
    <>
      <GlobalStyle />
      <BackBtn />
      <h3>회원가입</h3>
      <div className="formField">
        <div>
          <p>아이디</p>
          <input id="idInput" placeholder="아이디" type="login" />
        </div>
        <div>
          <p>비밀번호</p>
          <input id="pwInput" placeholder="비밀번호" type="password" />
        </div>
        <div>
          <p>비밀번호 확인</p>
          <input id="RepwInput" placeholder="비밀번호 확인" type="password" />
        </div>
        <div>
          <p>본인인증</p>
          <button>인증하기</button>
        </div>

        <Button>가입하기</Button>
      </div>
    </>
  );
};
export default RegisterPage;

const GlobalStyle = createGlobalStyle`
  body{
    background:#212226;
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
  .formField div{
    width:75%;
    max-width: 300px;
    margin:auto;
    margin-bottom: 50px;
  }
  h3{
    color:white;
    margin-left:8%;
    font-weight: 400;
    font-size: 20px;
  }
  p{
    font-weight: 400;
    font-size: 11px;
    margin-top:20px;
    margin-bottom:10px ;
  }
  input{
    display: block;
    margin: 0 auto;
    border: none;
    border-bottom: 1px solid #4FE0B6;
    width:100%;
    height:30px;
    font-weight: 400;
    font-size: 13px;
  }
  #idInput{
    background-image:url('./image/login.svg'); 
    background-repeat: no-repeat;
    background-position: right;
  }
  #pwInput{
    background-image:url('./image/pw.svg'); 
    background-repeat: no-repeat;
    background-position: right;
  }
  #RepwInput{
    background:red; 
    background-repeat: no-repeat;
    background-position: right;

  }
  button{
    width: 82px;
    height: 27px;
    border:1px solid #4FE0B6; 
    border-radius: 10px;
    background :none ;
    font-size: 9px;
    cursor: pointer;
  }
  `;
