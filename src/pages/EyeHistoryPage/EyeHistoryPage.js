import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import { useState } from "react";
// 컴포넌트
import BackBtn from "../../components/BackBtn";
import { Title } from "../ChargingPage";
import UsedEye from "./usedEyeHistory";
import ChargedEye from "./chargedEyeHistory";

export function EyeHistoryPage() {
  const [btnActive, setBtnActive] = useState(true);

  return (
    <>
      <GlobalStyle />
      <BackBtn />
      <Title>eye 내역</Title>
      <div className="historyBox">
        <div className="historyNav">
          <BoxWrapper>
            <Btn
              className={btnActive ? "Active" : "NotActive"}
              onClick={() => setBtnActive(!btnActive)}
            >
              eye 충전 내역{" "}
            </Btn>
            <Btn
              className={btnActive ? "NotActive" : "Active"}
              onClick={() => setBtnActive(!btnActive)}
            >
              eye 사용 내역{" "}
            </Btn>
          </BoxWrapper>
        </div>
        <div className="historyView">
          {btnActive ? <ChargedEye /> : <UsedEye />}{" "}
        </div>
      </div>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
.historyNav{
  width: 65%;
  margin: 0 auto 12%;
}
`;

const BoxWrapper = styled.div`
  .Active {
    box-sizing: border-box;
    width: 50%;
    border: none;
    background-color: #ffffff;
    font-family: "NanumSquare";
    font-size: 14px;
    font-weight: 800;
    padding: 25% 8% 4%;
    border-bottom: 4px solid #4fe0b6;
  }

  .NotActive {
    box-sizing: border-box;
    width: 50%;
    border: none;
    background-color: #ffffff;
    font-family: "NanumSquare";
    font-size: 14px;
    font-weight: 400;
    padding: 25% 8% 4%;
    border-bottom: 1px solid #4fe0b6;
  }
`;

const Btn = styled.button``;

export default EyeHistoryPage;
