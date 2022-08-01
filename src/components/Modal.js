import React, { useEffect } from "react";
import styled from "styled-components";
import whiteeye from "../image/whiteeye.svg";

const Modal = ({ onClick }) => {
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed;
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <ModalBackground>
      <CustomModal onClick={onClick}>
        <p className="text">내리는 역 공유하기</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3px",
          }}
        >
          <p className="text">+1</p>
          <Eye />
        </div>
      </CustomModal>
      <CustomModal onClick={onClick}>
        <p className="text">좌석 현황 조회하기</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3px",
          }}
        >
          <p className="text">-1</p>
          <Eye />
        </div>
      </CustomModal>
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled.div`
  background-color: rgba(255, 255, 255, 0.5);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CustomModal = styled.button`
  background-color: var(--mint);
  width: 188px;
  height: 53px;

  border: none;
  border-radius: 5px;

  margin: 0 auto 34px auto;

  .text {
    font-family: "NanumSquare";
    font-style: normal;
    font-weight: 800;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;

    margin: 0;

    display: flex;
    justify-content: center;
  }
`;

const Eye = styled.p`
  background-image: url(${whiteeye});
  width: 17px;
  height: 13px;
  margin: 1px 0 0 3px;
`;
