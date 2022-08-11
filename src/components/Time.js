import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Time = () => {
  return (
    <TimeBlock>
      <LeftTime>
        <p>
          성수(외선)행 <span> 곧도착</span>
        </p>
        <p>
          성수(외선)행 <span> 곧도착</span>
        </p>
      </LeftTime>
      <CenterTime></CenterTime>
      <RightTime>
        <p>
          성수(내선)행 <span> 곧도착</span>
        </p>
        <p>
          성수(내선)행 <span> 곧도착</span>
        </p>
      </RightTime>
    </TimeBlock>
  );
};

export default Time;
const TimeBlock = styled.div`
  display: flex;
  margin: 25px auto;
`;
const LeftTime = styled.div`
  width: 140px;
  height: 26px;
  margin-right: 28px;
  img {
    cursor: pointer;
  }
`;
const RightTime = styled.div`
  width: 148px;
  height: 26px;
  margin-left: 28px;
  img {
    cursor: pointer;
  }
`;
const CenterTime = styled.div`
  width: 2px;
  height: 80px;
  background: #bfbfbf;
`;
