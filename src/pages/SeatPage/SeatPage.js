import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
//컴포넌트
import Seats from "../../components/seatpage/Seats";
import train from "../../image/train.svg";
import back from "../../image/back.svg";
import TopBar from "../../components/TopBar";
import Modal from "../../components/seatpage/Modal";
import BottomModal from "../../components/seatpage/BottomModal";
import BackBtn from "../../components/BackBtn";
//데이터
import { seatinfo } from "../../data/seatInfo";
import { temp } from "../../data/temp";
// api
import { GetSeat, PatchStation } from "../../api/seat";
import { GetUser } from "../../api/user";
// redux
import { useAppSelector } from "../../store";

const SeatPage = () => {
  // 유저 아이디
  const { id, eye } = useAppSelector(state => state.user);
  console.log("유저 아이디", id, eye);

  // 전체 좌석 정보
  const [seats, setSeats] = useState(seatinfo);
  // 버튼 모달
  const [isOpen, setIsOpen] = useState(true);
  // 바텀 모달
  const [bottomModal, setBottomModal] = useState(false);
  // 좌석 선택하기 버튼
  const [share, setShare] = useState(false);

  // 선택된 좌석의 id
  const [selectedId, setSelectedId] = useState(null);
  // 선택된 좌석의 내릴역 id
  const [getOffStation, setGetOffStation] = useState(null);

  // 내릴역 공유하기
  const Share = () => {
    setIsOpen(false);
    setShare(true);
  };

  // 조회하기
  const LookUp = () => {
    setIsOpen(false);
    setShare(false);
    getSeats();
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

  // ** 내 자리 + 내릴역 공유하는 api **
  const PostMySeat = () => {
    PatchStation();
    getSeats();
  };

  // ** 좌석 정보 get api**
  const getSeats = () => {
    GetSeat()
      .then(data => setSeats(temp))
      .catch(err => setSeats(temp));
  };

  // ** 유저 eye 정보 get api**
  useEffect(() => {}, []);

  return (
    <div>
      <Background />

      <TopBar eye={eye} />

      {isOpen && <Modal LookUp={() => LookUp()} Share={() => Share()} />}

      <Wrapper>
        <BackBtn />
        {share && <Text>앉아있는 좌석을 선택해주세요</Text>}

        <Num>2024</Num>
        <Train>
          <Seats seats={seats} share={share} SelectSeat={SelectSeat} />
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
