import React, { useEffect, useState } from "react";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import BackBtn from "../../components/BackBtn";

import loginImage from "../../image/login.svg";
import pwImage from "../../image/pw.svg";
import http from "../../api/http";
// 유저 정보 관련
import { useAppDispatch } from "../../store/index";
import { setUser } from "../../store/features/userSlice";
import { GetUser, GetProfile } from "../../api/user";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // 유저 리덕스
  const dispatch = useAppDispatch();

  // 로그인 함수
  const Login = e => {
    e.preventDefault();

    GetUser(email, password) // 로그인
      .then(data => {
        console.log("로그인 시도 결과 : ", data);

        const token = data.data.access_token;
        console.log("토큰❤️", token);

        window.localStorage.setItem("token", JSON.stringify(token)); // 로컬 스토리지에 토큰 저장

        http.defaults.headers.common["Authorization"] = token
          ? `Bearer ${token}`
          : null;

        //프로필 가져오기
        // test
        //   .get("http://cha2y0ung.pythonanywhere.com/nny/profile/")
        //   .then(data => console.log("프로필", data))
        //   .catch(err => console.log("프로필 실패", err));

        GetProfile() // 프로필 가져오기
          .then(data => {
            console.log("프로필 가져옴~!", data);
            dispatch(setUser(data.data));
            navigate("/selectline");
          })
          .catch(err => console.log("프로필 가져오기 실패"));
      })
      .catch(err => console.log("로그인 실패", err));
  };

  const goRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <Background />
      <BackBtn />
      <Title>로그인</Title>
      <FormField onSubmit={Login}>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="idInput"
          placeholder="아이디"
          type="login"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="pwInput"
          placeholder="비밀번호"
          type="password"
        />
        <Button type="submit">로그인</Button>
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

const FormField = styled.form`
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
