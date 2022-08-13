import React, { useState } from "react";
import { Title } from "./ChargingPage";
import BackBtn from "../components/BackBtn";
import { EyeHistoryBox } from "./EyeHistoryPage/chargedEyeHistory";
import { createGlobalStyle } from "styled-components";
import WarnIcon from "../image/warnicon.svg";

export function WarningPage() {
  const [warnedDate, setWarnedDate] = useState("2022-07-08");
  const [warnedReason, setWarnedReason] = useState("2호선 이대역 미정차");

  return (
    <>
      <GlobalStyle />
      <BackBtn />
      <Title>경고내역</Title>
      <EyeHistoryBox>
        <div className="boxLeft">
          <img className="warnIcon" src={WarnIcon} />
          <span className="warnedDate">{warnedDate}</span>
        </div>
        <div className="boxRight">
          <span className="warnedReason">{warnedReason}</span>
        </div>
      </EyeHistoryBox>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
.boxLeft{
  box-sizing: border-box;
  float: left;
  display: flex;
  padding: 0 8px;
}

.boxRight{
  box-sizing: border-box;
  float: right;
  padding: 0 8px;
  display: flex;
}

.warnIcon{
}

.warnedDate{
  font-family: 'NanumSquare';
  font-weight: 400;
  font-size: 10px;
  color: #5F5F5F;
  margin:30px 10px;
}

.warnedReason{
  font-family: 'NanumSquare';
  font-weight: 700;
  font-size: 10px;
  margin: 30px 0;
}
`;

export default WarningPage;
