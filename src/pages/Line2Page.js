import styled, { createGlobalStyle } from "styled-components";
import React, { useEffect, useState } from "react";

import TopBar from "../components/TopBar";
import BackBtn from "../components/BackBtn";

const Line2Page = () => {
  const [stations, setStations] = useState([
    { id: 1, name: "시청" },
    { id: 2, name: "충정로" },
    { id: 3, name: "아현" },
    { id: 4, name: "이대" },
    { id: 5, name: "신촌" },
    { id: 6, name: "신촌" },
    { id: 7, name: "신촌" },
    { id: 8, name: "신촌" },
    { id: 9, name: "신촌" },
    { id: 10, name: "신촌" },
    { id: 11, name: "시청" },
    { id: 12, name: "충정로" },
    { id: 13, name: "아현" },
    { id: 14, name: "이대" },
    { id: 15, name: "신촌" },
    { id: 16, name: "신촌" },
    { id: 17, name: "신촌" },
    { id: 18, name: "신촌" },
    { id: 19, name: "신촌" },
    { id: 20, name: "신촌" },
    { id: 21, name: "시청" },
    { id: 22, name: "충정로" },
    { id: 23, name: "아현" },
    { id: 24, name: "이대" },
    { id: 25, name: "신촌" },
    { id: 26, name: "신촌" },
    { id: 27, name: "신촌" },
    { id: 28, name: "신촌" },
    { id: 29, name: "신촌" },
    { id: 30, name: "신촌" },
    { id: 41, name: "시청" },
    { id: 42, name: "충정로" },
    { id: 43, name: "아현" },
    { id: 44, name: "이대" },
    { id: 45, name: "신촌" },
    { id: 46, name: "신촌" },
    { id: 47, name: "신촌" },
    { id: 48, name: "신촌" },
    { id: 49, name: "신촌" },
    { id: 50, name: "신촌" },
  ]);
  return (
    <>
      <Background />
      <TopBar />
      <BackBtn />
      <StationName>
        {stations.map(station => (
          <div>{station.name}</div>
        ))}
      </StationName>
      <Sub src="./image/sub2.svg" />
    </>
  );
};

export default Line2Page;
const Sub = styled.img`
  margin-top: 20px;
  margin-right: 104px;
  background-color: blue;
`;
const StationName = styled.div`
  color: white;
  font-size: 15px;
  font-weight: 800;
  background-color: red;
  width: 60px;
`;
const Background = createGlobalStyle`
  body {
  background-color: var( --background-black);
  }
`;
