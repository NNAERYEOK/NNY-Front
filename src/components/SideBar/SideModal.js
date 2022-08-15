import React, { useEffect, useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

import Back from "../../image/back.svg";
import ProfileImg from "../../image/profile.svg";
import Eye from "../../image/eyeicon.svg";

import { useAppSelector } from "../../store";

const SideBar = ({ isOpen, setSideBarModal }) => {
  const { username } = useAppSelector(state => state.user);
  const { eyes } = useAppSelector(state => state.user);
  const [eye, setEye] = useState(0);
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    setEye(eyes);
    setNickname(username);
  });

  return (
    <div>
      <Modal>
        <div className={isOpen ? "container modal-open" : "modal"}>
          <div className="modal">
            <Close src={Back} onClick={() => setSideBarModal(false)}></Close>
            <Profile src={ProfileImg}></Profile>
            <Username>{nickname}</Username>
            <Eyehistory>
              <img src={Eye}></img>
              <span>내가 가진 eye</span>
              <span className="myeye">{eye}</span>
              <Link to="/paying">
                <div className="goPaying">충전</div>
              </Link>
            </Eyehistory>
            <Link to="/modifymember">
              <p>회원 수정</p>
            </Link>
            <Link to="/eyehistory">
              <p>eye 내역</p>
            </Link>
            <Link to="/warninghistory">
              <p>경고 내역</p>
            </Link>
            <p>공지사항</p>
            <p>1:1문의</p>
            <Link to="/">
              <p className="logout">로그아웃</p>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SideBar;

const Modal = styled.div`
  .modal {
    box-sizing: border-box;
    background: #fff;
    width: 0;
    height: 87%;
    margin: 0;
    padding: 27px;
    position: fixed;
    text-align: left;
    border-radius: 0 90px 90px 0;
    display: flex;
    flex-direction: column;
    z-index: 10;
    left: -70%;
    transition: all 1000ms cubic-bezier(0.86, 0, 0.07, 1);

    a {
      text-decoration: none;
      color: black;
    }
    p {
      text-align: center;
      font-weight: 800;
      font-size: 14px;
      margin-bottom: 20px;
    }
    .logout {
      color: #e6186c;
    }
  }
  .container.modal-open .modal {
    width: 95%;
    max-width: 450px;
    visibility: visible;
    left: 0;
  }
`;

const Close = styled.img`
  display: block;
  width: 32px;
`;

const Profile = styled.img`
  display: block;
  width: 124px;
  margin: 40px auto 20px;
`;

const Username = styled.div`
  font-weight: 800;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const Eyehistory = styled.div`
  width: 213px;
  height: 41px;
  background: #e8e8e8;
  border-radius: 15px;
  margin: 0 auto 50px;
  display: flex;
  align-items: center;
  img {
    width: 20px;
    margin-left: 15px;
    margin-right: 5px;
  }
  .goPaying {
    font-weight: 800;
    font-size: 10px;
    text-align: center;
    color: #ffffff;
    width: 40px;
    height: 16px;
    left: 240px;
    background: #4fe0b6;
    border-radius: 10px;
  }
  span {
    font-weight: 700;
    font-size: 14px;
  }
  .myeye {
    font-weight: 800;
    font-size: 16px;
    margin: 10px;
  }
`;
