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
  const [bottomModal, setBottomModal] = useState(false);

  const des = 10;

  const [seats, setSeats] = useState([
    {
      id: 1,
      left: "91px",
      top: "56px",
      seated: false,
      mine: false,
      station: 2,
    },
    { id: 2, left: "91px", top: "80px", seated: true, mine: false, station: 2 },
    {
      id: 3,
      left: "91px",
      top: "103px",
      seated: false,
      mine: false,
      station: 2,
    },
    {
      id: 4,
      left: "91px",
      top: "205px",
      seated: true,
      mine: false,
      station: 2,
    },
    {
      id: 5,
      left: "91px",
      top: "228px",
      seated: false,
      mine: false,
      station: 2,
    },
    {
      id: 6,
      left: "91px",
      top: "251px",
      seated: true,
      mine: false,
      station: 2,
    },
    {
      id: 7,
      left: "91px",
      top: "274px",
      seated: false,
      mine: false,
      station: 2,
    },
    {
      id: 8,
      left: "91px",
      top: "297px",
      seated: true,
      mine: false,
      station: 2,
    },
    {
      id: 9,
      left: "91px",
      top: "320px",
      seated: true,
      mine: false,
      station: 2,
    },
    {
      id: 10,
      left: "91px",
      top: "422px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 11,
      left: "91px",
      top: "445px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 12,
      left: "91px",
      top: "468px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 13,
      left: "91px",
      top: "491px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 14,
      left: "91px",
      top: "514px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 15,
      left: "91px",
      top: "537px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 16,
      left: "91px",
      top: "640px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 17,
      left: "91px",
      top: "663px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 18,
      left: "91px",
      top: "686px",
      seated: true,
      mine: true,
      station: 2,
    },

    {
      id: 19,
      left: "266px",
      top: "58px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 20,
      left: "266px",
      top: "81px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 21,
      left: "266px",
      top: "105px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 22,
      left: "266px",
      top: "205px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 23,
      left: "266px",
      top: "228px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 24,
      left: "266px",
      top: "251px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 25,
      left: "266px",
      top: "274px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 26,
      left: "266px",
      top: "297px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 27,
      left: "266px",
      top: "320px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 28,
      left: "266px",
      top: "422px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 29,
      left: "266px",
      top: "445px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 30,
      left: "266px",
      top: "468px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 31,
      left: "266px",
      top: "491px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 32,
      left: "266px",
      top: "514px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 33,
      left: "266px",
      top: "537px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 34,
      left: "266px",
      top: "641px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 35,
      left: "266px",
      top: "664px",
      seated: true,
      mine: true,
      station: 2,
    },
    {
      id: 36,
      left: "266px",
      top: "687px",
      seated: true,
      mine: true,
      station: 2,
    },
  ]);

  const handleModal = () => {
    setIsOpen(false);
  };

  const SelectSeat = id => {
    console.log("좌석 선택", id);
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
