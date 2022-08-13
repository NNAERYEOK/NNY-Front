import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import BackBtn from "../../components/BackBtn";
import { Title } from "../ChargingPage";
import UsedEye from "./usedEyeHistory";
import ChargedEye from "./chargedEyeHistory";
import { useState, useEffect } from "react";

export const BtnStyle = () => {
  const [btnStyle, setBtnStyle] = useState(false);

  const onClickBtn = () => {
    btnStyle ? setBtnStyle("blue") : setBtnStyle("red");

    return (
      <Button btnStyle={btnStyle} onClick={onClickBtn()}>
        button
      </Button>
    );
  };
};

export function EyeHistory() {
  const [pageSwitch, setPageSwitch] = useState(true);
  const [btnActive, setBtnActive] = useState({ borderBottom: "1px" });

  return (
    <>
      <GlobalStyle />
      <BackBtn />
      <Title>eye 내역</Title>
      <BtnStyle />
      <div className="historyBox">
        <div className="historyNav">
          <button
            className="historyNavBtn"
            style={{ btnActive }}
            onClick={() => {
              setPageSwitch(true);
              setBtnActive({ borderBottom: "8px" });
            }}
          >
            eye 충전 내역
          </button>
          <button
            className="historyNavBtn"
            onClick={() => setPageSwitch(false)}
          >
            eye 사용 내역
          </button>
        </div>
        <div className="historyView">
          {pageSwitch ? <ChargedEye /> : <UsedEye />}{" "}
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

.historyNavBtn{
  box-sizing: border-box;
  width: 50%;
  border: none;
  background-color: #ffffff;
  font-family: "NanumSquare";
  font-size: 14px;
  font-weight: 400;
  padding: 25% 8% 4%;
  border-bottom: 1px solid #4FE0B6;;
}

#selected{
  background-color: tomato;
}
`;

export default EyeHistory;
