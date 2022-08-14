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
import Warning from "../../components/seatpage/Warning";
//데이터
import { seatinfo } from "../../data/seatInfo";
import { temp } from "../../data/temp";
// api
import { GetSeat, PatchStation } from "../../api/seat";
import { PostWarning } from "../../api/user";
// redux
import { useAppSelector } from "../../store";

const SeatPage = () => {
  const { id } = useAppSelector(state => state.user);

  // 전체 좌석 정보
  const [seats, setSeats] = useState(seatinfo);
  // 버튼 모달
  const [isOpen, setIsOpen] = useState(true);
  // 바텀 모달
  const [bottomModal, setBottomModal] = useState(false);
  // 경고 모달
  const [warningModal, setWarningModal] = useState(false);
  // 좌석 선택하기 버튼
  const [share, setShare] = useState(false);
  // 선택된 좌석의 id
  const [selectedId, setSelectedId] = useState(null);
  // 선택된 좌석의 내릴역 id
  const [getOffStation, setGetOffStation] = useState(null);

  //임시
  const train_id = 1;
  const now = 2;

  // 내릴역 공유 버튼
  const Share = () => {
    setIsOpen(false);
    setShare(true);
  };

  // 조회하기
  const LookUp = () => {
    setIsOpen(false);
    setShare(false);
    getSeats(train_id);
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

  // ** 내릴 역 공유 api **
  const postMySeat = (id, selectedId, getOffStation) => {
    PatchStation(id, selectedId, getOffStation)
      .then(res => {
        location.reload();
        console.log("좌석 업데이트 성공");
      })
      .catch(err => {
        console.log("좌석 업데이트 실패", err);
        setSeats(temp);
      });
  };

  // ** 좌석 정보 get api**
  const getSeats = train_id => {
    GetSeat(train_id)
      .then(data => setSeats(data))
      .catch(err => {
        setSeats(temp);
        console.log("실패");
      });
  };

  const [otherId, setOtherId] = useState(null);

  // 신고할 좌석 선택
  const clickWarning = (other_id, seat_station) => {
    if (now - seat_station === 0) {
      setWarningModal(true);

      setOtherId(other_id);
      setGetOffStation(seat_station);
    }
  };

  // ** 신고 api **
  const postWarning = () => {
    console.log("신고 시도");

    var today = new Date();
    var year = today.getFullYear();
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var day = ("0" + today.getDate()).slice(-2);
    var hours = ("0" + today.getHours()).slice(-2);
    var minutes = ("0" + today.getMinutes()).slice(-2);
    var created_at =
      year + "-" + month + "-" + day + "T" + hours + ":" + minutes;

    PostWarning(otherId, created_at, getOffStation)
      .then(data => console.log("경고 주기 성공"))
      .catch(err => console.log("경고 주기 실패 "));

    console.log("신고시도 ", otherId, getOffStation);

    setWarningModal(false);
  };

  return (
    <div>
      <Background />

      <TopBar />

      {isOpen && <Modal LookUp={() => LookUp()} Share={() => Share()} />}
      {warningModal && (
        <Warning setWarningModal={setWarningModal} postWarning={postWarning} />
      )}

      <Wrapper>
        <BackBtn />
        {share && <Text>앉아있는 좌석을 선택해주세요</Text>}

        <Num>2024</Num>
        <Train>
          <Seats
            seats={seats}
            share={share}
            SelectSeat={SelectSeat}
            clickWarning={clickWarning}
          />
        </Train>
      </Wrapper>

      <BottomModal
        isOpen={bottomModal}
        setBottomModal={setBottomModal}
        setGetOffStation={setGetOffStation}
        postMySeat={postMySeat}
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
