import React, { useState } from "react";
// 컴포넌트
import { Title } from "./ChargingPage";
import BackBtn from "../components/BackBtn";
import { EyeHistoryBox } from "./EyeHistoryPage/chargedEyeHistory";
import { createGlobalStyle } from "styled-components";
import WarnIcon from "../image/warnicon.svg";
// API
import { GetWarningHistory } from "../api/user";

export function WarningPage() {
  // 경고받은 날짜
  const [warnedDate, setWarnedDate] = useState("");
  // 경고받은 사유
  const [warnedReason, setWarnedReason] = useState("");

  const getWarningHistories = () => {
    GetWarningHistory()
      .then(data => setWarnedDate())
      .then(data => setWarnedReason())
      .catch(err => setWarnedDate())
      .catch(err => setWarnedDate());
  };

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
