import React, { useEffect, useState } from "react";
import styled from "styled-components";

import X from "../image/X.svg";
import leftBtn from "../image/leftBtn.svg";
import rightBtn from "../image/rightBtn.svg";

import { subway } from "../data/subway";

import Time from "./Time";

const RealtimeModal = ({ selectSubwayId, isOpen, setRealtimeModal }) => {
  console.log(selectSubwayId);
  if (selectSubwayId == 0) {
    var leftSub = "";
    var rightSub = subway[selectSubwayId + 1].station;
    console.log("if");
  } else if (selectSubwayId < 52) {
    leftSub = subway[selectSubwayId - 1].station;
    rightSub = subway[selectSubwayId + 1].station;
    console.log("else if");
  } else {
    leftSub = subway[51].station;
    rightSub = "";
    console.log("else");
  }
  return (
    <div>
      <Modal>
        <div className={isOpen ? "container modal-open" : "container"}>
          <div className="modal">
            <Menu>
              <Refresh />
              <XIcon onClick={() => setRealtimeModal(false)}></XIcon>
            </Menu>
            <StationInfo>
              <Left>
                <img src={leftBtn} />
                <p>{leftSub}</p>
              </Left>
              <Center>
                <p>{subway[selectSubwayId].station}</p>
              </Center>
              <Right>
                <p>{rightSub}</p>
                <img src={rightBtn} id="rightImg" />
              </Right>
            </StationInfo>
            <Time />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RealtimeModal;

const Modal = styled.div`
  .modal {
    box-sizing: border-box;
    background: #fff;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 27px;
    transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);
    top: 100%;
    position: fixed;
    left: 0;
    text-align: left;
    border-radius: 27px;
    display: flex;
    flex-direction: column;
  }
  .container.modal-open .modal {
    top: 60%;
  }
  p {
    color: #3f3f3f;
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    margin-top: 20px;
    margin-left: 15px;
  }
  span {
    font-weight: 400;
    font-size: 10px;
    color: #ff0000;
    margin-left: 10px;
  }
`;
const Menu = styled.div`
  display: flex;
  width: 80px;
  margin-left: auto;
`;
const XIcon = styled.div`
  background: url(${X});
  width: 23px;
  height: 23px;
  margin-left: 20px;
  cursor: pointer;
`;
const Refresh = styled.div`
  background: url("./image/refresh.svg");
  width: 23px;
  height: 23px;
  cursor: pointer;
`;
const StationInfo = styled.div`
  display: flex;
  margin-top: 40px;
  margin: 0 auto;
  img {
    display: inline;
    margin-left: 3px;
    cursor: pointer;
    margin-top: 5px;
  }
`;
const Left = styled.div`
  width: 100px;
  height: 26px;
  background: rgba(51, 162, 61, 0.77);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px 0 0 7px;
  margin-top: 13px;
  text-align: left;
  p {
    display: inline;
    font-weight: 700;
    font-size: 10px;
    color: #ffffff;
    margin-top: 5px;
    margin-left: 3px;
  }
`;
const Right = styled.div`
  width: 100px;
  height: 26px;
  background: rgba(51, 162, 61, 0.77);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 7px 7px 0;
  margin-top: 13px;
  text-align: right;
  p {
    display: inline;
    font-weight: 700;
    font-size: 10px;
    color: #ffffff;
    margin-right: 3px;
  }
`;
const Center = styled.div`
  width: 120px;
  height: 44px;
  background: #ffffff;
  border: 3px solid #33a23d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  p {
    font-weight: 700;
    font-size: 13px;
    text-align: center;
    margin: 13px auto;
  }
`;
