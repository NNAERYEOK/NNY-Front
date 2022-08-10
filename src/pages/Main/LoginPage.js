import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import BackBtn from "../../components/BackBtn";

import loginImage from "../../image/login.svg";
import pwImage from "../../image/pw.svg";

// 유저 정보 관련
import { useAppDispatch } from "../../store/index";
import { setUser } from "../../store/features/userSlice";
import { GetUser } from "../../api/user";

const LoginPage = () => {
  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);

  // 유저 리덕스
  const dispatch = useAppDispatch();

  // 로그인 함수 (미완성)
  const Login = () => {
    console.log("로그인 시도", id, password);

    GetUser(id, password)
      .then(
        dispatch(
          setUser({
            id: 3,
            username: "테스트",
            email: "example@gmail.com",
            eye: 10,
          }),
        ),
        navigate("/"),
      )
      .catch(err => console.log("로그인 실패", err));
  };

  const navigate = useNavigate();

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
          value={id}
          onChange={e => setId(e.target.value)}
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
