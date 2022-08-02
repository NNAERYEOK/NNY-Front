import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();
  const goHomePage = () => {
    navigate("/");
  };
  return (
    <BackBtnBlock onClick={goHomePage}>
      <img src="./image/backbtn.svg"></img>
    </BackBtnBlock>
  );
};

const BackBtnBlock = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 3%;
  margin-top: 50px;
`;

export default BackBtn;
