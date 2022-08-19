import React, { useEffect, useState } from "react";
// 컴포넌트
import { Title } from "./ChargingPage";
import BackBtn from "../components/BackBtn";
import { EyeHistoryBox } from "./EyeHistoryPage/chargedEyeHistory";
import { createGlobalStyle } from "styled-components";
import WarnIcon from "../image/warnicon.svg";
// API
import { GetWarningHistory } from "../api/user";
import { gertWarningHistory } from "../api/services/userservice";

export function WarningPage() {
  // 경고받은 날짜
  const [warnedDate, setWarnedDate] = useState(null);
  // 경고받은 사유
  const [warnedReason, setWarnedReason] = useState(null);

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

  const getWarningHistories = () => {
    const created_at = getTime();
    GetWarningHistory(created_at)
      .then(data => {
        setWarnedDate(data.created_at);
        console.log("성공", data);
      })
      .catch(err => {
        console.log("실패");
      });
  };

  useEffect(() => {
    getWarningHistories();
  }, []);

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
