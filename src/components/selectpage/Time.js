import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Time = () => {
  const [minutes, setMinutes] = useState(0);
  const [minutes2, setMinutes2] = useState(3);
  const [minutes3, setMinutes3] = useState(2);
  const [seconds, setSeconds] = useState(45);
  const [seconds2, setSeconds2] = useState(27);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) === 0 && parseInt(minutes) === 0) {
        setMinutes("곧");
        setSeconds("도착");
      }
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);
  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) === 0 && parseInt(minutes3) === 0) {
        setMinutes3("곧");
        setSeconds("도착");
      }
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes3) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes3) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes3, seconds]);
  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds2) === 0 && parseInt(minutes2) === 0) {
        setSeconds2("곧 도착");
      }
      if (parseInt(seconds2) > 0) {
        setSeconds2(parseInt(seconds2) - 1);
      }
      if (parseInt(seconds2) === 0) {
        if (parseInt(minutes2) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes2(parseInt(minutes) - 1);
          setSeconds2(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes2, seconds2]);

  return (
    <TimeBlock>
      <LeftTime>
        <P>
          성수(외선)행
          <Span>곧도착</Span>
        </P>
        <P>
          성수(외선)행
          <Span>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </Span>
        </P>
      </LeftTime>
      <CenterTime></CenterTime>
      <RightTime>
        <P>
          성수(내선)행
          <Span>
            {minutes3}:{seconds < 10 ? `0${seconds}` : seconds}
          </Span>
        </P>
        <P>
          성수(내선)행
          <Span>
            {minutes2}:{seconds2 < 10 ? `0${seconds2}` : seconds2}
          </Span>
        </P>
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

const Span = styled.span`
  font-weight: 400;
  font-size: 13px;
  color: red;
  margin-left: 10px;
`;

const P = styled.p`
  color: #3f3f3f;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  margin-top: 20px;
  margin-left: 15px;
`;
