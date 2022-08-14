import React, { useEffect } from "react";
import styled from "styled-components";

import warning from "../../image/warnicon.svg";

const Warning = ({ setWarningModal, postWarning }) => {
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
    <WarningBackground>
      <Modal>
        <Icon src={warning} />
        <BigText>좌석이 비어있지 않습니까?</BigText>
        <SmallText>해당 유저에게 경고를 보낼 수 있습니다.</SmallText>

        <div
          style={{
            margin: "auto",
            width: "181px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <SmallBtn onClick={() => postWarning()} color="rgba(79, 224, 182, 1)">
            예
          </SmallBtn>
          <SmallBtn
            onClick={() => setWarningModal(false)}
            color="rgba(50, 50, 50, 1)"
          >
            아니오
          </SmallBtn>
        </div>
      </Modal>
    </WarningBackground>
  );
};

export default Warning;

const WarningBackground = styled.div`
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

const Modal = styled.div`
  margin: auto;

  width: 330px;
  height: 193px;
  border-radius: 42px;
  border: none;
  background-color: white;

  box-shadow: 0px 4px rgba(0, 0, 0, 0.25);

  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin-top: 31px;
`;

const BigText = styled.p`
  font-family: "NanumSquare";
  font-weight: 800;
  font-size: 13px;

  margin-top: 15px;
`;

const SmallText = styled.p`
  font-family: "NanumSquare";
  font-weight: 800;
  font-size: 10px;
`;

const SmallBtn = styled.button`
  margin-top: 20px;
  width: 78px;
  height: 28px;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.color};

  color: white;
  font-family: "NanumSquare";
  font-weight: 800;
  font-size: 13px;
`;
