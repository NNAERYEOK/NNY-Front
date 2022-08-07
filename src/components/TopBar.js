import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import warning from "../image/warning.svg";
import eye from "../image/eye.svg";
import menu from "../image/menu.svg";

const TopBar = () => {
  return (
    <>
      <Navbar>
        <Menu />
        <Icons>
          <EyeBar>
            <p>3</p>
          </EyeBar>

          <WarningBar>
            <p>1</p>
          </WarningBar>
        </Icons>
      </Navbar>
    </>
  );
};

export default TopBar;

const Navbar = styled.div`
  margin-top: 50px;

  width: 100%;
  height: 50px;

  position: relative;
  top: 0;

  display: flex;
  justify-content: space-between;
`;

const EyeBar = styled.div`
  background: url(${eye});
  width: 100px;
  height: 50px;

  p {
    margin-left: 54px;
    margin-top: 21px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    color: white;
  }
`;
const WarningBar = styled.div`
  margin-top: 6px;

  background: url(${warning});
  width: 75px;
  height: 44px;

  p {
    margin-left: 44px;
    margin-top: 15px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;

    color: white;
  }
`;

const Menu = styled.div`
  background: url(${menu});
  width: 43px;
  height: 54px;

  margin: 0 0 0 28px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
`;
