import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import train from "../image/train.svg";

import back from "../image/back.svg";
import TopBar from "../components/TopBar";
import Seat from "../components/Seat";

import Modal from "../components/Modal";

import BottomModal from "../components/BottomModal";

const SeatPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <Background />

      <TopBar />
      {isOpen && <Modal onClick={() => setIsOpen(!isOpen)} />}

      <Wrapper>
        <BackIcon />
        {isOpen || <Text>앉아있는 좌석을 선택해주세요</Text>}

        <Num>2024</Num>
        <Train>
          <Seat />
        </Train>
      </Wrapper>

      <BottomModal />
    </div>
  );
};

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

  margin: 17px auto 0 auto;
  display: flex;
  justify-content: center;
`;

const Train = styled.div`
  background: url(${train});
  width: 375px;
  height: 758px;

  margin: 0 auto 41px auto;

  position: relative;
`;

export default SeatPage;
