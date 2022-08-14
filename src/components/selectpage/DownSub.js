import styled from "styled-components";
import React, { useState } from "react";
import downsub from "../../image/downsub.svg";
import { useNavigate } from "react-router-dom";

const DownSub = () => {
  const navigate = useNavigate();
  const goSelectCarPage = () => {
    navigate("/selectcar");
  };
  const Img = () => {
    let DownSubImg = [];
    let i;
    for (i = 1; i < 54; i++) {
      var name = "it" + i;
      DownSubImg.push(
        <img
          key={name}
          src={downsub}
          className={name}
          onClick={goSelectCarPage}
        />,
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
  cursor: pointer;
  .it3,
  .it11,
  .it17,
  .it18,
  .it21,
  .it27,
  .it30,
  .it33,
  .it47,
  .it43,
  .it52 {
    animation: box 30s 8s infinite linear;
    animation-timing-function: ease;
  }
  .it1,
  .it6,
  .it12,
  .it15,
  .it20,
  .it22,
  .it27,
  .it31,
  .it33,
  .it39,
  .it37,
  .it50 {
    animation: box1 30s 1s infinite linear;
    animation-timing-function: ease;
  }

  @keyframes box {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(0, 55px);
    }
  }
  @keyframes box1 {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(0, 55px);
    }
  }
`;
