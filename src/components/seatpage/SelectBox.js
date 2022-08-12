import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { subway } from "../../data/subway";

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
      {subway.map(station => {
        return <option value={station.id}>{station.station}</option>;
      })}
    </Station>
  );
};

export default SelectBox;
