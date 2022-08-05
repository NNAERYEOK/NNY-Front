import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import train from "../../image/train.svg";

import back from "../../image/back.svg";
import TopBar from "../../components/seatpage/TopBar";
import Seat from "../../components/seatpage/Seat";

import Modal from "../../components/seatpage/Modal";

import BottomModal from "../../components/seatpage/BottomModal";

import { seatinfo } from "./seatInfo";
import { subway } from "./subway";

const SeatPage = () => {
  // 전체 좌석 정보
  const [seats, setSeats] = useState(seatinfo);
  // 버튼 모달
  const [isOpen, setIsOpen] = useState(true);
  // 바텀 모달
  const [bottomModal, setBottomModal] = useState(false);
  // 좌석 선택하기 버튼
  const [share, setShare] = useState(false);

  // 선택된 좌석 id
  const [selectedId, setSelectedId] = useState(null);
  // 선택된 좌석의 내릴역 id
  const [getOffStation, setGetOffStation] = useState(null);

  const des = 10; // 목적지

  const Share = () => {
    // 내릴역 공유하기
    setIsOpen(false);
    setShare(true);
  };

  const LookUp = () => {
    // 조회하기
    setIsOpen(false);
    setShare(false);
  };

  // 빈자리 클릭하기
  const SelectSeat = id => {
    setSeats(
      seats.map(seat =>
        id === seat.id ? { ...seat, mine: true } : { ...seat, mine: false },
      ),
    );

    setSelectedId(id);
    setBottomModal(true);
  };

  // 내 자리와 내릴역 post하는 api
  const PostMySeat = () => {
    console.log("내 자리: ", selectedId, "내릴 역", getOffStation);
  };

  return (
    <div>
      <Background />

      <TopBar />
      {isOpen && <Modal LookUp={() => LookUp()} Share={() => Share()} />}

      <Wrapper>
        <BackIcon />
        {share && <Text>앉아있는 좌석을 선택해주세요</Text>}

        <Num>2024</Num>
        <Train>
          {seats.map(seat => {
            if (seat.mine) {
              // 내 자리

              return (
                <Seat key={seat.id} left={seat.left} top={seat.top} myseat />
              );
            } else {
              if (seat.seated) {
                // 누가 앉음
                return (
                  <Seat key={seat.id} left={seat.left} top={seat.top} seated>
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

      <BottomModal
        isOpen={bottomModal}
        setBottomModal={setBottomModal}
        setGetOffStation={setGetOffStation}
        PostMySeat={PostMySeat}
      />
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
