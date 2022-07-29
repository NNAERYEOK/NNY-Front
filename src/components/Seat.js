import React, { useState } from "react";
import styled from "styled-components";
import myseat from "../image/myseat.svg";
import seated from "../image/seated.svg";
import seat from "../image/seat.svg";

// 상하 23px 차이

//노약자석 왼
const Empty1 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 88px;
  top: 57px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty2 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 88px;
  top: 80px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty3 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 88px;
  top: 103px;

  width: 25px;
  height: 25px;

  color: green;
`;

// 노약자석 오른
const Empty4 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 262px;
  top: 57px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty5 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 262px;
  top: 80px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty6 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 262px;
  top: 103px;

  width: 25px;
  height: 25px;

  color: green;
`;

// 일반 좌석 왼

const Empty11 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 88px;
  top: 205px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty12 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 88px;
  top: 228px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty13 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 88px;
  top: 251px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty14 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 88px;
  top: 274px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty15 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 88px;
  top: 297px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty16 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 88px;
  top: 320px;

  width: 25px;
  height: 25px;

  color: green;
`;

// 왼 2
const Empty17 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 88px;
  top: 422px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty18 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 88px;
  top: 445px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty19 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 88px;
  top: 468px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty20 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 88px;
  top: 491px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty21 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 88px;
  top: 514px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty22 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 88px;
  top: 537px;

  width: 25px;
  height: 25px;

  color: green;
`;

// 왼 아래 노약자

const Empty23 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 88px;
  top: 640px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty24 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 88px;
  top: 663px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty25 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 88px;
  top: 686px;

  width: 25px;
  height: 25px;

  color: green;
`;

// 오른쪽 일반 1

const Empty26 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 262px;
  top: 205px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty27 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 262px;
  top: 228px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty28 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 262px;
  top: 251px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty29 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 262px;
  top: 274px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty30 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 262px;
  top: 297px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty31 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 262px;
  top: 320px;

  width: 25px;
  height: 25px;

  color: green;
`;

// 일반 오른쪽 2
const Empty32 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 262px;
  top: 422px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty33 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 262px;
  top: 445px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty34 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 262px;
  top: 468px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty35 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 262px;
  top: 491px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty36 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 262px;
  top: 514px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty37 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 262px;
  top: 537px;

  width: 25px;
  height: 25px;

  color: green;
`;

// 오 아래 노약자

const Empty38 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 262px;
  top: 640px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty39 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 262px;
  top: 663px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Empty40 = styled.div`
  background: url(${seat});
  position: absolute;
  left: 262px;
  top: 686px;

  width: 25px;
  height: 25px;

  color: green;
`;

const Other = styled.div`
  background: url(${seated});
  left: 262px;
  width: 25px;
  height: 25px;
`;

const Mine = styled.div`
  position: absolute;
  left: 95px;
  top: 54px;
  background: url(${myseat});

  width: 25px;
  height: 25px;
`;

// 좌석 컴포넌트 로직 만들기

const CustomSeat = styled.div``;

const Seat = ({ left, ...props }) => {
  const [seat, setSeat] = useState([
    { left: "262px", top: "686px", seated: true, mine: true },
  ]);
  return (
    <>
      {/* 왼쪽 노약자 */}
      <Empty1 /> <Empty2 /> <Empty3 />
      {/* 오른쪽 노약자 */}
      <Empty4 /> <Empty5 /> <Empty6 />
      {/* 왼 1 */}
      <Empty11 /> <Empty12 /> <Empty13 />
      <Empty14 /> <Empty15 /> <Empty16 />
      {/* 왼 2 */}
      <Empty17 /> <Empty18 /> <Empty19 />
      <Empty20 /> <Empty21 /> <Empty22 />
      {/* 왼 3 */}
      <Empty23 /> <Empty24 /> <Empty25 />
      {/* 오 2 */}
      <Empty26 /> <Empty27 /> <Empty28 />
      <Empty29 /> <Empty30 /> <Empty31 />
      {/* 오 2 */}
      <Empty32 /> <Empty33 /> <Empty34 />
      <Empty35 /> <Empty36 /> <Empty37 />
      {/* 오 아래 노약자 */}
      <Empty38 /> <Empty39 /> <Empty40 />
    </>
  );
};

export default Seat;
