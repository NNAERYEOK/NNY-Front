import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import EyeHistory from "./EyeHistoryPage";
import { EyeHistoryBox } from "./chargedEyeHistory";

import { GetUsedEye } from "../../api/user";

export function UsedEye() {
  const [UsedEyes, setUsedEyes] = useState([]);

  useEffect(() => {
    console.log("유즈이펙트");
    GetUsedEye() // 사용한 eye 가져오기
      .then(data => {
        console.log("사용한 eye 가져옴", data.data);
        setUsedEyes(data.data);
      })
      .catch(err => console.log("사용한 eye 가져오기 실패"));
  }, []);

  return (
    <>
      <GlobalStyle />
      {UsedEyes.map(post => {
        return (
          <EyeHistoryBox>
            <div className="boxLeft">
              <div className="date">{post.created_at.substr(0, 10)}</div>
              <div className="countEye"> -eye {post.amount}개</div>
            </div>
          </EyeHistoryBox>
        );
      })}
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
