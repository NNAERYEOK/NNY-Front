import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import warning from "../image/warning.svg";
import eye from "../image/eye.svg";
import menu from "../image/menu.svg";
import { GetCurrentEye, GetWarningHistory } from "../api/user";
import { useAppSelector } from "../store";

import SideBar from "./SideBar/SideModal";

const TopBar = () => {
  const { eyes } = useAppSelector(state => state.user);
  const [eye, setEye] = useState(0);
  const [warning, setWarning] = useState(0);

  useEffect(() => {
    setEye(eyes);

    // 현재 누적 경고 개수
    GetWarningHistory()
      .then(data => {
        setWarning(countHistory(data));
      })
      .catch(err => console.log("경고 히스토리 조회 실패"));
  });

  const [SideBarModal, setSideBarModal] = useState(false);
  // 사이드바버튼 클릭하기
  const SelectMenu = () => {
    setSideBarModal(true);
  };
  const countHistory = data => {
    var i;

    data.map(history => {
      if (history.user === id) {
        i = i + 1;
      }
    });

    return i;
  };

  return (
    <>
      <Navbar>
        <Menu onClick={() => SelectMenu()} />
        <Icons>
          <EyeBar>
            <p>{eye}</p>
          </EyeBar>

          <WarningBar>
            <p>{warning}</p>
          </WarningBar>
        </Icons>
      </Navbar>
      <SideBar isOpen={SideBarModal} setSideBarModal={setSideBarModal} />
    </>
  );
};

export default TopBar;

const Navbar = styled.div`
  margin-top: 50px;

  width: 100%;
  height: 50px;

  position: relative;
  top: 0;

  display: flex;
  justify-content: space-between;
`;

const EyeBar = styled.div`
  background: url(${eye});
  width: 100px;
  height: 50px;

  /* margin: 21px auto 0 14px; */

  align-items: center;
  text-align: center;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  color: white;

  p {
    margin: 21px auto 0 14px;
    align-items: center;
    text-align: center;
  }
`;
const WarningBar = styled.div`
  margin-top: 6px;

  background: url(${warning});
  width: 75px;
  height: 44px;

  p {
    margin-left: 44px;
    margin-top: 15px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;

    color: white;
  }
`;

const Menu = styled.div`
  background: url(${menu});
  width: 43px;
  height: 54px;

  margin: 0 0 0 28px;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
`;
