import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../../image/logo.svg";
import { GetLogout } from "../../api/user";

const HomePage = () => {
  GetLogout()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  const navigate = useNavigate();
  const goLoginPage = () => {
    navigate("/login");
  };
  const goRegisterPage = () => {
    navigate("/register");
  };
  return (
    <>
      <Background />
      <LogoIcon src={Logo} />

      <button className="loginbtn" onClick={goLoginPage}>
        로그인
      </button>
      <button className="registerbtn" onClick={goRegisterPage}>
        회원가입
      </button>
    </>
  );
};
export default HomePage;

const LogoIcon = styled.img`
  display: block;
  margin: 200px auto 80px;
`;

const Background = createGlobalStyle`
  body {
  background-color: var( --background-black);
  }
  button{
    display: block;
    margin: auto;
    margin-top: 20px;;
    width: 33%;
    max-width: 200px;
    height: 37px;
    cursor: pointer;
    color:white;
    background: rgba(6, 6, 6, 0.34);
    border-radius: 16px;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .loginbtn{
    color:#4FE0B6;
  }`;
