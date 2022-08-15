import React, { useEffect, useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Back from "../../image/back.svg";
import ProfileImg from "../../image/profile.svg";

const SideBar = ({ isOpen, setSideBarModal }) => {
  return (
    <div>
      <Modal>
        <div className={isOpen ? "container modal-open" : "container"}>
          <div className="modal">
            <Close src={Back} onClick={() => setSideBarModal(false)}></Close>
            <Profile src={ProfileImg}></Profile>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const SideBarBlock = styled.div`
  width: 200px;
  height: 400px;
  background-color: white;
  z-index: 9999;
`;

export default SideBar;
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
    border-radius: 0 90px 90px 0;
    display: flex;
    flex-direction: column;
    z-index: 10;
  }
  .container.modal-open .modal {
    top: 5%;
  }
`;

const Close = styled.img`
  display: block;
  width: 32px;
`;

const Profile = styled.img`
  display: block;
  width: 124px;
  margin: 59px auto;
`;
