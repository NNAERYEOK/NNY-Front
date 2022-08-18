import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import App from "../App";
import { Title } from "./ChargingPage";
import BackBtn from "../components/BackBtn";
import EyeBox from "../image/eyebox.svg";

import { PostAddEye, PatchCurrentEye } from "../api/user";

// redux
import { useAppSelector, useAppDispatch } from "../store";
import { setEye } from "../store/features/userSlice";

const Paying = () => {
  const { id, eyes } = useAppSelector(state => state.user);

  const currentEye = eyes;

  const dispatch = useAppDispatch();

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

  // ** 결제로 eye +10  **
  const PayingEye = e => {
    console.log("결제 시도");
    const created_at = getTime();

    // 1) 총 eye 개수 업뎃
    PatchCurrentEye(currentEye + 10)
      .then(data => {
        //수정된 eye dispatch
        dispatch(setEye(data.eyes));
      })
      .catch(err => console.log("현재 eye 업뎃 실패", err));

    // 2) 충전 내역 히스토리 업뎃
    PostAddEye(id, created_at, 10)
      .then(res => console.log("충전 히스토리 성공"))
      .catch(err => console.log("충전 히스토리 실패", err));
  };
  return (
    <>
      <GlobalStyle />
      <BackBtn />
      <Title>결제하기</Title>
      <div className="payInfoBox">
        <img className="eyeBox" src={EyeBox} />
        <div className="text">
          <span className="countEyeInfo">eye 10개</span> <br />
          <span className="priceNum">1,000 원</span>
        </div>
      </div>
      <div className="payInfo">
        <span className="payInfoText">결제금액</span>
        <span className="payInfoNum">1,000원</span>
      </div>
      <div className="payMethod">
        <span className="payMethodTitle">결제수단</span>
        <div style={{ margin: "0 auto", width: "75%" }}>
          <button className="payMethodBtn" id="selected">
            신용카드
          </button>
          <button className="payMethodBtn">휴대폰</button>
          <button className="payMethodBtn">무통장 입금</button>
          <SelectBox>
            <option value="1">카드 선택</option>
            <option value="2">우리 카드</option>
            <option value="3">현대 카드</option>
            <option value="4">KB국민 카드</option>
            <option value="5">BC 카드</option>
            <option value="6">삼성 카드</option>
            <option value="7">신한 카드</option>
            <option value="8">롯데 카드</option>
            <option value="9">NH농협 카드</option>
            <option value="10">하나 카드</option>
          </SelectBox>
          <SelectBox>
            <option value="1">할부 선택</option>
            <option value="2">일시불</option>
            <option value="3">1개월</option>
            <option value="4">3개월</option>
            <option value="5">6개월</option>
            <option value="6">12개월</option>
          </SelectBox>
        </div>
      </div>
      <div className="payDetail">결제상세</div>
      <div
        className="payInfo"
        style={{ borderRadius: "6px 6px 0 0", boxShadow: "none" }}
      >
        <span className="payInfoText">결제금액</span>
        <span className="payInfoNum">1,000원</span>
      </div>
      <div
        className="payInfo"
        style={{
          borderRadius: "0 0 6px 6px",
          backgroundColor: "rgba(79, 224, 182, 0.31)",
        }}
      >
        <span className="payInfoText">신용카드</span>
        <span className="payInfoNum">1,000원</span>
      </div>
      <button className="payingBtn" onClick={e => PayingEye()}>
        결제하기
      </button>
    </>
  );
};

const SelectBox = styled.select`
  box-sizing: border-box;
  margin: 14px auto;
  width: 92%;
  height: 18px;
  border: 0.3px solid #aeaeae;
  border-radius: 2px;

  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 400;
  font-size: 7px;

  display: flex;
  align-items: center;

  color: #000000;
`;

const GlobalStyle = createGlobalStyle`

span{
  font-family: "NanumSquare";
}

.payInfoBox{
  width: 75%;
  height: 84px;
  background: #EFEFEF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  margin: 20px auto 0px;
}

.text{
 padding-top: 15px;
}

.eyeBox{
  padding: 13px 20px;
  float: left;
}

.countEyeInfo{
  font-size: 11px;
  font-weight: 700;
  color: #5C5C5C;
}

.priceNum{
  font-size: 13px;
  font-weight: 700;
  margin-top: 5px;
}

.payInfo{
  width: 75%;
  height: 45px;
  background-color: #D9D9D9;
  margin: 0 auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}

.payInfoText{
  float: left;
  margin: 15px 20px;
  font-weight: 700;
  font-size: 13px;
}

.payInfoNum{
  float: right;
  margin: 15px 20px;
  font-size: 13px;
}

.payMethod{
  width: 75%;
  height: 200px;
  background-color: #EFEFEF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  margin: 30px auto;
  padding: 0.01px; // 마진상쇄 방지
  box-sizing: border-box;
}

.payMethodTitle{
  display: block;
  margin: 15px 20px;
  font-weight: 800;
  font-size: 14px;
}

.payMethodBtn{
  display: inline;
  height: 37px;
  width: 28%;
  border-radius: 3px;
  border-style: none;
  background-color: #D9D9D9;
  white-space: nowrap;
  color: #4A4A4A;
  font-size: 10px;
  font-family: "NanumSquare";
  margin: 0 2.5% 20px;
}

#selected {
  background-color: #4FE0B6;
  font-weight: 800;
  color: #FFFFFF;
}

.payDetail{
  box-sizing: border-box;
  width: 75%;
  height: 45px;
  background-color:#EFEFEF;
  margin: 0 auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  font-weight: 800;
  font-size: 14px;
  font-family: "NanumSquare";
  padding: 15px 20px;
}

.payingBtn{
  display: block;
  width: 55%;
  height: 32px; 
  background: #4FE0B6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border-style: none;
  margin: 50px auto;
  font-family: 'NanumSquare';
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  color: #FFFFFF; 
}

`;

export default Paying;
