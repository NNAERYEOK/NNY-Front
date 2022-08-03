import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Station = styled.select`
  box-sizing: border-box;
  margin: 20px auto 0 auto;
  padding: 0 0 0 8px;
  width: 219px;
  height: 18px;
  border: 0.3px solid #aeaeae;
  border-radius: 2px;

  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 400;
  font-size: 7px;
  line-height: 8px;

  display: flex;
  align-items: center;

  color: #000000;
`;

const SelectBox = ({ setGetOffStation, setIsSelected }) => {
  const [selected, setSelected] = useState("default");

  const onChange = e => {
    setSelected(e.target.value); // 선택된 option의 value
    setGetOffStation(e.target.value); // 내릴 역 id
  };

  useEffect(() => {
    if (selected !== "default") {
      setIsSelected(true); // 내릴 역 선택 완료
    } else {
      setIsSelected(false); // 내릴 역 선택 안함
    }
  }, [selected]);

  return (
    <Station name="station" value={selected} onChange={e => onChange(e)}>
      <option value="default" disabled>
        역 선택
      </option>
      <option value="1">신도림</option>
      <option value="2">대림</option>
      <option value="3">구로디지털단지</option>
      <option value="4">신대방</option>
      <option value="5">신길</option>
      <option value="6">봉천</option>
      <option value="7">서울대입구</option>
      <option value="8">낙성대</option>
      <option value="9">사당</option>
      <option value="10">방배</option>
      <option value="11">서초</option>
      <option value="12">교대</option>
      <option value="13">강남</option>
      <option value="14">역삼</option>
      <option value="15">선릉</option>
      <option value="16">삼성</option>
      <option value="17">종합운동장</option>
      <option value="18">잠실새내</option>
      <option value="19">잠실</option>
      <option value="20">잠실나루</option>
      <option value="21">강변</option>
      <option value="22">구의</option>
      <option value="23">건대입구</option>
      <option value="24">성수</option>
      <option value="25">뚝섬</option>
      <option value="26">한양대</option>
      <option value="27">왕십리</option>
      <option value="28">상왕십리</option>
      <option value="29">신당</option>
      <option value="30">동대문역사문화공원</option>
      <option value="31">을지로4가</option>
      <option value="32">을지로3가</option>
      <option value="33">을지로입구</option>
      <option value="34">시청</option>
      <option value="35">충청로</option>
      <option value="36">아현</option>
      <option value="37">이대</option>
      <option value="38">신촌</option>
      <option value="39">홍대입구</option>
      <option value="40">합정</option>
      <option value="41">당산</option>
      <option value="42">영등포구청</option>
      <option value="43">문래</option>

      <option value="1-1">용담</option>
      <option value="1-2">선담</option>
      <option value="1-3">용두</option>
      <option value="1-4">신설동</option>

      <option value="2-1">도림천</option>
      <option value="2-2">양천구청</option>
      <option value="2-3">신정네거리</option>
      <option value="2-4">까치산</option>
    </Station>
  );
};

export default SelectBox;
