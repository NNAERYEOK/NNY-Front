import React from "react";
import styled from "styled-components";
import myseat from "../image/myseat.svg";
import seated from "../image/seated.svg";
import seat from "../image/seat.svg";

// 상하 23px 차이
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

const Other = styled.div`
  background: url(${seated});

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

const Seat = ({ left, ...props }) => {
  return (
    <>
      <Empty1 /> <Empty2 /> <Empty3 />
      <Empty4 /> <Empty5 /> <Empty6 />
    </>
  );
};

export default Seat;
