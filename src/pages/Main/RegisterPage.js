import React, { useRef, useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import BackBtn from "../../components/BackBtn";

import loginImage from "../../image/login.svg";
import pwImage from "../../image/pw.svg";
import pwCImage from "../../image/repw.svg";
import Logo from "../../image/logo.svg";

const RegisterPage = () => {
  //이름, 비밀번호, 비밀번호확인, 이름
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [matchPwd, setMatchPwd] = useState("");
  const [name, setName] = useState("");

  //비밀번호 확인
  if (pwd !== matchPwd) {
    var checkPassword = "비밀번호가 일치하지 않습니다.";
  } else {
    checkPassword = "";
  }

  //회원가입 성공
  const [success, setSuccess] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    if (matchPwd != pwd) {
      return;
    }
    console.log(id, pwd, name);
    setSuccess(true);
  };

  return (
    <>
      <Background />
      <BackBtn />
      <Title>회원가입</Title>
      <FormField onSubmit={handleSubmit}>
        <div>
          <Label>아이디</Label>
          <input
            id="idInput"
            placeholder="아이디"
            type="text"
            autoComplete="off"
            onChange={e => setId(e.target.value)}
            value={id}
            required
          />
        </div>
        <div>
          <Label>비밀번호</Label>
          <input
            type="password"
            placeholder="비밀번호"
            id="password"
            onChange={e => setPwd(e.target.value)}
            value={pwd}
            required
          />
        </div>
        <div className="matchPwDiv">
          <Label>비밀번호 확인</Label>
          <input
            type="password"
            placeholder="비밀번호 확인"
            id="confirm_pwd"
            onChange={e => setMatchPwd(e.target.value)}
            value={matchPwd}
            required
          />
          <p id="confirmnote">{checkPassword}&nbsp;</p>
        </div>
        <div>
          <Label>이름</Label>
          <input
            type="text"
            placeholder="이름"
            id="name"
            onChange={e => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div>
          <Label>본인인증</Label>
          <button id="self">인증하기</button>
        </div>
        <Link to="/selectline" style={{ textDecoration: "none" }}>
          <Button>가입하기</Button>
        </Link>
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

const FormField = styled.form`
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
    margin-bottom: 45px;
  }
  .matchPwDiv {
    margin-bottom: 30px;
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
  #password:placeholder-shown {
    background-image: url(${pwImage});
    background-repeat: no-repeat;
    background-position: right;
  }
  #confirm_pwd:placeholder-shown {
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
  #confirmnote {
    color: red;
    font-size: 12px;
  }
`;
const LogoIcon = styled.img`
  display: block;
  margin: 40px auto 0px;
`;
