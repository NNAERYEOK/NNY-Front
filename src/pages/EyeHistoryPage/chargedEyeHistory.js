import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";

import { GetChargedEye } from "../../api/user";

export function ChargedEye() {
  const [chargeMethod, setChargeMethod] = useState("정보제공");
  const [ChargedEyes, setChargedEyes] = useState([]);
  GetChargedEye() // 충전한 eye 가져오기
    .then(data => {
      console.log("충전한 eye 가져옴");
      setChargedEyes(data);
    })
    .catch(err => console.log("충전한 eye 가져오기 실패"));

  return (
    <>
      <GlobalStyle />
      {ChargedEyes.map(post => {
        if (post.amount < 10) {
          setChargeMethod("정보제공");
        } else {
          setChargeMethod("결제");
        }
        <EyeHistoryBox>
          <div className="boxLeft">
            <div className="date">{post.create_at}</div>
            <div className="countEye">eye {post.amount}개</div>
          </div>
          <div className="boxRight">
            <div className="chargeMethod">{chargeMethod}</div>
          </div>
        </EyeHistoryBox>;
      })}
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
