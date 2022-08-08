import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";

export function ChargedEye() {
  const [chargedDate, setChargedDate] = useState("2022-07-08");
  const [countChargedEye, setCountChargedEye] = useState(10);
  const [chargeMethod, setChargeMethod] = useState("정보제공");

  return (
    <>
      <GlobalStyle />
      <EyeHistoryBox>
        <div className="boxLeft">
          <div className="date">{chargedDate}</div>
          <div className="countEye">eye {countChargedEye}개</div>
        </div>
        <div className="boxRight">
          <div className="chargeMethod">{chargeMethod}</div>
        </div>
      </EyeHistoryBox>
    </>
  );
}

export const EyeHistoryBox = styled.div`
  box-sizing: border-box;
  width: 65%;
  height: 55px;
  border-bottom: 0.5px solid #4fe0b6;
  margin: 10px auto;
`;
const GlobalStyle = createGlobalStyle`
.boxLeft{
  box-sizing: border-box;
  float: left;
  padding: 8px;
}

.boxRight{
  box-sizing: border-box;
  float: right;
}

.date{
  font-family: "NanumSquare";
  font-size: 10px;
  font-weight: 400;
  color: #5F5F5F;
  margin: 5px 0;
}

.countEye{
  font-family: "NanumSquare";
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 4px;;
}
.chargeMethod{
  padding: 30px 8px 0px;
  font-family: 'NanumSquare';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  color: #333333;
}

`;

export default ChargedEye;
