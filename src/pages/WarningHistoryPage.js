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

// 경고받은 사유 더미 데이터
const warnR = ["2호선 이대역 미하차", "2호선 신촌역 미하차"];

export function WarningPage() {
  // 경고받은 날짜
  const [warnedDate, setWarnedDate] = useState(null);
  // 경고받은 사유
  const [warnedReason, setWarnedReason] = useState([]);

  useEffect(() => {
    GetWarningHistory() // 충전한 eye 가져오기
      .then(data => {
        console.log("경고 내역 성공 :", data);
        setWarnedReason(data.data);
      })
      .catch(err => console.log("경고 내역 실패"));
  }, []);

  return (
    <>
      <GlobalStyle />
      <BackBtn />
      <Title>경고내역</Title>
      <EyeHistoryBox>
        {warnedReason.map(post => {
          <div>
            <div className="boxLeft">
              <img className="warnIcon" src={WarnIcon} />
              <span className="warnedDate">
                {post.created_at.substr(0, 10)}
              </span>
            </div>
            <div className="boxRight">
              <span className="warnedReason">2호선 미하차</span>
            </div>
          </div>;
        })}
      </EyeHistoryBox>
      ;
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
