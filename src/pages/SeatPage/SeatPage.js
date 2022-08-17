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
import { base } from "../../data/base";
import { temp_data } from "../../data/temp_data";
// api
import { GetSeat, PatchStation } from "../../api/seat";
import {
  PostWarning,
  PostUsedEye,
  PostAddEye,
  PatchCurrentEye,
} from "../../api/user";
// redux
import { useAppSelector, useAppDispatch } from "../../store";
import { setEye } from "../../store/features/userSlice";

const SeatPage = () => {
  const { id, eyes } = useAppSelector(state => state.user);

  const currentEye = eyes;

  const dispatch = useAppDispatch();

  // 전체 좌석 정보
  const [seats, setSeats] = useState(base);
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
  // 선택한 타 유저의 id
  const [otherId, setOtherId] = useState(null);

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
    minusEye();
  };

  // 빈자리 클릭하기
  const SelectSeat = id => {
    setSelectedId(id);

    localStorage.setItem("seat_id", id);

    console.log("선택된 자리 ", id);

    setBottomModal(true);
  };

  // 신고할 좌석 선택
  const clickWarning = (other_id, seat_station) => {
    if (now - seat_station === 0) {
      setWarningModal(true);

      setOtherId(other_id);
      setGetOffStation(seat_station);
    }
  };

  // 시간 구하는 함수
  const getTime = () => {
    var today = new Date();
    var year = today.getFullYear();
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var day = ("0" + today.getDate()).slice(-2);
    var hours = ("0" + today.getHours()).slice(-2);
    var minutes = ("0" + today.getMinutes()).slice(-2);
    var created_at =
      year + "-" + month + "-" + day + "T" + hours + ":" + minutes;

    return created_at;
  };

  // ** 좌석 정보 get api **
  const getSeats = train_id => {
    GetSeat(train_id)
      .then(data => {
        setSeats(data.seat);
        console.log("성고오오옹", data);
      })
      .catch(err => {
        setSeats(temp_data);
        console.log("좌석 현황 조회 실패", err);
      });
  };

  // ** 내릴 역 공유 api **
  const postMySeat = () => {
    dispatch(setEye({ eyes: currentEye + 1 }));
    const seat_id = localStorage.getItem("seat_id");

    console.log("공유 시도", id, seat_id, getOffStation);

    PatchStation(2, seat_id, getOffStation)
      .then(res => {
        console.log("좌석 업데이트 성공", res);
        addEye(); // eye 획득
        getSeats(train_id); // 다시 get
      })
      .catch(err => {
        console.log("좌석 공유 실패", id, seat_id, getOffStation);
        setSeats(temp_data);
      });
  };

  // ** 신고 api **
  const postWarning = () => {
    console.log("신고 시도");
    const created_at = getTime();

    PostWarning(otherId, created_at, getOffStation)
      .then(data => console.log("경고 주기 성공", data))
      .catch(err => console.log("경고 주기 실패", err));

    console.log("신고시도 ", otherId, created_at, getOffStation);

    setWarningModal(false);
  };

  // ** 내릴역 공유로 eye +1  **
  const addEye = () => {
    console.log("엥", currentEye);

    dispatch(setEye({ eyes: currentEye + 1 }));
    const created_at = getTime();

    // 1) 총 eye 개수 업뎃

    // PatchCurrentEye(currentEye + 1)
    //   .then(data => {
    //     //수정된 eye dispatch
    //     dispatch(setEye(data.eyes));
    //   })
    //   .catch(err => console.log("현재 eye 업뎃 실패", err));

    // 2) 충전 내역 히스토리 업뎃
    PostUsedEye(id, created_at, 1)
      .then(data => console.log("충전 히스토리 성공"))
      .catch(err => console.log("충전 히스토리 실패", err));
  };

  // ** 좌석 조회로 eye -1 **
  const minusEye = () => {
    console.log("sfsdfd");

    dispatch(setEye({ eyes: currentEye - 1 }));
    const created_at = getTime();

    // 1) 총 eye 개수 업뎃

    // PatchCurrentEye(currentEye - 1)
    //   .then(data => {
    //     //수정된 eye dispatch
    //     dispatch(setEye(data.eyes));
    //   })
    //   .catch(err => console.log("현재 eye 업뎃 실패", err));

    // 2) 사용 내역 히스토리 업뎃
    PostAddEye(id, created_at, -1)
      .then(data => console.log("사용 히스토리 성공"))
      .catch(err => console.log("사용 히스토리 실패", err));
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
            id={id}
            seats={seats}
            share={share}
            SelectSeat={SelectSeat}
            selectedId={selectedId}
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
