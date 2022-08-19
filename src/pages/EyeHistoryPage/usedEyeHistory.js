import React from "react";
import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import EyeHistory from "./EyeHistoryPage";
import { EyeHistoryBox } from "./chargedEyeHistory";

export function UsedEye() {
  const [usedDate, setUsedDate] = useState("2022-07-08");
  const [countUsedEye, setCountUsedEye] = useState(10);
  const [UsedEyes, setUsedEyes] = useState([]);

  // eye 사용내역조회
  const getUsedEye = async () => {
    const response = await axios
      .get("https://cha2y0ung.pythonanywhere.com/nny/usedeye/")
      .then(response => {
        setUsedEyes(response.data);
      })
      .catch(error => {
        console.log("사용 내역 가져오기 실패");
      });
  };

  return (
    <>
      <GlobalStyle />
      <EyeHistoryBox>
        {UsedEyes.map(post => {
          return (
            <div className="boxLeft">
              <div className="date">{post.create_at}</div>
              <div className="countEye"> -eye {post.amount}개</div>
            </div>
          );
        })}
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
