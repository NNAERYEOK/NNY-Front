import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import TopBar from "../components/TopBar";
import BackBtn from "../components/BackBtn";

import line1 from "../image/line1.svg";
import line2 from "../image/line2.svg";
import line3 from "../image/line3.svg";
import line4 from "../image/line4.svg";
import line5 from "../image/line5.svg";
import line6 from "../image/line6.svg";
import line7 from "../image/line7.svg";
import line8 from "../image/line8.svg";
import line9 from "../image/line9.svg";

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
        <img src={line1} />
        <img src={line2} onClick={goLinePage} />
        <img src={line3} />
        <img src={line4} />
        <img src={line5} />
        <img src={line6} />
        <img src={line7} />
        <img src={line8} />
        <img src={line9} />
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
