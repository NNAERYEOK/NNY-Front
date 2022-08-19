import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import warning from "../image/warning.svg";
import eye from "../image/eye.svg";
import menu from "../image/menu.svg";

import { GetCurrentEye, GetWarningHistory, GetProfile } from "../api/user";
import { useAppSelector, useAppDispatch } from "../store";
import { setUser } from "../store/features/userSlice";


import { useNavigate } from "react-router-dom";


import SideBar from "./SideBar/SideModal";

const TopBar = () => {
  const dispatch = useAppDispatch();

  const { eyes } = useAppSelector(state => state.user);
  const [eye, setEye] = useState(0);
  const [warning, setWarning] = useState(0);

  useEffect(() => {
    // GetProfile() // 프로필 가져오기
    //   .then(data => {
    //     console.log("프로필 가져옴~!", data);
    //     dispatch(setEye(data.data.eyes));
    //   })
    //   .catch(err => console.log("topbar : eye 가져오기 실패"));

    if (eyes === "") {
      setEye(0);
    } else {
      setEye(eyes);
    }
  }, []);

  useEffect(() => {
    // 현재 누적 경고 개수
    GetWarningHistory()
      .then(data => {
        console.log("누적 경고 개수 = ", data.data.length);
        setWarning(data.data.length);
      })
      .catch(err => console.log("경고 히스토리 조회 실패"));
  }, []);

  const [SideBarModal, setSideBarModal] = useState(false);
  // 사이드바버튼 클릭하기
  const SelectMenu = () => {
    setSideBarModal(true);
  };

  const navigate = useNavigate();
  const goChargingPage = () => {
    navigate("/charging");
  };
  const goWarningPage = () => {
    navigate("/warninghistory");
  };

  return (
    <>
      <Navbar>
        <Menu onClick={() => SelectMenu()} />
        <Icons>
          <EyeBar onClick={goChargingPage}>
            <p>{eye}</p>
          </EyeBar>

          <WarningBar onClick={goWarningPage}>
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
