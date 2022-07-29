import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import train from "../image/train.svg";

import back from "../image/back.svg";
import TopBar from "../components/TopBar";
import Seat from "../components/Seat";

const Background = createGlobalStyle`
  body {
  background-color: var( --background-black);
  }
`;

const BackIcon = styled.div`
  background: url(${back});
  width: 32px;
  height: 32px;

  margin: 25px 0 0 25px;
`;

const Wrapper = styled.div``;

const Text = styled.p`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;

  margin: 40px 0 0 28px;
`;

const Num = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;

  color: rgba(79, 224, 182, 0.85);

  margin: 52px auto 0 auto;
  display: flex;
  justify-content: center;
`;

const Train = styled.div`
  background: url(${train});
  width: 375px;
  height: 758px;

  margin: 21px auto 41px auto;

  position: relative;
`;

const SeatPage = () => {
  return (
    <div>
      <Background />

      <TopBar />

      <Wrapper>
        <BackIcon />
        <Text>앉아있는 좌석을 선택해주세요</Text>

        <Num>2024</Num>
        <Train>
          <Seat />
        </Train>
      </Wrapper>
    </div>
  );
};

export default SeatPage;
