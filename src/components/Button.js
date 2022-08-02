import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return <ButtonBlock>{children} </ButtonBlock>;
};

const ButtonBlock = styled.button`
  width: 75%;
  height: 35px;
  max-width: 300px;
  background: #4fe0b6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: block;
  margin: 0 auto;
  color: white;
  border: none;
  cursor: pointer;
  font-family: "NanumSquare";
  margin-top: 89px;
  &:hover,
  &:focus {
    background: #09382b;
  }
`;

export default Button;
