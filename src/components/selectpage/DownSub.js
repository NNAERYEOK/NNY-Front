import styled from "styled-components";
import React, { useState } from "react";
import downsub from "../../image/downsub.svg";
import { useNavigate } from "react-router-dom";

const DownSub = () => {
  const navigate = useNavigate();
  const goSeatPage = () => {
    navigate("/seat");
  };
  const Img = () => {
    let DownSubImg = [];
    let i;
    for (i = 1; i < 54; i++) {
      var name = "item" + i;
      DownSubImg.push(
        <img src={downsub} className={name} onClick={goSeatPage} />,
      );
    }
    return DownSubImg;
  };

  return <DownSubBlock>{Img()}</DownSubBlock>;
};
export default DownSub;
const DownSubBlock = styled.div`
  margin-left: 25px;
  margin-top: 50px;
  img {
    display: block;
    margin-top: 51px;
    height: 40px;
  }
  .item35 {
    margin-top: 108px;
  }
  .item44 {
    margin-top: 200px;
  }
  .item49 {
    margin-top: 210px;
  }
  cursor: pointer;
`;
