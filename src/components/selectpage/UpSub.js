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
      UpSubImg.push(
        <img key={name} src={upsub} className={name} onClick={goSeatPage} />,
      );
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
    cursor: pointer;
    opacity: 0;
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

  .item3,
  .item7,
  .item11,
  .item14,
  .item19,
  .item21,
  .item25,
  .item30,
  .item33,
  .item37,
  .item41,
  .item52 {
    animation: boxFade 30s 1s infinite linear;
    animation-timing-function: ease;
  }
  .item5,
  .item8,
  .item12,
  .item15,
  .item20,
  .item22,
  .item27,
  .item31,
  .item33,
  .item39,
  .item47,
  .item49 {
    animation: boxFade1 30s 4s infinite linear;
    animation-timing-function: ease;
  }

  @keyframes boxFade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
    to {
      transform: translate(0, 0);
    }
    from {
      transform: translate(0, 51px);
    }
  }
  @keyframes boxFade1 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
    to {
      transform: translate(0, 0);
    }
    from {
      transform: translate(0, 51px);
    }
  }
`;
