import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import train from "../../image/train.svg";

import back from "../../image/back.svg";
import TopBar from "../../components/TopBar";
import Seat from "../../components/Seat";

import Modal from "../../components/Modal";

import BottomModal from "../../components/BottomModal";

import { seatinfo } from "./seatInfo";

const SeatPage = () => {
  // 버튼 모달
  const [isOpen, setIsOpen] = useState(true);
  // 바텀 모달
  const [bottomModal, setBottomModal] = useState(false);
  // 선택된 좌석 id
  const [selectedId, setSelectedId] = useState(null);
  // 전체 좌석 정보
  const [seats, setSeats] = useState(seatinfo);

  const des = 10;

  const handleModal = () => {
    setIsOpen(false);
  };

  const SelectSeat = id => {
    console.log("좌석 선택", seats[id - 1]);
    setSeats(
      seats.map(seat =>
        id === seat.id ? { ...seat, mine: true } : { ...seat, mine: false },
      ),
    );

    setSelectedId(id);

    setBottomModal(true);
  };
  return (
    <div>
      <Background />

      <TopBar />
      {isOpen && <Modal onClick={() => handleModal()} />}

      <Wrapper>
        <BackIcon />
        {isOpen || <Text>앉아있는 좌석을 선택해주세요</Text>}

        <Num>2024</Num>
        <Train>
          {seats.map(seat => {
            if (seat.mine) {
              // 내 자리
              console.log("내자리");
              return (
                <Seat
                  onClick={() => SelectSeat(seat.id)}
                  key={seat.id}
                  left={seat.left}
                  top={seat.top}
                  myseat
                />
              );
            } else {
              if (seat.seated) {
                // 누가 앉음
                return (
                  <Seat
                    onClick={() => SelectSeat(seat.id)}
                    key={seat.id}
                    left={seat.left}
                    top={seat.top}
                    seated
                  >
                    {des - seat.station}
                  </Seat>
                );
              }
            }
            return (
              <Seat
                onClick={() => SelectSeat(seat.id)}
                key={seat.id}
                left={seat.left}
                top={seat.top}
              />
            );
          })}
        </Train>
      </Wrapper>

      <BottomModal isOpen={bottomModal} setBottomModal={setBottomModal} />
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
