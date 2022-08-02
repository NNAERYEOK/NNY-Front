import React, { useEffect, useState } from "react";
import styled from "styled-components";
import X from "../image/X.svg";
import whiteeye from "../image/whiteeye.svg";

const BottomModal = ({ isOpen, setBottomModal }) => {
  const SelectSeat = async () => {
    console.log("좌석 선택 완료"); // 내 좌석 선택 post api
    setBottomModal(false); // 모달 닫기
  };

  return (
    <div>
      <Modal>
        <div className={isOpen ? "container modal-open" : "container"}>
          <div className="modal">
            <XIcon onClick={() => setBottomModal(false)}></XIcon>
            <BigText>선택한 좌석에 앉아 있습니다.</BigText>
            <SmallText>하차할 역을 선택해 주세요.</SmallText>

            <Station name="station">
              <option value="ㄹ" disabled selected>
                역 선택
              </option>
              <option value="신촌">신촌</option>
              <option value="이대">이대</option>
              <option value="아현">아현</option>
              <option value="dd">신촌</option>
              <option value="22">이대</option>
              <option value="dd">아현</option>
              <option value="4">신촌</option>
              <option value="df">이대</option>
              <option value="d">아현</option>
            </Station>

            <Button onClick={() => SelectSeat()}>
              <p className="text">자리 선택 완료 +1 </p>

              <Eye />
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BottomModal;

const Eye = styled.p`
  background-image: url(${whiteeye});
  width: 17px;
  height: 13px;
`;

const Button = styled.button`
  margin: 64px auto 0 auto;
  width: 188px;
  height: 28px;
  background: #4fe0b6;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0 2px 0 0;
    font-family: "NanumSquare";
    font-style: normal;
    font-weight: 800;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;
  }
`;

const Station = styled.select`
  margin: 20px auto 0 auto;
  width: 219px;
  height: 18px;
  border: 0.3px solid #aeaeae;
  border-radius: 2px;
`;

const Modal = styled.div`
  .modal {
    box-sizing: border-box;
    background: #fff;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 27px;
    transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);
    top: 100%;
    position: fixed;
    left: 0;
    text-align: left;
    border-radius: 27px;

    display: flex;
    flex-direction: column;
  }

  .container.modal-open .modal {
    top: 500px;
  }
`;

const BigText = styled.p`
  margin: 39px 0 0 0;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #000000;
`;

const SmallText = styled.p`
  margin: 23px 0 0 0;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-align: center;

  color: #000000;
`;

const XIcon = styled.div`
  background: url(${X});
  width: 23px;
  height: 23px;

  margin-left: auto;
`;
