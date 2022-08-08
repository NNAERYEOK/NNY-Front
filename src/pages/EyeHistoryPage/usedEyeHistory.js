import React from "react";
import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import EyeHistory from "./EyeHistoryPage";
import { EyeHistoryBox } from "./chargedEyeHistory";

export function UsedEye() {
  const [usedDate, setUsedDate] = useState("2022-07-08");
  const [countUsedEye, setCountUsedEye] = useState(10);
  return (
    <>
      <GlobalStyle />
      <EyeHistoryBox>
        <div className="boxLeft">
          <div className="date">{usedDate}</div>
          <div className="countEye"> -eye {countUsedEye}개</div>
        </div>
      </EyeHistoryBox>
    </>
  );
}

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

`;

export default UsedEye;
