import styled from "styled-components";
import React, { useState } from "react";

import RealtimeModal from "../../components/selectpage/RealtimeModal";
import { subway } from "../../data/subway";

const StationName = () => {
  const [realtimeModal, setRealtimeModal] = useState(false);

  // 선택된 역의 id
  const [selectedId, setSelectedId] = useState(0);

  // 역 클릭하기
  const SelectSubway = id => {
    setRealtimeModal(true);
    setSelectedId(id - 1);
  };

  let stationList = subway.filter(asubway => asubway.id < 35);
  let stationList2 = subway.filter(
    asubway => asubway.id >= 35 && asubway.id < 44,
  );
  let stationList3 = subway.filter(
    asubway => asubway.id >= 44 && asubway.id < 49,
  );
  let stationList4 = subway.filter(asubway => asubway.id >= 49);
  return (
    <>
      <StationNameBloack>
        <List1>
          {stationList.map(asubway => (
            <div onClick={() => SelectSubway(asubway.id)}>
              {asubway.station}
            </div>
          ))}
        </List1>
        <List2>
          {stationList2.map(asubway => (
            <div onClick={() => SelectSubway(asubway.id)}>
              {asubway.station}
            </div>
          ))}
        </List2>
        <List3>
          {stationList3.map(asubway => (
            <div onClick={() => SelectSubway(asubway.id)}>
              {asubway.station}
            </div>
          ))}
        </List3>
        <List4>
          {stationList4.map(asubway => (
            <div onClick={() => SelectSubway(asubway.id)}>
              {asubway.station}
            </div>
          ))}
        </List4>
      </StationNameBloack>
      <RealtimeModal
        selectSubwayId={selectedId}
        isOpen={realtimeModal}
        setRealtimeModal={setRealtimeModal}
      />
    </>
  );
};

export default StationName;

const StationNameBloack = styled.div`
  margin-top: 105px;
  color: white;
  font-size: 15px;
  font-weight: 800;
  width: 140px;
  text-align: center;
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
