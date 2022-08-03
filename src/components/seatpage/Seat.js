import React from "react";
import styled, { css } from "styled-components";

const SeatBox = styled.div`
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
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

const Seat = ({ children, onClick, ...props }) => {
  return (
    <SeatBox {...props} onClick={onClick}>
      {children}
    </SeatBox>
  );
};

export default Seat;
