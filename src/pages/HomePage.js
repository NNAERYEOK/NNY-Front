import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const HomePage = () => {
  return (
    <>
      <GlobalStyle />
      <button className="loginbtn">로그인</button>
      <button className="registerbtn">회원가입</button>
    </>
  );
};
export default HomePage;

const GlobalStyle = createGlobalStyle`
  body{
    background:#212226;
  }
  button{
    display: block;
    margin: auto;
    margin-top: 20px;;
    width: 33%;
    max-width: 200px;;
    height: 37px;
    color:white;
    background: rgba(6, 6, 6, 0.34);
    border-radius: 16px;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    &:hover{color:#4FE0B6;}
  }`;
