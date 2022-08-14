import styled, { createGlobalStyle } from "styled-components";
import React, { useEffect, useState } from "react";

import TopBar from "../components/TopBar";
import BackBtn from "../components/BackBtn";
import StationName from "../components/selectpage/StationName";
import UpSub from "../components/selectpage/UpSub";
import DownSub from "../components/selectpage/DownSub";

import sub2 from "../image/sub2.svg";

const Line2Page = () => {
  return (
    <>
      <Background />
      <TopBar />
      <BackBtn />
      <Wrapper>
        <StationName />
        <UpSub />
        <SubImg src={sub2} />
        <DownSub />
      </Wrapper>
    </>
  );
};

export default Line2Page;

const Wrapper = styled.div`
  display: flex;
`;
const SubImg = styled.img`
  margin-left: 30px;
`;
const Background = createGlobalStyle`
  body {
  background-color: var( --background-black);
  }
`;
