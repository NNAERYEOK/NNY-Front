import styled, { createGlobalStyle } from "styled-components";
import React, { useEffect, useState } from "react";

import TopBar from "../components/TopBar";
import BackBtn from "../components/BackBtn";
import RealtimeModal from "../components/RealtimeModal";

const Line2Page = () => {
  const [realtimeModal, setRealtimeModal] = useState(false);
  const [stations, setStations] = useState([
    { id: 1, name: "시청" },
    { id: 2, name: "충정로" },
    { id: 3, name: "아현" },
    { id: 4, name: "이대" },
    { id: 5, name: "신촌" },
    { id: 6, name: "홍대입구" },
    { id: 7, name: "합정" },
    { id: 8, name: "당산" },
    { id: 9, name: "영등포구청" },
    { id: 10, name: "문래" },
    { id: 11, name: "신도림" },
    { id: 12, name: "대림" },
    { id: 13, name: "구로디지털단지" },
    { id: 14, name: "신대방" },
    { id: 15, name: "신림" },
    { id: 16, name: "봉천" },
    { id: 17, name: "서울대입구" },
    { id: 18, name: "낙성대" },
    { id: 19, name: "사당" },
    { id: 20, name: "방배" },
    { id: 21, name: "서초" },
    { id: 22, name: "교대" },
    { id: 23, name: "강남" },
    { id: 24, name: "역삼" },
    { id: 25, name: "선릉" },
    { id: 26, name: "삼성" },
    { id: 27, name: "종합운동장" },
    { id: 28, name: "잠실새내" },
    { id: 29, name: "잠실" },
    { id: 30, name: "잠실나루" },
    { id: 41, name: "강변" },
    { id: 42, name: "구의" },
    { id: 43, name: "건대입구" },
    { id: 44, name: "성수" },
    { id: 45, name: "뚝섬" },
    { id: 46, name: "한양대" },
    { id: 47, name: "왕십리" },
    { id: 48, name: "상왕십리" },
    { id: 49, name: "신당" },
    { id: 50, name: "동대문역사문화공원" },
    { id: 51, name: "을지로4가" },
    { id: 52, name: "을지로3가" },
    { id: 53, name: "을지로입구" },
    { id: 54, name: "신도림" },
    { id: 55, name: "도림천" },
    { id: 56, name: "양천구청" },
    { id: 57, name: "신정네거리" },
    { id: 58, name: "까치산" },
    { id: 59, name: "성수" },
    { id: 60, name: "용답" },
    { id: 61, name: "신답" },
    { id: 62, name: "용두" },
    { id: 63, name: "신설동" },
  ]);
  let stationList = stations.filter(station => station.id < 45);
  let stationList2 = stations.filter(
    station => station.id >= 45 && station.id < 54,
  );
  let stationList3 = stations.filter(
    station => station.id >= 54 && station.id < 59,
  );
  let stationList4 = stations.filter(station => station.id >= 59);

  return (
    <>
      <Background />
      <TopBar />
      <BackBtn />
      <Wrapper>
        <StationName>
          <List1>
            {stationList.map(station => (
              <div onClick={() => setRealtimeModal(true)}>{station.name}</div>
            ))}
          </List1>
          <List2>
            {stationList2.map(station => (
              <div onClick={() => setRealtimeModal(true)}>{station.name}</div>
            ))}
          </List2>
          <List3>
            {stationList3.map(station => (
              <div onClick={() => setRealtimeModal(true)}>{station.name}</div>
            ))}
          </List3>
          <List4>
            {stationList4.map(station => (
              <div onClick={() => setRealtimeModal(true)}>{station.name}</div>
            ))}
          </List4>
        </StationName>
        <UpSub>
          <img src="./image/upsub.svg" />
          <img src="./image/upsub.svg" />
        </UpSub>

        <SubImg src="./image/sub2.svg" />
        <DownSub>
          <img src="./image/downsub.svg" />
          <img src="./image/downsub.svg" />
        </DownSub>
      </Wrapper>
      <RealtimeModal
        isOpen={realtimeModal}
        setRealtimeModal={setRealtimeModal}
      />
    </>
  );
};

export default Line2Page;

const StationName = styled.div`
  margin-top: 105px;
  color: white;
  font-size: 15px;
  font-weight: 800;
  width: 140px;
  text-align: center;
`;
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
const UpSub = styled.div`
  margin-left: 40px;
  img {
    display: block;
  }
  cursor: pointer;
`;
const DownSub = styled.div`
  margin-left: 30px;
  img {
    display: block;
  }
  cursor: pointer;
`;

const List1 = styled.div`
  display: inline-block;
  margin-bottom: 22px;
  div {
    margin-bottom: 58px;
    height: 27px;
    padding-top: 6px;
  }
  cursor: pointer;
`;
const List2 = styled.div`
  display: inline-block;
  margin-top: 33px;
  div {
    margin-bottom: 58px;
    height: 27px;
    padding-top: 6px;
  }
  cursor: pointer;
`;
const List3 = styled.div`
  display: inline-block;
  margin-top: 150px;
  div {
    margin-bottom: 58px;
    height: 27px;
    padding-top: 6px;
  }
  cursor: pointer;
`;
const List4 = styled.div`
  margin-top: 160px;
  div {
    margin-bottom: 58px;
    height: 27px;
    padding-top: 6px;
  }
  cursor: pointer;
`;
