import styled from "styled-components";
import React, { useState } from "react";
import upsub from "../../image/upsub.svg";
import { useNavigate } from "react-router-dom";

const UpSub = () => {
  const navigate = useNavigate();
  const goSeatPage = () => {
    navigate("/seat");
  };
  const Img = () => {
    let UpSubImg = [];
    let i;
    for (i = 1; i < 54; i++) {
      var name = "item" + i;
      UpSubImg.push(<img src={upsub} className={name} onClick={goSeatPage} />);
    }
    return UpSubImg;
  };

  return <UpSubBlock>{Img()}</UpSubBlock>;
};
export default UpSub;
const UpSubBlock = styled.div`
  margin-left: 50px;
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
