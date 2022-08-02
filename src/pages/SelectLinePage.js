import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import TopBar from "../components/TopBar";
import BackBtn from "../components/BackBtn";

const LinePage = () => {
  const user = "허윤";
  const navigate = useNavigate();
  const goLinePage = () => {
    navigate("/line2");
  };
  return (
    <>
      <Background />
      <TopBar />
      <BackBtn />
      <Question>
        <p>
          <UserId>{user}</UserId> 님,
        </p>
        <p>몇 호선에 타고 계시나요?</p>
      </Question>

      <LineSelect>
        <img src="./image/line1.svg" />
        <img src="./image/line2.svg" onClick={goLinePage} />
        <img src="./image/line3.svg" />
        <img src="./image/line4.svg" />
        <img src="./image/line5.svg" />
        <img src="./image/line6.svg" />
        <img src="./image/line7.svg" />
        <img src="./image/line8.svg" />
        <img src="./image/line9.svg" />
      </LineSelect>
    </>
  );
};

export default LinePage;

const UserId = styled.span`
  color: var(--mint);
`;

const Background = createGlobalStyle`
  body {
  background-color: var( --background-black);
  }
`;
const LineSelect = styled.div`
  img {
    margin-bottom: 35px;
    display: block;
    cursor: pointer;
  }
`;
const Question = styled.div`
  margin-left: 28px;
  margin-bottom: 71px;
  margin-top: 40px;
  p {
    color: white;
    font-weight: 800;
    font-size: 20px;
  }
`;
