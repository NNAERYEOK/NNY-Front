import React, { useRef, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
// 컴포넌트
import Button from "../../components/Button";
import BackBtn from "../../components/BackBtn";
import loginImage from "../../image/login.svg";
import pwImage from "../../image/pw.svg";
import pwCImage from "../../image/repw.svg";
// 유저 api
import { PostUser, PatchUserName, GetUser, GetProfile } from "../../api/user";
// 리덕스
import { useAppDispatch } from "../../store/index";
import { setUser } from "../../store/features/userSlice";

import http from "../../api/http";

const RegisterPage = () => {
  const dispatch = useAppDispatch(); // 리덕스

  const nav = useNavigate();

  //이름, 비밀번호, 비밀번호확인, 이름
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [matchPwd, setMatchPwd] = useState("");
  const [username, setUserName] = useState("");

  //비밀번호 확인
  if (pwd !== matchPwd) {
    var checkPassword = "비밀번호가 일치하지 않습니다.";
  } else {
    checkPassword = "";
  }

  //회원가입 성공
  const [success, setSuccess] = useState(false);

  // 회원가입
  const handleSubmit = async e => {
    e.preventDefault();

    if (matchPwd !== pwd) {
      return alert("비밀번호와 비밀번호확인은 같아야 합니다.");
    } else {
      setSuccess(true);
      console.log(email, pwd, username);

      PostUser(email, pwd) // 회원가입
        .then(data => {
          console.log("회원가입 성공", data);

          GetUser(email, pwd).then(data => {
            // 로그인
            console.log("로그인 성공", data);
            const token = data.data.access_token;
            console.log("토큰!!!!!!!!!", token);

            window.localStorage.setItem("token", JSON.stringify(token)); // 로컬 스토리지에 토큰 저장

            http.defaults.headers.common["Authorization"] = token
              ? `Bearer ${token}`
              : null;

            PatchUserName(username) //닉넴 수정
              .then(data => {
                console.log("닉네임 수정 완료", data);

                GetProfile()
                  .then(data => {
                    console.log("프로필 가져오기 성공", data);
                    dispatch(setUser(data.data));
                    nav("/selectline"); // 최종 성공
                  })
                  .catch(err => console.log("프로필 가져오기 실패"));
              })
              .catch(err => console.log("닉넴 수정 실패", err));
          });
        })
        .catch(err => console.log(err, "회원 가입 실패"));
    }
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
            onChange={e => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div>
          <Label>비밀번호</Label>
          <input
            value={pwd}
            onChange={e => setPwd(e.target.value)}
            id="pwInput"
            placeholder="비밀번호"
            type="password"
            required
          />
        </div>
        <div className="matchPwDiv">
          <Label>비밀번호 확인</Label>
          <input
            value={matchPwd}
            onChange={e => setMatchPwd(e.target.value)}
            id="confirm_pwd"
            type="password"
            placeholder="비밀번호 확인"
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
            onChange={e => setUserName(e.target.value)}
            value={username}
            required
          />
        </div>
        <div>
          <Label>본인인증</Label>
          <button id="self">인증하기</button>
        </div>

        <Button type="submit">가입하기</Button>
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
  #pwInput:placeholder-shown {
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
