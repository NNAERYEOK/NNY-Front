import React, { useRef, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
// 컴포넌트
import Button from "../components/Button";
import BackBtn from "../components/BackBtn";
import loginImage from "../image/login.svg";
import pwImage from "../image/pw.svg";
import pwCImage from "../image/repw.svg";

// 리덕스
import { useAppDispatch } from "../store/index";
import { setUser } from "../store/features/userSlice";

import { useAppSelector } from "../store";

import { PatchUserInfo } from "../api/user";

const ModifyPage = () => {
  const dispatch = useAppDispatch(); // 리덕스

  const { id } = useAppSelector(state => state.user);
  const { username } = useAppSelector(state => state.user);

  const [userid, setUserId] = useState("");
  const [usernickname, setUserName] = useState("");

  useEffect(() => {
    setUserId(id);
    setUserName(username);
  });

  const modifyPw = e => {
    console.log("비번수정 시도");

    // 2) 충전 내역 히스토리 업뎃
    PostAddEye(id, created_at, numEye)
      .then(res => console.log("충전 히스토리 성공"))
      .catch(err => console.log("충전 히스토리 실패", err));
  };

  // 비밀번호, 비밀번호확인
  const [pwd, setPwd] = useState("");
  const [matchPwd, setMatchPwd] = useState("");

  //비밀번호 확인
  if (pwd !== matchPwd) {
    var checkPassword = "비밀번호가 일치하지 않습니다.";
  } else {
    checkPassword = "";
  }
  // 회원가입
  const handleSubmit = async e => {
    event.preventDefault();

    if (matchPwd !== pwd) {
      return alert("비밀번호와 비밀번호확인은 같아야 합니다.");
    } else {
      console.log(email, pwd, username);
    }
  };

  return (
    <>
      <BackBtn />
      <Title>회원 정보 수정</Title>

      <FormField onSubmit={handleSubmit}>
        <div>
          <Label>아이디</Label>
          <div id="idInput">{userid}</div>
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
          <div id="kickname">{usernickname}</div>
        </div>
        <div>
          <Label>본인인증</Label>
          <button id="self">인증하기</button>
        </div>
        <Button type="submit">저장하기</Button>
      </FormField>
    </>
  );
};
export default ModifyPage;

const Title = styled.p`
  margin-left: 16%;
  font-weight: 800;
  font-size: 24px;
`;
const Label = styled.p`
  font-weight: 400;
  font-size: 11px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const FormField = styled.form`
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

  #idInput {
    background-image: url(${loginImage});
    background-repeat: no-repeat;
    background-position: right;
    display: block;
    margin: 0 auto;
    border: none;
    border-bottom: 1px solid #4fe0b6;
    width: 100%;
    height: 30px;
    font-weight: 400;
    font-size: 13px;
    text-indent: 5px;
    padding-top: 7px;
    box-sizing: border-box;
  }
  #kickname {
    display: block;
    margin: 0 auto;
    border: none;
    border-bottom: 1px solid #4fe0b6;
    width: 100%;
    height: 30px;
    font-weight: 400;
    font-size: 13px;
    text-indent: 5px;
    padding-top: 7px;
    box-sizing: border-box;
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
