import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import BackImg from "../image/back.svg";

const BackBtn = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <BackBtnBlock onClick={handleGoBack}>
      <img src={BackImg} />
    </BackBtnBlock>
  );
};

const BackBtnBlock = styled.button`
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 23px;
  margin-top: 25px;
`;

export default BackBtn;
