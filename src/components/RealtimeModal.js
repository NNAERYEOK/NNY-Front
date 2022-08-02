import React, { useEffect, useState } from "react";
import styled from "styled-components";
import X from "../image/X.svg";

const RealtimeModal = ({ isOpen, setRealtimeModal }) => {
  const SelectSeat = async () => {
    setRealtimeModal(false); // 모달 닫기
  };

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
                <img src="./image/leftBtn.svg"></img>
              </Left>
              <Center></Center>
              <Right>
                <img src="./image/rightBtn.svg"></img>
              </Right>
            </StationInfo>
            <Time>
              <LeftTime>
                <p>
                  성수(외선)행 <span> 곧도착</span>
                </p>
                <p>
                  성수(외선)행 <span> 곧도착</span>
                </p>
              </LeftTime>
              <CenterTime></CenterTime>
              <RightTime>
                <p>
                  성수(내선)행 <span> 곧도착</span>
                </p>
                <p>
                  성수(내선)행 <span> 곧도착</span>
                </p>
              </RightTime>
            </Time>
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
    top: 500px;
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
`;
const Left = styled.div`
  width: 168px;
  height: 26px;
  background: rgba(51, 162, 61, 0.77);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px 0 0 7px;
  margin-top: 10px;
`;
const Right = styled.div`
  width: 168px;
  height: 26px;
  background: rgba(51, 162, 61, 0.77);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 7px 7px 0;
  margin-top: 10px;
  img {
    background-color: red;
  }
`;
const Center = styled.div`
  width: 120px;
  height: 44px;
  background: #ffffff;
  border: 3px solid #33a23d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
`;
const Time = styled.div`
  display: flex;
  margin-top: 25px;
`;
const LeftTime = styled.div`
  width: 140px;
  height: 26px;
  margin-right: 28px;
`;
const RightTime = styled.div`
  width: 148px;
  height: 26px;
  margin-left: 28px;
`;
const CenterTime = styled.div`
  width: 2px;
  height: 80px;
  background: #bfbfbf;
`;
