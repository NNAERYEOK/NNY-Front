import React, { Children, useState } from "react";
import styled, { css } from "styled-components";
import myseat from "../image/myseat.svg";
import seated from "../image/seated.svg";
import seat from "../image/seat.svg";

const Seat = ({ children, left, top, onClick, ...props }) => {
  const SeatBox = styled.div`
    position: absolute;
    left: ${left};
    top: ${top};
    width: 19px;
    height: 19px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #4fe0b6;

    background: #ffffff; // 흰색

    ${props =>
      props.myseat &&
      css`
        background: #4fe0b6; // 민트
      `}

    ${props =>
      props.seated &&
      css`
        background: #464646; // 검정
      `}
  `;

  return (
    <SeatBox {...props} onClick={onClick}>
      {children}
    </SeatBox>
  );
};

export default Seat;
